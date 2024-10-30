<template>
    <div class="tw-grid tw-grid-cols-[1fr,.25fr] tw-gap-4 tw-w-screen tw-px-[10vw]">
        <section>
            <MainCard class="tw-min-w-[500px]">
                <template #header>
                    <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                        Selecciona un método de pago
                    </h1>
                    <p class="tw-text-sm tw-text-gray-200">
                        Selecciona el método de pago que prefieras
                    </p>
                </template>
                <template #content>
                    <div class="tw-space-y-12">
                        <div class="tw-grid tw-gap-2">
                            <selectable-item v-for="method in paymentMethods" :key="method.value" :title="method.label"
                                :subtitle="method.description" :icon="method.icon"
                                :isSelected="selectedMethod === method.value"
                                @select="updateSelectedMethod(method.value)" />
                        </div>

                        <div class="tw-flex tw-gap-2">
                            <v-btn variant="text" color="grey darken-1" class="tw-flex-1"
                                @click="cancelPayment">Cancelar
                                pago</v-btn>
                            <v-btn color="primary" class="tw-flex-1" @click="processPayment">Pagar ahora</v-btn>
                        </div>
                    </div>
                </template>
            </MainCard>
        </section>

        <aside>

            <MainCard>
                <template #header>
                    <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                        Detalles del pago
                    </h1>
                </template>
                <template #content>
                    <div class="tw-grid tw-gap-8">
                        <div class="tw-grid">
                            <span>Monto a pagar</span>
                            <span class="tw-text-xl tw-font-semibold">
                                {{ new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(100) }}
                            </span>
                        </div>
                        <div class="tw-grid tw-gap-2">
                            <div class="tw-grid">
                                <span class="tw-text-sm">Producto</span>
                                <span class="tw-font-semibold">Es una prueba</span>
                            </div>

                            <div class="tw-grid">
                                <span class="tw-text-sm">Detalles</span>
                                <span class="tw-font-semibold">Varios</span>
                            </div>
                        </div>
                    </div>
                </template>
            </MainCard>
        </aside>
    </div>
</template>

<script>
import SelectableItem from '@/components/Input/SimpleBigCheckBox.vue';
import MainCard from '@/components/MainCard.vue';

export default {
    name: 'PaymentMethodPage',
    components: {
        SelectableItem
    },
    data() {
        return {
            selectedMethod: null,
            paymentMethods: [
                {
                    label: 'Dinero disponible',
                    value: 'available-money',
                    description: 'Dinero disponible: $1000',
                    icon: 'mdi-cash'
                },
                {
                    label: 'Cuenta de ICBC',
                    value: 'icbc-account',
                    description: 'Alias: ICBC.camila.lopez',
                    icon: 'mdi-bank'
                },
                {
                    label: 'Cuenta de BBVA',
                    value: 'bbva-account',
                    description: 'Alias: BBVA.camila.lopez',
                    icon: 'mdi-bank'
                },
                {
                    label: 'Banco Galicia',
                    value: 'galicia-account',
                    description: 'Alias: galicia.camila.lopez',
                    icon: 'mdi-bank'
                },
            ]
        };
    },
    methods: {
        cancelPayment() {
            this.$router.back();
        },
        processPayment() {
            console.log('Procesando pago');
            // DO something...
            this.$router.push('/dashboard');
        },
        updateSelectedMethod(value) {
            this.selectedMethod = value;
        }
    }
};
</script>

<route lang="yaml">
meta:
    layout: float.layout
    requiresAuth: true
</route>
