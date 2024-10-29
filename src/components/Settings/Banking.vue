<template>
    <v-card outlined class="mb-6">
        <v-card-title class="text-h6">Bancaria</v-card-title>
        <v-card-subtitle>Actualiza tus datos bancarios para gestionar pagos de manera segura.</v-card-subtitle>
        <v-card-text>
            <v-text-field label="Tu Alias" :value="alias" @input="$emit('update:alias', $event.target.value)"
                placeholder="sol.cielo.arcoiris" outlined></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn color="secondary" @click="openBottomSheet" class="reestablecer-btn">
                Añadir Tarjeta
            </v-btn>
        </v-card-actions>

        <!-- Bottom Sheet Component -->
        <add-card-bottom-sheet v-model="isBottomSheetOpen" />
    </v-card>
</template>

<script>
import AddCardBottomSheet from '@/components/Input/AddCardBottomSheet.vue';

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