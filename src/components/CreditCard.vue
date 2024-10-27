<template>
    <div class="tw-flex tw-flex-col tw-w-full tw-gap-4 tw-rounded-lg tw-p-2 tw-bg-red-600 tw-text-white">
        <div class="tw-flex tw-justify-between tw-items-center">
            <!-- LOGO DE MASTER O VISA -->
            <span>Mastercard</span>
            <!-- Acciones -->
            <div>
                <v-tooltip location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn icon variant="text" class="tw-flex tw-gap-2 tw-items-center" v-bind="props">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                    <span>Editar tarjeta</span>
                </v-tooltip>

                <v-tooltip location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn icon variant="text" class="tw-flex tw-gap-2 tw-items-center" v-bind="props">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </template>
                    <span>Eliminar</span>
                </v-tooltip>
            </div>
        </div>
        <div class="tw-flex tw-flex-col ">
            <!-- NÚMERO DE TARJETA -->
            <span class="tw-font-semibold">**** **** **** 3456</span>
            <span class="tw-text-sm">Débito</span>
        </div>
    </div>
</template>