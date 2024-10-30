<template>
    <main class="tw-grid tw-grid-cols-[1fr,.4fr] tw-gap-3 tw-py-2 tw-items-start">
        <section>
            <MainCard>
                <template #header>
                    <div class="tw-space-y-4">
                        <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">Contactos</h1>
                        <v-text-field v-model="searchValue" placeholder="Buscar un contacto" density="comfortable"
                            prepend-inner-icon="mdi-magnify" bg-color="white" base-color="white" clearable="true" />
                    </div>
                </template>
                <template #content>
                    <div class="tw-flex tw-gap-2 tw-items-center">
                        <v-btn v-for="filter in filters" :key="filter.value" color="primary"
                            @click="selectedFilter = filter.value"
                            :variant="selectedFilter !== filter.value ? 'outlined' : 'flat'" density="comfortable">
                            {{ filter.text }}
                        </v-btn>
                    </div>

                    <v-data-table :headers="headers" :items="contacts" :items-per-page="25">
                        <template v-slot:item="{ item: contact }">
                            <tr class="even:tw-bg-primary-100/40 hover:tw-bg-primary-100 
                                    tw-transition-all tw-duration-300 tw-ease-in-out
                                    cursor-pointer">
                                <td>
                                    <div class="tw-grid tw-gap-1 tw-items-center tw-p-2">
                                        <span class="tw-font-semibold">
                                            {{ contact.name }} {{ contact.lastName }}
                                        </span>
                                        <span class="tw-text-sm tw-text-gray-600">
                                            {{ contact.email }}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div class="tw-flex tw-gap-1 tw-justify-end tw-items-center">
                                        <v-btn prepend-icon="mdi-swap-horizontal" color="primary" variant="tonal"
                                            @click="transferContact(contact)">
                                            Transferir
                                        </v-btn>
                                        <v-btn small icon variant="text" rounded="sm">
                                            <v-icon
                                                class="tw-cursor-pointer tw-transition-all tw-duration-300 tw-ease-in-out"
                                                :color="contact.email === 'juan@gmail.com' ? 'red' : 'primary'"
                                                :class="contact.email !== 'juan@gmail.com' && 'tw-opacity-50'">mdi-heart</v-icon>
                                        </v-btn>
                                        <v-btn v-bind="props" small icon variant="text" rounded="sm">
                                            <v-icon small class="tw-cursor-pointer tw-opacity-50
                                                        tw-transition-all tw-duration-300 tw-ease-in-out"
                                                color="primary" @click="deleteContact(contact)">
                                                mdi-bucket
                                            </v-icon>
                                        </v-btn>

                                    </div>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </template>
            </MainCard>
        </section>
        <aside>
            <v-card elevation="1" class="tw-w-full tw-p-4">
                <v-btn color="primary" block variant="flat" class="tw-flex-1"
                    @click="$router.push('/dashboard/contacts/new')">
                    Agregar contacto
                </v-btn>
            </v-card>
        </aside>

        <v-snackbar v-model:model-value="snackbar.show" :color="snackbar.color" timeout="2000">
            {{ snackbar.message }}
        </v-snackbar>
    </main>
</template>

<script setup>
import { useContactStore } from '@/stores/contact.store';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const snackbar = ref({
    show: false,
    message: '',
    color: 'success'
});
const headers = []
const searchValue = ref('');
const selectedFilter = ref('all');
const filters = [
    { text: 'Todos', value: 'all' },
    { text: 'Favoritos', value: 'favorites' },
    { text: 'Recientes', value: 'recents' },
]
const contacts = ref(useContactStore().contacts);
watchEffect(() => {
    contacts.value =
        useContactStore().contacts.filter(
            c => c.email.includes(searchValue.value)
                || c.name.toUpperCase().includes(searchValue.value.toUpperCase())
                || c.lastName.toUpperCase().includes(searchValue.value.toUpperCase())
        );
}, { deep: true });

const transferContact = (contact) => {
    router.push({
        "path": '/dashboard/transfer',
        "query": {
            "_to": contact.email
        }
    });
}
const deleteContact = async (contact) => {
    try {
        await useContactStore().deleteContact(contact);
        snackbar.value.show = true;
        snackbar.value.message = 'Contacto eliminado';
        snackbar.value.color = 'success';
    } catch (error) {
        snackbar.value.show = true;
        snackbar.value.message = 'Error al eliminar el contacto: ' + error.message;
        snackbar.value.color = 'red';
    }
}
</script>

<route lang="yaml">
meta:
    layout: dashboard.layout
    requiresAuth: true
</route>