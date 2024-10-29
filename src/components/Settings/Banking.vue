<template>
    <MainCard>
        <template #header>
            <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                Bancaria
            </h1>
            <p class="tw-text-sm tw-text-gray-200">
                Actualiza tus datos bancarios para gestionar pagos de manera segura.
            </p>
        </template>
        <template #content>
            <v-text-field label="Tu Alias" :value="alias" @input="$emit('update:alias', $event.target.value)"
                placeholder="sol.cielo.arcoiris" outlined />
            <v-btn color="secondary" @click="openBottomSheet" class="reestablecer-btn">
                Añadir Tarjeta
            </v-btn>

            <add-card-bottom-sheet v-model="isBottomSheetOpen" />
        </template>
    </MainCard>
</template>

<script>
import AddCardBottomSheet from '@/components/Input/AddCardBottomSheet.vue';
import MainCard from '../MainCard.vue';

export default {
    components: {
        AddCardBottomSheet,
    },
    props: {
        alias: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isBottomSheetOpen: false,
        };
    },
    methods: {
        openBottomSheet() {
            this.isBottomSheetOpen = true; // Open the bottom sheet
        },
    },
};
</script>