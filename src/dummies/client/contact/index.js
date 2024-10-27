/**
 * Datos de un contacto
 * @property {string} name - Nombre del contacto
 * @property {string} lastName - Apellido del contacto
 */
export class Contact {
    constructor(account) {

    }

    getInfo() { }
    
    /**
     * Obtiene las cuentas del contacto a donde se le puede transferir dinero
     * @returns {Promise<Account[]>} - Una promesa que resuelve con una lista de cuentas
     */
    getAccounts() { }
}