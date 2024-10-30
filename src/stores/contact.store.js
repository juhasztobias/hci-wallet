import { useAuthStore } from "./auth-store";

export const useContactStore = defineStore('contact', () => {
    const auth = useAuthStore();
    const currentUser = auth.getAccount();

    const contacts = currentUser.contacts;
    return {
        contacts,
        addContact: async (contact) => {
            try {
                await currentUser.addContact(contact);
                return contact;
            } catch (error) {
                throw error;
            }
        },
    }
})