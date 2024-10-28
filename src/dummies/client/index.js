import { DummyAuth, getContactByEmail } from "./auth";
export class DummyClient {
    constructor() {
        this.auth = new DummyAuth();
        this.getContactByEmail = getContactByEmail;
    }
}