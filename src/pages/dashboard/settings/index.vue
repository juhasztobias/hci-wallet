<script>
import { ref } from 'vue';

export default {
    setup() {
        const nombre = ref('');
        const apellido = ref('');
        const nationality = ref('');
        const phoneNumber = ref('');
        const alias = ref('');
        const nationalities = ref(['Argentina', 'Chile', 'Colombia', 'Perú', 'México']);

        const resetPassword = () => {
            alert("Contraseña restablecida.");
        };

        const cancelChanges = () => {
            alert("Cambios cancelados.");
        };

        const saveChanges = () => {
            alert("Cambios guardados.");
        };

        return {
            nombre,
            apellido,
            nationality,
            phoneNumber,
            alias,
            nationalities,
            resetPassword,
            cancelChanges,
            saveChanges,
        };
    },
};
</script>

<template>
    <v-container class="py-10 px-6" max-width="600px">
        <!-- Personales Section -->
        <v-card outlined class="mb-6">
            <v-card-title class="text-h6">Personales</v-card-title>
            <v-card-subtitle>Actualiza tu información personal para personalizar tu experiencia.</v-card-subtitle>
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field label="Nombre" v-model="nombre"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Apellido" v-model="apellido"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-select label="Tu Nacionalidad" :items="nationalities" v-model="nationality"></v-select>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <!-- Contacto y Seguridad Section -->
        <v-card outlined class="mb-6">
            <v-card-title class="text-h6">Contacto y Seguridad</v-card-title>
            <v-card-subtitle>Actualiza tus datos de contacto para mantenernos en comunicación contigo.</v-card-subtitle>
            <v-card-text>
                <v-text-field label="Numero de Telefono" v-model="phoneNumber"
                    placeholder="+1 (555) 019-3476"></v-text-field>
                <v-divider class="my-4"></v-divider>
                <div class="text-danger text-center mb-4">
                    <span>Zona de Peligro</span>
                </div>
                <v-btn color="red" block @click="resetPassword">Restablecer Contraseña</v-btn>
            </v-card-text>
        </v-card>

        <!-- Bancaria Section -->
        <v-card outlined class="mb-6">
            <v-card-title class="text-h6">Bancaria</v-card-title>
            <v-card-subtitle>Actualiza tus datos bancarios para gestionar pagos de manera segura.</v-card-subtitle>
            <v-card-text>
                <v-text-field label="Tu Alias" v-model="alias" placeholder="sol.cielo.arcoiris"></v-text-field>
            </v-card-text>
        </v-card>

        <!-- Footer Buttons -->
        <v-row>
            <v-col cols="6">
                <v-btn text block color="grey" @click="cancelChanges">Cancelar</v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn color="primary" block @click="saveChanges">Guardar Cambios</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.text-danger {
    color: #e53935;
}
</style>

<route lang="yaml">
meta:
    layout: dashboard.layout 
    requiresAuth: true
</route>