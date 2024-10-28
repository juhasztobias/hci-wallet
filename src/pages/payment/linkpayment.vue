<template>
    <v-container class="payment-link-container" max-width="400px">
        <v-card>
            <v-card-title class="card-header">
                <span>Te han enviado un link de pago</span>
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
                <AmountSection :amount="amount" />
                <DetailsSection :product="product" :details="details" />
            </v-card-text>

            <v-card-actions class="action-buttons">
                <v-btn text color="grey" @click="cancelPayment" class="cancel-button">
                    Cancelar pago
                </v-btn>
                <v-btn color="primary" @click="payNow" class="pay-button">
                    Pagar ahora
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import AmountSection from '@/components/AmountSection.vue';
import DetailsSection from '@/components/DetailsSection.vue';


export default {
    name: 'PaymentLinkPage',
    components: {
        AmountSection,
        DetailsSection,
    },
    data() {
        return {
            amount: 100,
            product: 'Es una prueba',
            details: 'Varios',
        };
    },
    methods: {
        cancelPayment() {
            this.$router.push('/dashboard')
            console.log('Payment canceled');
        },
        payNow() {
            // Logic for processing payment
            console.log('Processing payment');
        }
    }
};
</script>

<style scoped>
.payment-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 210vh;
    background-color: #f4f7fa;
}

.card-header {
    background-color: #1976D2;
    color: white;
    font-weight: bold;
    font-size: 18px;
    padding: 16px;
    text-align: center;
}

.action-buttons {
    display: flex;
    justify-content: space-between;
    padding: 16px;
}

.cancel-button,
.pay-button {
    font-weight: bold;
}

.pay-button {
    color: white;
}
</style>