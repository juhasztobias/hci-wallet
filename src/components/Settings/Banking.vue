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
            <v-text-field label="Tu Alias" v-model:model-value="alias"
                @input="$emit('update:alias', $event.target.value)" placeholder="sol.cielo.arcoiris" outlined />
            <v-btn color="secondary" @click="openBottomSheet" class="reestablecer-btn">
                Añadir Tarjeta
            </v-btn>

            <CreditCard v-for="card in cards" :key="card.cardNumber" :cardNumber="card.cardNumber"
                :cardHolder="card.cardHolder" :expirationDate="card.expiryDate" />
            <add-card-bottom-sheet v-model="isBottomSheetOpen" />
        </template>
    </MainCard>
</template>

<script>
import AddCardBottomSheet from '@/components/Input/AddCardBottomSheet.vue';
import { faker } from '@faker-js/faker';
import CreditCard from '../CreditCard.vue';
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
        cards: {
            type: Array,
            required: false,
            default: () => [
                {
                    cardNumber: '**** **** **** 3456',
                    cardHolder: 'Juan Perez',
                    expiryDate: '12/22',
                }
            ]
        }
    },
    data() {
        return {
            isBottomSheetOpen: false,
            alias: this.alias,
            cards: this.cards
        };
    },
    methods: {
        openBottomSheet() {
            this.isBottomSheetOpen = true; // Open the bottom sheet
        },

        addCard() {
            this.cards.push({
                cardNumber: faker.finance.creditCardNumber(),
                cardHolder: 'Juan Perez',
                expiryDate: '12/22',
            });
        }
    },
};
</script>