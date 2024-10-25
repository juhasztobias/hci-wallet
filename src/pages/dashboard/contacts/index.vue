<template>
    <main class="tw-grid tw-grid-cols-[1fr,.4fr] tw-gap-3 tw-py-2 tw-items-start">
        <section>
            <v-card elevation="1" class="tw-w-full tw-min-h-[600px] tw-p-4">
                <div class="tw-grid tw-py-4 tw-px-4">
                    <h1 class="tw-text-lg tw-font-semibold tw-pb-4 tw-text-primary-500">Contactos</h1>
                    <v-text-field
                        v-model="currentFilter"
                        label="Buscar un contacto"
                        density="comfortable"
                        prepend-inner-icon="mdi-magnify"
                        color="primary"
                        base-color="primary"
                        clearable="true"
                    />
                    <div class="tw-flex tw-gap-2 tw-items-center">
                        <v-btn 
                            v-for="filter in filters" 
                            :key="filter.value"
                            color="primary" 
                            variant="outlined"
                            :variant="filter.value === 'all' ? '' : 'flat'"
                            density="comfortable"
                        >
                            {{ filter.text }}
                        </v-btn>
                    </div>
                </div>
                <v-data-table
                    :headers="headers"
                    :items="contacts"
                    :items-per-page="25"
                >
                        <template v-slot:item="{ item }">
                            <tr class="even:tw-bg-primary-100/40 hover:tw-bg-primary-100 
                                    tw-transition-all tw-duration-300 tw-ease-in-out
                                    cursor-pointer"
                                >
                                <td>
                                    <div class="tw-grid tw-gap-1 tw-items-center tw-p-2">
                                        <span class="tw-font-semibold">
                                            {{ item.name }} {{ item.lastName }}
                                        </span>
                                        <span class="tw-text-sm tw-text-gray-600"> 
                                            {{ item.email }}
                                        </span>
                                        <div class="tw-flex tw-gap-1 tw-items-center tw-p-2">
                                            <v-icon color="red" small>mdi-heart</v-icon>
                                            <v-icon small>mdi-dots-vertical</v-icon>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="tw-flex tw-gap-1 tw-justify-end">
                                        <v-btn
                                            small
                                            @click="editContact(item)"
                                            icon
                                            variant="text"
                                            rounded="sm"
                                        >
                                            <v-icon
                                                class="tw-cursor-pointer tw-transition-all tw-duration-300 tw-ease-in-out"
                                                :color="item.email === 'juan@gmail.com' ? 'red' : 'primary'"
                                                :class="item.email !== 'juan@gmail.com' && 'tw-opacity-50'" 
                                            >mdi-heart</v-icon>
                                        </v-btn>
                                        <v-menu 
                                            open-on-hover
                                        >
                                            <template v-slot:activator="{ props }">
                                                <v-btn
                                                    v-bind="props"
                                                    small
                                                    icon
                                                    variant="text"
                                                    rounded="sm"
                                                >
                                                    <v-icon
                                                        small
                                                        class="tw-cursor-pointer tw-opacity-50
                                                        tw-transition-all tw-duration-300 tw-ease-in-out"
                                                        color="primary"
                                                        @click="deleteContact(item)"
                                                    >
                                                        mdi-dots-vertical
                                                    </v-icon>
                                                </v-btn>
                                            </template>
                                            <v-list>
                                                <v-list-item
                                                    v-for="item in ['Editar', 'Eliminar']"
                                                    :key="item"
                                                    @click="deleteContact(item)"
                                                >
                                                    <v-list-item-title>{{ item }}</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                        
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
            </v-card>
        </section>
        <aside>
        </aside>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    const currentFilter = ref('all');
    const filters = [
        { text: 'Todos', value: 'all' },
        { text: 'Favoritos', value: 'favorites' },
        { text: 'Recientes', value: 'recents' },
    ]

    const headers = []

    const contacts = [
        { name: 'Juan', lastName: 'Perez', email: 'juan@gmail.com' },
        { name: 'Maria', lastName: 'Rodriguez', email: 'maria@gmail.com' },
        { name: 'Pedro', lastName: 'Lopez', email: 'pedro@gmail.com' },
        { name: 'Luis', lastName: 'Garcia', email: 'luis@gmail.com' },
        { name: 'Carlos', lastName: 'Hernandez', email: 'carlos@gmail.com' },
    ]
    
    const editContact = (contact) => {
        console.log('Editando:', contact);
    }

    const deleteContact = (contact) => {
        console.log('Eliminando:', contact);
    }
</script>

<route lang="yaml">
meta:
    layout: dashboard.layout
    requiresAuth: true
</route>