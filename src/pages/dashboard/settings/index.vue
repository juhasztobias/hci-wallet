<template>
    <v-container class="py-10 px-6" max-width="600px">
        <PersonalInfo :nombre="nombre" :apellido="apellido" :nationality="nationality" :nationalities="nationalities" />
        <ContactSecurity v-model:phoneNumber="phoneNumber" :resetPassword="yourResetPasswordMethod" />
        <Banking v-model:alias="alias" />

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

<script>
import { ref } from 'vue';
import PersonalInfo from '@/components/Settings/PersonalInfo.vue';
import ContactSecurity from '@/components/Settings/ContactSecurity.vue';
import Banking from '@/components/Settings/Banking.vue';

export default {
    components: {
        PersonalInfo,
        ContactSecurity,
        Banking,
    },
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

<route lang="yaml">
meta:
    layout: dashboard.layout 
    requiresAuth: true
</route>