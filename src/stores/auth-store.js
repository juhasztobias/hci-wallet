import { DummyClient } from "@/dummies/client";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const client = new DummyClient();

export const useAuthStore = defineStore("auth", () => {
    let token = ref(client.auth.currentToken);
    let isLoggedIn = computed(() => Boolean(token.value));
    let errors = ref([])

    const router = useRouter();
    return {
        token,
        isLoggedIn,
        errors,
        login: async (email, password) => {
            try {
                token.value = await client.auth.signIn(email, password);
                localStorage.setItem('token_store', JSON.parse(token.value));
                router.push('/dashboard');
            } catch (error) {
                errors.value.push(error);
                console.log(error);
            }
        },
        getAccount: () => client.auth.currentAccount,
        logout: async () => {
            try {
                await client.auth.signOut();
                token.value = null;
                // isLoggedIn.value = false;
                localStorage.removeItem('token_store');
                router.push('/auth/signin');
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

            console.log("Validating token for email:", email, "with token:", token);
            const isValid = client.auth.isValidResetToken(email, token);
            console.log("Token validity result:", isValid);
            if (!isValid) {
                throw new Error('Invalid reset token');
            }
            return isValid;

        },
        forgotPassword: async (email) => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !email.match(emailPattern)) {
                throw new Error('Invalid email');
            }
            await client.auth.forgotPassword(email, 'email');
           
        },
        resetPassword: async (email, token, password) => {
            
            return await client.auth.resetPassword(email, token, password);
  
        }
    };
})