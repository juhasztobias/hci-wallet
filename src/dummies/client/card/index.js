import { CardError } from "./error";

const LATENCY_MS = 200;

export class Card {
    constructor(cardNumber, cardHolder, expirationDate) {
        this.cardNumber = cardNumber;
        this.cardHolder = cardHolder;
        this.expirationDate = expirationDate;
    }


    /**
     * Obtiene la información de la tarjeta
     * @returns {Promise<Card>} - Una promesa que resuelve con la información del usuario
     */
    getInfo = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this), LATENCY_MS);
        });
    }

    /**
     * @param {string} cardNumber 
     * @param {string} cardHolder 
     * @param {string} expirationDate 
     * @returns {Promise<void>} - Una promesa que resuelve con el resultado de la operación
     */
    editCard = (cardNumber, cardHolder, expirationDate) => {
        return new Promise((resolve, reject) => {
            if (!cardNumber || !cardHolder || !expirationDate)
                reject(new CardError('Invalid card number, card holder or expiration date'));
            setTimeout(() => {
                this.cardNumber = cardNumber;
                this.cardHolder = cardHolder;
                this.expirationDate = expirationDate;

                resolve();
            }, LATENCY_MS);
        });
    }
}