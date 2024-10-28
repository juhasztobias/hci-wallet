<script setup>
import MainCard from '@/components/MainCard.vue';
import { useAppStore } from '@/stores/app';
import { useAuthStore } from '@/stores/auth-store';
import { computed } from 'vue';

const authStore = useAuthStore();
const email = ref('');
const snackbar = ref(false);
const snackbarColor = ref('success');
const snackbarText = ref('Contacto agregado');

const contact = computed(() => {
    if (email.value === authStore.getAccount().email) return null;
    return useAppStore().getContactByEmail(email.value)
});

const addContact = async () => {
    try {
        await authStore.getAccount().addContact(contact.value);
        snackbarColor.value = 'success';
        snackbar.value = true;
        snackbarText.value = 'Contacto agregado';
    } catch (error) {
        snackbarColor.value = 'red';
        snackbarText.value = error.message;
        snackbar.value = true;
        return;
    }
}
</script>

<template>
    <div>
        <MainCard>
            <template #header>
                <h1 class="tw-text-lg tw-font-semibold">Nuevo contacto</h1>
            </template>

            <template #content>
                <div>
                    <v-text-field label="Email" v-model="email" placeholder="Nombre" outlined required></v-text-field>
                </div>
                <div v-if="contact" class="tw-flex tw-justify-between tw-gap-3 tw-p-2">
                    <div class="tw-flex tw-gap-4 tw-items-center">
                        <div class="tw-flex tw-gap-2 tw-items-center">
                            <v-icon color="primary" small>mdi-account</v-icon>
                            <span class="tw-text-sm tw-font-semibold">{{ contact.name }} {{ contact.lastName }}</span>
                        </div>

                        <div class="tw-flex tw-gap-2 tw-items-center">
                            <v-icon color="primary" small>mdi-email</v-icon>
                            <span class="tw-text-sm tw-font-semibold">{{ contact.email }}</span>
                        </div>
                    </div>

                    <div>
                        <v-btn color="primary" variant="flat" class="tw-flex-1" @click="addContact">
                            Agregar contacto
                        </v-btn>
                    </div>
                </div>

            </template>
        </MainCard>
        <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="2000">
            <div class="tw-text-sm tw-items-center">
                <v-icon icon="mdi-check-circle-outline" size="24" />
                {{ snackbarText }}
            </div>
        </v-snackbar>
    </div>
</template>

<route lang="yaml">
meta:
    layout: dashboard.layout
    requiresAuth: true
</route>