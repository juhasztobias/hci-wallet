<template>
    <MainCard class="tw-min-w-[500px]">
        <template #header>
            <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                Te han enviado un link de pago
            </h1>
            <p class="tw-text-sm tw-text-gray-200">
                Para continuar con el pago, dale clic a continuar
            </p>
        </template>
        <template #content>
            <AmountSection :amount="amount" />
            <DetailsSection :product="product" :details="details" />

            <v-card-actions class="action-buttons">
                <v-btn text color="grey" @click="cancelPayment" class="cancel-button tw-flex-1">
                    Cancelar pago
                </v-btn>
                <v-btn variant="flat" color="primary" @click="payNow" class="tw-flex-1">
                    Pagar ahora
                </v-btn>
            </v-card-actions>
        </template>
    </MainCard>
</template>

<route lang="yaml">
meta:
    layout: float.layout
    requiresAuth: true
</route>


<script>
import AmountSection from '@/components/AmountSection.vue';
import DetailsSection from '@/components/DetailsSection.vue';
import MainCard from '@/components/MainCard.vue';


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
            paymentId: this.$route.query.paymentId
        };
    },
    methods: {
        cancelPayment() {
            this.$router.push('/dashboard')
            console.log('Payment canceled');
        },
        payNow() {
            this.$router.push({
                path: '/transfers/TransferSummary',
                params: {
                    amount: "100",
                    // Add other parameters as needed
                    receiverName: "Receiver Name",
                    bankName: "Bank Name",
                    voucherNumber: "123456",
                    senderName: "Sender Name",
                    senderAlias: "Sender Alias",
                    receiverAlias: "Receiver Alias",
                }
            });


        }
    }
};
</script>

<style scoped>
.payment-link-container {
    display: flex;
    justify-content: center;
    align-items: center;
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