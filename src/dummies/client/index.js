import { DummyAuth } from "./auth";
export class DummyClient {
    constructor() {
        this.auth = new DummyAuth();
    }
}