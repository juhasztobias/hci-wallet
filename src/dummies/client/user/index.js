import { Contact } from "../contact";
import { ContactError } from "../contact/error";

const LATENCY_MS = 200;

export class User {
    constructor(email, password, name, surname, phone, nationality) {
        if (!email || !password) throw new UserError('Invalid email or password');
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.nationality = nationality;

        /**
         * @type {Account[]}
         */
        this.accounts = [];

        /**
         * @type {Cards[]}
         */
        this.cards = [];

        /**
         * @type {Activity[]}
         */
        this.activities = [];

        /**
         * @type {Contact[]}
         */
        this.contacts = [];
    }

    /**
     * Obtiene la información del usuario
     * @returns {Promise<User>} - Una promesa que resuelve con la información del usuario
     */
    getInfo = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this), LATENCY_MS);
        });
    }

    /**
     * Edita la información del usuario
     * @param {string} email - El nuevo email del usuario
     * @param {string} password - El nuevo password del usuario
     * @returns {Promise<void>} - Una promesa que resuelve con el resultado de la operación
     */
    editInfo = (email, password, name, surname, phone, nationality) => {
        return new Promise((resolve) =>
            setTimeout(() => {
                this.email = email ?? this.email;
                this.password = password ?? this.password;
                this.name = name ?? this.name;
                this.surname = surname ?? this.surname;
                this.phone = phone ?? this.phone;
                this.nationality = nationality ?? this.nationality;
                resolve();
            }, LATENCY_MS)
        );
    }

    /**
     * Obtiene las actividades del usuario (transferencias, pagos, etc.)
     * @returns {Promise<Activity[]>} - Una promesa que resuelve con una lista de actividades
     */
    getActivities = () => {
        return new Promise((resolve, reject) =>
            setTimeout(() => resolve(this.activities), LATENCY_MS)
        );
    }

    /**
     * 
     * @param {Contact} - Un contacto nuevo
     * @returns 
     */
    addContact = (contact) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.contacts.find(c => c.email === contact.email)) reject(new ContactError('Contact already exists'));
                this.contacts.push(contact);
                resolve(contact);
            }, LATENCY_MS);
        });
    }
    
    deleteContact = (contact) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.contacts.findIndex(c => c.email === contact.email);
                if (index === -1) reject(new ContactError('Contacto no encontrado'));
                this.contacts.splice(index, 1);
                resolve();
            }, LATENCY_MS);
        });
    }

    /**
     * 
     * @returns {Promise<Contact[]>}
     */
    getContacts = () => {
        return new Promise((resolve, reject) => setTimeout(() => resolve(this.contacts), LATENCY_MS));    
    }

    /**
     * Obtiene la información del contacto asociado con la cuenta (para compartir con otro usuario)
     * @returns {Promise<Contact>}
     */
    getContactInfo = () => {
        return new Promise((resolve, reject) => {
            // TODO: Implementar
        });
    }


    /**
     * Obtiene las tarjetas asociadas con la cuenta
     * @returns {Promise<Card[]>}
     */
    getCards = () => {
        return new Promise((resolve) => setTimeout(() => resolve(this.cards), LATENCY_MS));
    }

    /**
     * Obtiene la información de una tarjeta asociada con la cuenta
     * @param {string} cardId - El id de la tarjeta (últimos 4 números de la tarjeta)
     * @returns {Promise<Card>} - Una promesa que resuelve con la información de la tarjeta
     */
    getCardInfo = (cardId) => {
        return new Promise((resolve, reject) =>
            setTimeout(() => {
                const cardIndex = this.cards.findIndex(card => card.cardNumber.slice(-4) === cardId);
                if (cardIndex === -1) reject(new CardError('Invalid card id'));
                resolve(this.cards[cardIndex]);
            }, LATENCY_MS)
        );
    }

    /**
     * Crea una nueva tarjeta para la cuenta
     * @param {string} cardNumber - El número de la tarjeta
     * @param {string} cardHolder - El nombre del titular de la tarjeta
     * @param {string} expirationDate - La fecha de expiración de la tarjeta
     * @returns {Promise<Card>} - Una promesa que resuelve con la información de la tarjeta
     */
    addCard = (cardNumber, cardHolder, expirationDate) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const newCard = new Card(cardNumber, cardHolder, expirationDate);
                    this.cards.push(newCard);
                    resolve(newCard);
                } catch (error) {
                    reject(error);
                }
            }, LATENCY_MS);
        });
    }

    /**
     * Elimina una tarjeta asociada con la cuenta
     * @param {string} cardId - El id de la tarjeta (últimos 4 números de la tarjeta)
     * @returns {Promise<void>} - Una promesa que resuelve con el resultado de la operación
     */
    deleteCard = (cardId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const cardIndex = this.cards.findIndex(card => card.cardNumber.slice(-4) === cardId);
                if (cardIndex === -1) reject(new CardError('Invalid card id'));
                this.cards.splice(cardIndex, 1);
                resolve();
            }, LATENCY_MS);
        });
    }
}