<template>
    <div class="transfer-error-page">
        <TransferError />
    </div>
    <div class="action-buttons">
        <v-btn variant="plain" color="grey" size="large" @click="schedulePayment">
            Programar Pago
        </v-btn>
        <v-btn color="primary" class="confirm-btn" size="large" @click="retryTransfer">
            Volver a intentar
        </v-btn>
    </div>
</template>

<script>
export default {
    props: {
        errorMessage: {
            type: String,
            default: 'Error desconocido'
        }
    },
    methods: {
        schedulePayment() {
            // Lógica para programar un pago
            console.log('Programar Pago');
        },
        retryTransfer() {
            // Lógica para volver a intentar la transferencia
            console.log('Volver a intentar');
        }
    }
}
</script>

<style scoped>
.transfer-error-page {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Centrar verticalmente */
}

.action-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1px;
    margin-top: 100px;
}
</style>