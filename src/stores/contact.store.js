import { defineStore } from "pinia";
import { useAuthStore } from "./auth-store";

const auth = useAuthStore();
export const useContactStore = defineStore('contact', () => {
    const currentUser = auth.getAccount();
    
    const contacts = currentUser.contacts;
    return {
        contacts,
        addContact: async (contact) => {
            const newContact = await currentUser.addContact(contact);
            contacts.push(newContact);
            return contact;
        },
        deleteContact: async (contact) => {
            const index = contacts.findIndex(c => c.email === contact.email);
            if (index === -1) throw new ContactError('Contacto no encontrado');
            await currentUser.deleteContact(contact);
            contacts.splice(index, 1);
        },
    }
})