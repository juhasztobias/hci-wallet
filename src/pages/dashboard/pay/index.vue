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
        }
    }
};
</script>


<template>
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
                <MoneyInput />
            </div>
            <div class="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-p-4">
                <v-text-field label="Nombre del producto o servicio" />
                <v-select :items="['Servicio', 'Producto']" label="Seleccione el tipo de cobro" />
                <v-text-field label="Detalles" />
            </div>
            <div class="tw-flex tw-flex-col tw-items-start">
                <label class="tw-text-l tw-font-semibold tw-text-blue-600 tw-ml-5">Seleccione el plazo en el que se te
                    acreditará:</label>
            </div>
            <v-card-text>
                <div class="method-list tw-space-y-4">
                    <selectable-item v-for="method in paymentOptions" :key="method.value" :title="method.label"
                        :subtitle="method.description" :icon="method.icon" :isSelected="selectedMethod === method.value"
                        @select="updateSelectedMethod(method.value)" />
                </div>
            </v-card-text>
            <div class="tw-flex tw-items-center tw-justify-center tw-space-x-2 tw-py-4">
                <!-- Cancel Button -->
                <v-btn variant="text" class="tw-flex-1">Cancelar</v-btn>

                <!-- Continue Button -->
                <v-btn class="tw-flex-1">
                    Continuar
                </v-btn>
            </div>
        </template>
    </MainCard>
</template>

<route lang="yaml">
meta:
    layout: dashboard.layout
</route>
