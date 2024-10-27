import sgMail from '@sendgrid/mail';

sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

export class Sendgrid {
    constructor() {
        this.sgMail = sgMail;
    }

    sendEmail = async (to, subject, text, html) => {
        const msg = {
            to,
            from: 'tjuhasz@ita.edu.ar',
            subject,
            text,
            html,
        };
        return await this.sgMail.send(msg);
    }
}