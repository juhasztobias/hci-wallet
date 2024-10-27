import emailjs from '@emailjs/browser';


emailjs.init({
    publicKey: import.meta.env.VITE_PUBLIC_EMAIL,
});

export class EmailSender {
    constructor() {}

    send = async (to, message) => {
        return await emailjs.send("service_pdqdi9v", "template_9kcq2nb",{
            message,
            "to_name": to.name,
            "to_email": to.email,
            "reply_to": 'do-not-reply@pagozen.com',
            "subject": 'Pagozen - Recuperación de contraseña',
        }); 
    }
}