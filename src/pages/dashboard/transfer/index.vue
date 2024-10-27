<template>
    <main>
        <section>
            <v-card elevation="1" class="tw-w-full tw-p-4">
                <div class="tw-grid tw-py-4 tw-px-4 tw-bg-primary-500">
                    <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                        Realizar transferencia
                    </h1>
                </div>
                <div class="tw-grid tw-py-4 tw-px-4">
                    <!-- Monto a transferir, debe figurar el dinero disponible -->
                    <div></div>

                    <!-- Seleccionar contacto, motivo y detalle -->
                    <div class="tw-grid tw-gap-2 tw-grid-cols-3">
                        <v-select v-model="selectedContact" :items="contacts" label="Seleccionar contacto"
                            density="comfortable" variant="outlined" color="primary"
                            prepend-inner-icon="mdi-account-multiple" clearable>
                            <template v-slot:item="{ item }">
                                <v-list-item-title>{{ item.name }} {{ item.lastName }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.email }}</v-list-item-subtitle>
                            </template>
                        </v-select>

                        <v-select v-model="selectedReason" :items="reasons" label="Motivo" density="comfortable"
                            variant="outlined" color="primary" prepend-inner-icon="mdi-alert-circle-outline"
                            clearable />

                        <v-text-field v-model="selectedDetail" label="Detalle" density="comfortable" variant="outlined"
                            color="primary" />

                        <v-select v-model="selectedType" :items="banks" label="Tipo de transferencia"
                            density="comfortable" variant="outlined" color="primary"
                            :class="selectedBank === 'Programada' ? 'tw-col-span-2' : 'tw-col-span-2'" />
                        <DateInput />
                    </div>

                    <!-- Checkbox seleccionar banco del contacto -->
                    <div></div>

                    <!-- Boton de enviar -->
                    <div class="tw-flex tw-gap-2 tw-justify-end tw-items-center">
                        <v-btn color="neutral" variant="text" class="tw-flex-1">
                            Cancelar
                        </v-btn>
                        <v-btn color="primary" variant="flat" class="tw-flex-1">
                            Continuar
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </section>
    </main>
</template>
<route lang="yaml">
meta:
    layout: dashboard.layout
    requiresAuth: true
</route>