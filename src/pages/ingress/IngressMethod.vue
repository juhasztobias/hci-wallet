<template>
    <v-container class="payment-method-page" max-width="900px">
        <v-row style="display: flex; flex-wrap: wrap; justify-content: center;">

            <v-col cols="12" md="8">
                <v-card class="payment-method-card">
                    <v-card-title class="card-header">
                        <span>Elegi de donde Ingresas tu Dinero</span>
                    </v-card-title>

                    <div class="money-input-container"
                        style="display: flex; justify-content: center; margin-top: 10px;">
                        <MoneyInput />
                    </div>
                    <v-card-text>
                        <div class="method-list">
                            <selectable-item v-for="method in paymentMethods" :key="method.value" :title="method.label"
                                :subtitle="method.description" :icon="method.icon"
                                :isSelected="selectedMethod === method.value"
                                @select="updateSelectedMethod(method.value)" />
                        </div>
                    </v-card-text>

                    <v-card-actions class="action-buttons">
                        <v-btn text color="grey darken-1" class="cancel-btn" @click="cancelPayment">Cancelar
                            pago</v-btn>
                        <v-btn color="primary" class="pay-now-btn" @click="processPayment">Pagar ahora</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import MoneyInput from '@/components/Input/MoneyInput.vue';
import SelectableItem from '@/components/Input/SimpleBigCheckBox.vue';

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
            console.log('Pago cancelado');
        },
        processPayment() {
            console.log('Procesando pago');
        },
        updateSelectedMethod(value) {
            this.selectedMethod = value;
        }
    }
};
</script>

<style scoped>
.payment-method-page {
    background-color: #f4f7fa;
    padding-top: 30px;
    min-height: 100vh;
    min-width: 207vh;
}

.payment-method-card,
.payment-details-card {
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.card-header,
.details-header {
    background-color: #1976D2;
    color: #fff;
    padding: 16px;
    border-radius: 8px 8px 0 0;
}

.method-list {
    padding: 16px;
}

.payment-button {
    margin-bottom: 10px;
    padding: 16px;
    border-radius: 8px;
    border: 2px solid #e0e0e0;
    background-color: #fff;
    cursor: pointer;
    transition: border 0.3s, box-shadow 0.3s;
}

.payment-button:hover {
    border: 2px solid #1976D2;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.payment-button .payment-label {
    font-weight: bold;
    font-size: 16px;
    color: #333;
}

.payment-button .description {
    font-size: 14px;
    color: #666;
}

.action-buttons {
    padding: 16px;
}

.cancel-btn {
    margin-right: 10px;
}

.amount-section {
    margin-bottom: 20px;
}

.amount-label {
    font-size: 16px;
    color: #666;
}

.amount-value {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

.amount-decimal {
    font-size: 16px;
    color: #666;
}

.details-section {
    margin-bottom: 20px;
}

.details-section p {
    margin-bottom: 10px;
}

.details-section strong {
    font-weight: bold;
    color: #333;
}
</style>