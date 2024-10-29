const LATENCY_MS = 200;
/**
 * Datos de un contacto
 * @property {string} name - Nombre del contacto
 * @property {string} lastName - Apellido del contacto
*/
export class Contact {
    constructor(account) {
        this.name = account.name;
        this.lastName = account.surname;
        this.email = account.email;
    }

    getInfo = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this), LATENCY_MS);
        });
    }
    
    /**
     * Obtiene las cuentas del contacto a donde se le puede transferir dinero
     * @returns {Promise<Account[]>} - Una promesa que resuelve con una lista de cuentas
     */
    getAccounts() { }
}