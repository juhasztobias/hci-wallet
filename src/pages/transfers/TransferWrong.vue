<template>
    <section class="tw-space-y-8">
        <TransferError :errorMessage="errorMessage" />
        <div class="tw-flex tw-gap-2 tw-justify-center tw-items-center">
            <v-btn class="tw-flex-1" variant="plain" color="grey" size="large" @click="schedulePayment">
                Programar Pago
            </v-btn>
            <v-btn class="tw-flex-1" color="primary" size="large" @click="retryTransfer">
                Volver a intentar
            </v-btn>
        </div>
    </section>
</template>

<route lang="yaml">
meta:
    layout: float.layout
    requiresAuth: true
</route>

<script>
import TransferError from '@/components/Transaction/TransferError.vue';

export default {
    data() {
        return {
            errorMessage: this.$route.query.errorMessage ?? 'Error desconocido'
        }
    },
    methods: {
        schedulePayment() {
            // Lógica para programar un pago
            console.log('Programar Pago');
            this.$router.push({
                path: '/dashboard/transfer?transferId=' + this.$route.query.transferId,
            });
        },
        retryTransfer() {
            // Do something...
            this.$router.push('/dashboard');
        }
    }
}
</script>