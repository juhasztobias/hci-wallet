<script>
import TransferDetails from '@/components/Transaction/TransferDetails.vue';
import TransferError from '@/components/Transaction/TransferError.vue';
import TransferSuccess from '@/components/Transaction/TransferSuccess.vue';


</script>
<template>
    <v-card>
        <TransferSuccess
            amount="123.43"
            receiverName="Test Name"
            bankName="Galicia"
            voucherNumber="123456"
        />
    </v-card>
</template>