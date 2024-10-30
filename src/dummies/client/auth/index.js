import { EmailSender } from "@/dummies/sendgrid";
import { Contact } from "../contact";
import { User } from "../user";
import { AuthError } from "./error/auth.error";

const usersDict = {
    'juan@gmail.com': new User('juan@gmail.com', '123456', 'Juan', 'Perez', '+56 789012345', 'ES', 'juan.pagozen.alias'),
    'tobiasjuhasz@gmail.com': new User('tobiasjuhasz@gmail.com', '123456', 'Tobias', 'Juhasz', '+56 987654321', 'ES', 'tobias.pagozen.alias'),
    'maria@gmail.com':  new User('maria@gmail.com', '123456', 'Maria', 'Rodriguez', '+56 987654321', 'ES', 'maria.pagozen.alias'),
    'ramirogarciaargibay@gmail.com': new User('ramirogarciaargibay@gmail.com', '123456', 'Maria', 'Rodriguez', '+56 987654321', 'ES', 'ramiro.pagozen.alias'),
}

export const getContactByEmail = (email) => {
    const user = usersDict[email];
    if(!user) return null;
    return new Contact(usersDict[email]);
};

const resetTokens = {}
export class DummyAuth {
    constructor() {
        const token = localStorage.getItem('session_token');
        if(!token) return;

        this.currentToken = token;
        const decoded = JSON.parse(token);

        /**
         * @type {User}
         */
        this.currentAccount = usersDict[decoded.email];
    }

    /**
     * Sign in with email and password
     * @param {string} email 
     * @param {string} password 
     * @throws {AuthError} - Throws an error if the email or password is invalid
     * @returns {Promise<Account>} - Returns the account object
     */
    signIn = (email, password) => new Promise((resolve, reject) => {
        if (!email || !password) reject(new AuthError('Invalid email or password'));

        const user = usersDict[email];
        if (!user) reject(new AuthError('The account does not exist'));
        if (user.password !== password) reject(new AuthError('Invalid email or password'));

        this.currentAccount = user;
        this.currentToken = JSON.stringify({
            email: user.email,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
        });
        
        localStorage.setItem('session_token', this.currentToken);
        resolve(this.currentToken);
    });

    /**
     * Signs out the current user
     * @throws {AuthError} - Throws an error if the user is not signed in
     * @returns {Promise<void>} - Returns a promise that resolves when the user is signed out
     */
    signOut = () => new Promise((resolve, reject) => {
            if(!this.currentAccount) reject(new AuthError('User is not signed in'));
        this.currentToken = null;
        localStorage.removeItem('session_token');
        setTimeout(() => {
            resolve();
        }, 2000);
    });
           

    /**
     * Signs up a new user with the given email and password
     * @param {string} email - The email address of the user
     * @param {string} password - The password of the user
     * @param {string} nationality - The nationality of the user
     * @throws {AuthError} - Throws an error if the email or password is invalid
     * @returns {Promise<Account>} - Returns the account object
     */
    signUp = (email, password, nationality) => new Promise((resolve, reject) => {
        if(!email || !password) reject(new AuthError('Invalid email or password'));
        setTimeout(() => {
            const user = new User(email, password, null, null, null, nationality);
            usersDict[email] = user;
            resolve(user);
        }, 2000);
    });

    /**
     * 
     * @param {*} email 
     * @throws {AuthError} - Throws an error if the email is invalid
     * @returns {Promise<string>} - Una promesa que resuelve con el token de reseteo
     */
    createResetToken = (email) => new Promise((resolve, reject) => {
        if (!email) reject(new AuthError('Invalid email'));
        const user = usersDict[email];
        if (!user) reject(new AuthError('The account does not exist'));

        const token = resetTokens[email];
        if (token) reject(new AuthError('Reset token already exists'));

        const numericToken = Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit number
        
        resetTokens[email] = numericToken;
        
        resolve(resetTokens[email]);
    });

    isValidResetToken = (email, token) => {
        if (!email || !token) throw new AuthError('Invalid email or token');
        console.log(token)  
        console.log(resetTokens)
        //if (resetTokens[email] !== token) throw new AuthError('Invalid token'); 

        return true;
    };

    /**
     * Sends a forgot password email to the given email address
     * @param {string} email - The email address of the user
     * @param {string} method - The method to use for sending the email (e.g., 'email', 'sms')
     * @throws {AuthError} - Throws an error if the email is invalid
     * @returns {Promise<void>} - Returns a promise that resolves when the email is sent
     */
    forgotPassword = async (email, method) => {
        const token = await this.createResetToken(email);
        const accountName = usersDict[email].name;
        switch (method) {
            case 'email':
                const emailSender = new EmailSender();
                await emailSender.send(
                    {
                        name: accountName,
                        email: email,
                    },
                    token
                );
                break;
            case 'sms':
                if (!user.phone) reject(new AuthError('The account does not have a phone number'));
                // TODO: Send SMS with forgot password link
                break;
            case 'whatsapp':
                if (!user.phone) reject(new AuthError('The account does not have a phone number'));
                // TODO: Send WhatsApp with forgot password link
                break;
            default:
                reject(new AuthError('Invalid method'));
                break;
        }
    };

    /**
     * Resets the password for the given token
     * @param {string} token - The token to reset the password
     * @param {string} password - The new password
     * @throws {AuthError} - Throws an error if the token or password is invalid
     * @returns {Promise<void>} - Returns a promise that resolves when the password is reset
     */
    resetPassword = (email, token, password) => new Promise((resolve, reject) => {
        if (!email || !token || !password) reject(new AuthError('Invalid email, token or password'));
        /**
         * @type {User | undefined}
         */
        const user = usersDict[email];
        if (!user) reject(new AuthError('The account does not exist'));
        if (!this.isValidResetToken(email, token)) reject(new AuthError('Invalid token'));
        if (user.password === password) reject(new AuthError('New password must be different from the current password'));
        user.editInfo(null, password, null, null, null, null);
        
        resolve();
    });
} 