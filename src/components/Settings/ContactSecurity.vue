<template>
    <v-card outlined class="mb-6">
        <v-card-title class="text-h6">Contacto y Seguridad</v-card-title>
        <v-card-subtitle>Actualiza tus datos de contacto para mantenernos en comunicación contigo.</v-card-subtitle>
        <v-card-text>
            <v-text-field label="Numero de Telefono" :value="phoneNumber" @input="$emit('update:phoneNumber', $event)"
                placeholder="+1 (555) 019-3476"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <div class="text-danger text-center mb-4">
                <span>Zona de Peligro</span>
            </div>
            <v-btn color="red" block @click="resetPassword">Restablecer Contraseña</v-btn>
        </v-card-text>
    </v-card>
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