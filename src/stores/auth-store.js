import { DummyClient } from "@/dummies/client";
import { defineStore } from "pinia";
import { ref } from "vue";

const client = new DummyClient();

export const useAuthStore = defineStore("auth", () => {
    const token = ref(client.auth.currentToken);
    const isLoggedIn = ref(token.value !== null);
    const errors = ref([])

    return {
        token,
        isLoggedIn,
        errors,
        login: async (email, password) => {
            try {
                const token = await client.auth.signIn(email, password);
                token.value = token;
                isLoggedIn.value = true;

                localStorage.setItem('token_store', JSON.parse(token));
            } catch (error) {
                errors.value.push(error);
                console.log(error);
            }
        },
        logout: async () => {
            try {
                await client.auth.signOut();
                token.value = null;
                isLoggedIn.value = false;
                localStorage.removeItem('token_store');
            } catch (error) {
                errors.value.push(error);
            }
        },
        register: async (email, password, nationality) => {
            try {
                await client.auth.signUp(email, password, nationality);
                token.value = await client.auth.signIn(email, password);
                isLoggedIn.value = true;

                localStorage.setItem('token_store', JSON.stringify(token.value));
            } catch (error) {
                errors.value.push(error);
            }
        },
        isValidResetToken: async (email, token) => {
            try {
                return await client.auth.isValidResetToken(email, token);
            } catch (error) {
                errors.value.push(error);
            }
        },
        forgotPassword: async (email, method) => {
            try {
                await client.auth.forgotPassword(email, method);
            } catch (error) {
                errors.value.push(error);
            }
        },
        resetPassword: async (email, token, password) => {
            try {
                await client.auth.resetPassword(email, token, password);
            } catch (error) {
                errors.value.push(error);
            }
        }
    };
})