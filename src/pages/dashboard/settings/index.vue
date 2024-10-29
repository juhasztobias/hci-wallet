<template>
    <div class="tw-grid tw-grid-cols-[1fr,.4fr] tw-gap-3 tw-py-2 tw-items-start">
        <section class="tw-grid tw-gap-4 tw-max-w-[900px]">
            <PersonalInfo :nombre="nombre" :apellido="apellido" :nationality="nationality"
                :nationalities="nationalities" />
            <ContactSecurity v-model:phoneNumber="phoneNumber" :resetPassword="yourResetPasswordMethod" />
            <Banking v-model:alias="alias" />
        </section>
        <aside class="tw-sticky tw-top-0 tw-flex tw-gap-3 tw-flex-col">
            <MainCard>
                <template #content>
                    <v-btn color="primary" block @click="saveChanges">Guardar Cambios</v-btn>
                    <v-btn text block color="grey" @click="cancelChanges">Cancelar</v-btn>
                </template>
            </MainCard>
        </aside>
    </div>
</template>

<script>
import MainCard from '@/components/MainCard.vue';
import Banking from '@/components/Settings/Banking.vue';
import ContactSecurity from '@/components/Settings/ContactSecurity.vue';
import PersonalInfo from '@/components/Settings/PersonalInfo.vue';
import { ref } from 'vue';
const nationalities = ref([]);
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