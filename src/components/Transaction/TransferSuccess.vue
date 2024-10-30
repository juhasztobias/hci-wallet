<script>
import MainCard from '../MainCard.vue';

export default {
  name: 'SuccessNotification',
  props:
  {
    amount: {
      type: String,
      required: true
    },
    receiverName: {
      type: String,
      required: true
    },
    bankName: {
      type: String,
      required: true
    },
    voucherNumber: {
      type: String,
      required: true
    },
  }
};
</script>

<template>
  <MainCard type="success">
    <template #header>
      <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
        Transferencia exitosa
      </h1>
    </template>
    <template #content>
      <p>
        Se transfirieron <strong>${{ amount }}</strong> a {{ receiverName }} en <strong>{{ bankName }}</strong>
      </p>
      <p class="tw-text-sm tw-text-gray-500">Comprobante <span class="tw-font-semibold">#{{ voucherNumber }}</span></p>
    </template>
  </MainCard>
</template>