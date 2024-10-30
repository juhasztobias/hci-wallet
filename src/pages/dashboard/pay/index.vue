<script>
import ExpansionPanel from '@/components/ExpansionPanel.vue';
import MoneyInput from '@/components/Input/MoneyInput.vue';
import SelectableItem from '@/components/Input/SimpleBigCheckBox.vue';
export default {
    components: {
        MoneyInput,
        ExpansionPanel,
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
                    value: 'now',
                    description: 'Se le cobrará un 5% de comisión',
                    icon: 'mdi-arrow-down-thin'
                },
                {
                    label: 'En 15 dias',
                    value: '15d',
                    description: 'Se le cobrará un 3% de comisión',
                    icon: 'mdi-timer-outline'
                },
                {
                    label: 'En 30 dias',
                    value: '30d',
                    description: 'Se le cobrará un 1% de comisión',
                    icon: 'mdi-calendar-month'
                },
            ],
            step: 1,
            location: window.location.origin,
            showErr: false,
            errorMessage: '',
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

            // When the user is on step 1 check if the values are valid
            if (this.step === 1) {
                if (!this.amount || !this.name || !this.type || !this.detail) {
                    this.errorMessage = 'Por favor ingrese todos los datos';
                    this.showErr = true;
                    return;
                }
            }

            // this.step++;
            this.step++;

            console.log(this.step);
        }
    },
    created() {
        const savedMethod = localStorage.getItem('selectedPaymentMethod');
        if (savedMethod) {
            this.selectedMethod = savedMethod;
        }
    },
};
</script>

<template>
    <div class="tw-space-y-4">
        <ExpansionPanel :isOpen.sync="step === 1">
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
                    <v-text-field label="Nombre del producto o servicio" v-model="name" required />
                    <v-select :items="['Servicio', 'Producto', 'Otro']" label="Seleccione el tipo de cobro"
                        v-model:="type" required />
                    <v-text-field label="Detalles" v-model="detail" required />
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
        </ExpansionPanel>
        <ExpansionPanel :isOpen="step === 2">
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
                        {{
                            new Intl.NumberFormat('es-AR', {
                                style: 'currency',
                                currency: 'ARS',
                            }).format(amount)
                        }} <!-- Display the amount here -->
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
                <div v-for="method in paymentOptions">
                    <selectable-item v-if="method.value === selectedMethod" :key="method.value" :title="method.label"
                        :subtitle="method.description" :icon="method.icon" :isSelected="selectedMethod === method.value"
                        @select="updateSelectedMethod(method.value)" />
                </div>
                <div class="tw-flex tw-items-center tw-justify-center tw-space-x-2 tw-py-4">
                    <!-- Cancel Button -->
                    <v-btn variant="text" class="tw-flex-1" @click="step--">Volver</v-btn>

                    <!-- Confirm Button -->
                    <v-btn class="tw-flex-1" @click="handleContinue"> <!-- Add click event -->
                        Confirmar
                    </v-btn>
                </div>
            </template>
        </ExpansionPanel>
        <ExpansionPanel :isOpen="step === 3">
            <template #header>
                <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                    Link para Cobrar
                </h1>
            </template>
            <template #content>
                <p class="tw-font-semibold">Link para Cobrar</p>
                <a :href="location + '/payment/linkpayment?paymentId=' + step" target="_blank">
                    {{ location }}/payment/linkpayment?paymentId={{ step }}
                </a>
                <p class="tw-text-lg tw-font-semibold">Detalles del cobro:</p>
                <p class="tw-text-sm tw-font-semibold">Monto</p>
                <p>{{
                    new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                    }).format(amount)
                }}</p>
                <p class="tw-text-sm tw-font-semibold">Producto</p>
                <p>{{ name }}</p>
                <p class="tw-text-sm tw-font-semibold">Producto</p>
                <p>{{ detail }}</p>
                <v-btn>
                    <v-icon left>mdi-share-variant</v-icon>
                    Compartir
                </v-btn>
            </template>
        </ExpansionPanel>

        <v-snackbar v-model="showErr" color="red">
            {{ errorMessage }}
        </v-snackbar>
    </div>
</template>
<route lang="yaml">
meta:
    layout: dashboard.layout
</route>