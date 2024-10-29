<template>
    <MainCard>
        <template #header>
            <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                Contacto y Seguridad
            </h1>
            <p class="tw-text-sm tw-text-gray-200">
                Actualiza tus datos de contacto para mantenernos en comunicación contigo.
            </p>
        </template>
        <template #content>
            <v-text-field label="Numero de Telefono" :value="phoneNumber" @input="$emit('update:phoneNumber', $event)"
                placeholder="+1 (555) 019-3476"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <div class="text-danger text-center mb-4">
                <span>Zona de Peligro</span>
            </div>
            <v-btn color="red" block @click="resetPassword">Restablecer Contraseña</v-btn>
        </template>
    </MainCard>
</template>

<script>
export default {
    props: {
        phoneNumber: {
            type: String,
            required: true,
        },
    },
    methods: {
        resetPassword() {
            // Your logic for resetting the password goes here
            console.log("Password reset method called.");
            // You could also show a dialog, make an API call, etc.
        },
    },
};
</script>

<style scoped>
.text-danger {
    color: red;
}
</style>