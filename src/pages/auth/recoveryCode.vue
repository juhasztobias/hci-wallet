<script>
export default {
    created() {
        // Obtener el método de recuperación de los parámetros de la URL
        const method = this.$route.query.method;
        console.log("Método de recuperación recibido:", method);

        if (method) {
            this.selectedMethod = method;
        } else {
            console.error("No se recibió ningún método de recuperación");
        }
    },
    data() {
        return {
            selectedMethod: '', // Almacena el método seleccionado
            recoveryCode: '', 
        };
    },
    computed: {
        recoveryMessage() {
            // Cambia el texto según el método seleccionado
            switch (this.selectedMethod) {
                case 'Mensaje de texto':
                    return 'SMS';
                case 'Mensaje de Whatsapp':
                    return 'Whatsapp';
                case 'Correo electrónico':
                    return 'Correo electrónico';
                default:
                    return 'xxx';
            }
        }
    },
    methods: {
        submitRecoveryCode() {
            // Validar el código de recuperación ingresado
            if (!this.recoveryCode) {
                alert('Por favor, ingresa un código de recuperación.');
                return;
            }

            // Aquí puedes implementar la lógica para enviar el código de recuperación al servidor
            console.log("Código de recuperación ingresado:", this.recoveryCode);

            // Después de la validación, redirige o muestra un mensaje de éxito
            alert('Código de recuperación enviado con éxito.');
            this.$router.push('/auth/resetPassword'); 
        },
        goBack()
        {
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
        <div class="tw-h-2 tw-bg-primary-200 tw-w-[10vw] tw-my-2"/>
        <div class="tw-text-lg tw-text-primary-600 tw-font-light tw-text-left mt-4">
            Te hemos enviado un código a tu {{ recoveryMessage }}
        </div>
        
        <div class="tw-flex tw-flex-col tw-items-center">
            <div>
                <p class="tw-text-h6 tw-ml-[.5rem] tw-mt-10 tw-font-semibold tw-text-primary-600 ">Código de Verificación</p>
                <v-otp-input v-model="recoveryCode" focus-all autofocus/>
            </div>
        </div>
        <div class="tw-flex tw-mt-10 tw-justify-between">
            <v-btn 
                variant="text"
                @click="goBack"
            >
                <v-icon>mdi-arrow-left</v-icon>
                Volver
            </v-btn>
            <v-btn 
                color="primary" 
                variant="tonal"
                @click="submitRecoveryCode"
                >
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
    .v-otp-input__content
    {
        padding-left: 0rem !important;
    }
</style>

<route lang="yaml">
    meta:
        layout: auth.layout
</route>
    