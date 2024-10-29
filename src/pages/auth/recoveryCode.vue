<script>
import { useAuthStore } from '@/stores/auth-store';

export default {
    created() {
        const email = this.$route.query.email;
        const code = this.$route.query.code;
        console.log("Correo electrónico recibido:", email);

        if (email) {
            this.recoveryEmail = email;
        } else {
            console.error("No se recibió ningún correo electrónico");
        }
        if (code) {
            this.code = code;
        } else {
            console.error("No se recibió ningún código");
        }
    },
    data() {
        return {
            recoveryEmail: '',
            password: '',
            checkPassword: '',
            code: '',
            error_msg: '',
            show_err: false,
            loading: false, // Loading state
        };
    },
    methods: {
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        },
        async submitForm() {
            console.log("Form submitted with:", this.password, this.checkPassword);

            // Validate email format
            if (!this.validateEmail(this.recoveryEmail)) {
                this.error_msg = 'El correo electrónico ingresado no es válido';
                this.show_err = true;
                return;
            }

            // Check if password fields match
            if (this.password !== this.checkPassword) {
                this.error_msg = 'Las contraseñas no coinciden';
                this.show_err = true;
                return;
            }

            this.loading = true; // Set loading to true

            try {
                await useAuthStore().resetPassword(this.recoveryEmail, this.code, this.password);
                alert("La contraseña se ha cambiado con éxito");
                this.$router.push('/auth/signin');
            } catch (err) {
                console.error(err);
                this.error_msg = "La contraseña no es válida. Asegúrate de que cumpla con los requisitos.";
                this.show_err = true;
            } finally {
                this.loading = false; // Reset loading state
            }
        },
        cancelForm() {
            this.checkPassword = '';
            this.password = '';
            this.$router.push('/auth/signin');
        }
    }
};
</script>

<template>
    <v-container>
        <!-- Header -->
        <div class="tw-text-2xl tw-text-primary-600 tw-font-semibold tw-text-left">
            Restablecer contraseña
        </div>
        <div class="tw-h-2 tw-bg-primary-200 tw-w-[10vw] tw-my-2" />
        <div class="tw-text-xl tw-text-primary-600 tw-font-light tw-text-left">
            Cambia tu contraseña
        </div>

        <v-form @submit.prevent="submitForm">
            <v-text-field label="*******" v-model="password" placeholder="Nueva Contraseña" outlined
                required></v-text-field>
            <v-text-field label="*******" v-model="checkPassword" placeholder="Repeti la contraseña" outlined
                required></v-text-field>
        </v-form>

        <!-- Buttons -->
        <v-row>
            <v-col cols="6">
                <v-btn block color="red" @click="cancelForm">Cancelar</v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn block color="primary" @click="submitForm" :disabled="loading">
                    <template v-if="loading">
                        <v-progress-circular indeterminate size="24" color="white"></v-progress-circular>
                    </template>
                    <template v-else>
                        Confirmar
                    </template>
                </v-btn>
            </v-col>
        </v-row>

        <!-- Error Snackbar -->
        <v-snackbar v-model="show_err" color="red" timeout="3000">
            {{ error_msg }}
            <template #action>
                <v-btn color="white" @click="show_err = false">Cerrar</v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<route lang="yaml">
meta:
    layout: auth.layout
</route>