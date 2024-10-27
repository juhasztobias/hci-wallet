export class ActivityError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ActivityError';
    }
}