<script>
import { useAuthStore } from '@/stores/auth-store';
export default {
    created() {
        const email = this.$route.query.email;
        console.log("Correo electrónico recibido:", email);

        if (email) {
            this.recoveryEmail = email;
        } else {
            console.error("No se recibió ningún correo electrónico");
        }
    },
    data() {
        return {
            recoveryEmail: '',
            recoveryCode: ''
        };
    },
    methods: {
        async submitRecoveryCode() {
            console.log("Submitting recovery code:", this.recoveryCode);
            console.log("Email for recovery code:", this.recoveryEmail);

            if (!this.recoveryCode) {
                alert('Por favor, ingresa un código de recuperación.');
                return;
            }

            console.log("Código de recuperación enviado al mail:", this.recoveryCode);

            try {
                const isValid = await useAuthStore().isValidResetToken(this.recoveryEmail, this.recoveryCode);
                console.log("Is valid:", isValid);
                if (isValid) {
                    alert('Código de recuperación enviado con éxito.');
                    this.$router.push({
                        path: '/auth/resetPassword',
                        query: { email: this.recoveryEmail, code: this.recoveryCode }

                    });

                }
            } catch (error) {
                console.error("Error al validar el código de recuperación:", error);
                alert('El código de recuperación no es válido. Por favor, inténtalo de nuevo.');
            }
        },
        goBack() {
            this.$router.push('/auth/recovery');
        }
    }
};
</script>

<template>
    <v-container>
        <div class="tw-text-2xl tw-text-primary-600 tw-font-semibold tw-text-left">
            Restablecer contraseña
        </div>
        <div class="tw-h-2 tw-bg-primary-200 tw-w-[10vw] tw-my-2" />
        <div class="tw-text-lg tw-text-primary-600 tw-font-light tw-text-left mt-4">
            Te hemos enviado un código a tu correo electrónico: <strong>{{ recoveryEmail }}</strong>
        </div>

        <div class="tw-flex tw-flex-col tw-items-center">
            <div>
                <p class="tw-text-h6 tw-ml-[.5rem] tw-mt-10 tw-font-semibold tw-text-primary-600 ">
                    Código de Verificación
                </p>
                <v-otp-input v-model="recoveryCode" focus-all autofocus />
            </div>
        </div>
        <div class="tw-flex tw-mt-10 tw-justify-between">
            <v-btn variant="text" @click="goBack">
                <v-icon>mdi-arrow-left</v-icon>
                Volver
            </v-btn>
            <v-btn color="primary" variant="tonal" @click="submitRecoveryCode">
                Continuar
            </v-btn>
        </div>
    </v-container>
</template>

<style scoped>
.v-otp-input {
    justify-content: left !important;
    padding: 0 !important;
}

.v-otp-input__content {
    padding-left: 0rem !important;
}
</style>

<route lang="yaml">
meta:
    layout: auth.layout
</route>