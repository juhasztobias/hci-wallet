export class ContactError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ContactError';
    }   
}