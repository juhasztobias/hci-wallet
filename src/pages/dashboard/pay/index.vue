<script>
import MoneyInput from '@/components/Input/MoneyInput.vue';
import MainCard from '@/components/MainCard.vue';
import SelectableItem from '@/components/Input/SimpleBigCheckBox.vue';
export default {
    components: {
        MoneyInput,
        MainCard,
        SelectableItem // Ensure this is included
    },
    data() {
        return {
            items: ['Servicio', 'Producto'],
            selectedMethod: null,
            amount: null, // Define the amount variable
            name: null,
            type: null,
            detail: null,
            paymentOptions: [
                {
                    label: 'Inmediato',
                    value: 'available-money',
                    description: 'Se le cobrará un 5% de comisión',
                    icon: 'mdi-arrow-down-thin'
                },
                {
                    label: 'En 15 dias',
                    value: 'available-money',
                    description: 'Se le cobrará un 3% de comisión',
                    icon: 'mdi-timer-outline'
                },
                {
                    label: 'En 30 dias',
                    value: 'available-money',
                    description: 'Se le cobrará un 1% de comisión',
                    icon: 'mdi-calendar-month'
                },
            ]
        };
    },
    methods: {
        updateSelectedMethod(value) {
            this.selectedMethod = value;
            localStorage.setItem('selectedPaymentMethod', method);
        },
        handleContinue() {
            // Logic to handle when the "Continuar" button is clicked
            console.log('Continuar clicked with amount:', this.amount);
            // You can add further processing here
        }
    },
    created() {
        const savedMethod = localStorage.getItem('selectedPaymentMethod');
        if (savedMethod) {
            this.selectedMethod = savedMethod;
        }
    }
};
</script>

<template>
    <div class="tw-space-y-4">
        <MainCard>
            <template #header>
                <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                    Nuevo Cobro
                </h1>
            </template>
            <template #content>
                <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-full">
                    <h1 class="tw-text-lg tw-font-semibold tw-text-primary-500">
                        Ingrese Valor a Cobrar
                    </h1>
                    <MoneyInput v-model="amount" />
                </div>
                <div class="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-p-4">
                    <v-text-field label="Nombre del producto o servicio" v-model="name" />
                    <v-select :items="['Servicio', 'Producto', 'Otro']" label="Seleccione el tipo de cobro"
                        v-model:="type" />
                    <v-text-field label="Detalles" v-model="detail" />
                </div>
                <div class="tw-flex tw-flex-col tw-items-start">
                    <label class="tw-text-l tw-font-semibold tw-text-blue-600 tw-ml-5">Seleccione el plazo en el que se
                        te
                        acreditará:</label>
                </div>
                <v-card-text>
                    <div class="method-list tw-space-y-4">
                        <selectable-item v-for="method in paymentOptions" :key="method.value" :title="method.label"
                            :subtitle="method.description" :icon="method.icon"
                            :isSelected="selectedMethod === method.value"
                            @select="updateSelectedMethod(method.value)" />
                    </div>
                </v-card-text>
                <div class="tw-flex tw-items-center tw-justify-center tw-space-x-2 tw-py-4">
                    <!-- Cancel Button -->
                    <v-btn variant="text" class="tw-flex-1">Cancelar</v-btn>

                    <!-- Continue Button -->
                    <v-btn class="tw-flex-1" @click="handleContinue"> <!-- Add click event -->
                        Continuar
                    </v-btn>
                </div>
            </template>
        </MainCard>
        <MainCard>
            <template #header>
                <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                    Confirmacion
                </h1>
            </template>
            <template #content>
                <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-full">
                    <h1 class="tw-text-lg tw-font-semibold tw-text-primary-500">
                        Ingrese Valor a Cobrar
                    </h1>
                    <h1 class="tw-text-4xl tw-font-semibold">
                        {{ amount }} <!-- Display the amount here -->
                    </h1>
                </div>
                <div class="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-items-center tw-gap-2 tw-p-2">
                    <div>
                        <p class="tw-text-l tw-font-semibold tw-text-primary-500">Nombre del producto o servicio</p>
                        <p>{{ name }}</p>
                    </div>
                    <div>
                        <p class="tw-text-l tw-font-semibold tw-text-primary-500">Tipo de cobro</p>
                        <p>{{ type }}</p>
                    </div>
                    <div>
                        <p class="tw-text-l tw-font-semibold tw-text-primary-500">Detalle</p>
                        <p>{{ detail }}</p>
                    </div>
                </div>
                <selectable-item :key="selectedMethod.value" />
                <div class="tw-flex tw-items-center tw-justify-center tw-space-x-2 tw-py-4">
                    <!-- Cancel Button -->
                    <v-btn variant="text" class="tw-flex-1">Volver</v-btn>

                    <!-- Confirm Button -->
                    <v-btn class="tw-flex-1" @click="handleContinue"> <!-- Add click event -->
                        Confirmar
                    </v-btn>
                </div>
            </template>
        </MainCard>
        <MainCard>
            <template #header>
                <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                    Link para Cobrar
                </h1>
            </template>
            <template #content>
                <p class="tw-font-semibold">Link para Cobrar</p>
                <p>https://link.prueba.com/cobrar</p>
                <p class="tw-text-lg tw-font-semibold">Detalles del cobro:</p>
                <p class="tw-text-sm tw-font-semibold">Monto</p>
                <p>{{ amount }}</p>
                <p class="tw-text-sm tw-font-semibold">Producto</p>
                <p>{{ name }}</p>
                <p class="tw-text-sm tw-font-semibold">Producto</p>
                <p>{{ detail }}</p>
            </template>
        </MainCard>
    </div>
</template>
<route lang="yaml">
meta:
    layout: dashboard.layout
</route>