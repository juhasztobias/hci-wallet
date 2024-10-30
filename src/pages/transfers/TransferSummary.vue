<template>
  <div class="tw-grid tw-gap-2">
    <SuccessNotification amount="amount" receiverName="receiverName" bankName="bankName"
      voucherNumber='voucherNumber' />
    <TransferDetails senderName="senderName" senderAlias="senderAlias" receiverName="receiverName"
      receiverAlias="receiverAlias" />

    <div class="action-buttons">
      <v-btn variant="plain" class="tw-text-gray-700" size="large" @click="saveContact">
        Guardar Contacto
      </v-btn>
      <v-btn color="primary" class="confirm-btn" size="large" @click="confirmTransfer">
        Confirmar
      </v-btn>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
    layout: float.layout
    requiresAuth: true
</route>

<script>
import TransferDetails from '@/components/Transaction/TransferDetails.vue';
import SuccessNotification from '@/components/Transaction/TransferSuccess.vue';

export default {
  name: 'TransferSummary',
  components: {
    SuccessNotification,
    TransferDetails
  },
  props: {
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
    senderName: {
      type: String,
      required: true
    },
    senderAlias: {
      type: String,
      required: true
    },
    receiverAlias: {
      type: String,
      required: true
    }
  },
  methods: {
    saveContact() {
      this.$router.push({
        "path": "/dashboard/contacts/new",
      })
    },
    confirmTransfer() {
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.transfer-summary-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: #f4f7fa;
  min-height: 100vh;
}

.header {
  display: flex;
  padding: 20px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}

.content {
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
}

.content-wrapper {
  max-width: 600px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.v-btn--size-large {
  padding: 0 100px !important
}

.success-header {
  display: flex;
  padding: 20px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
}

.success-content {
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
}

.action-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  margin-top: 100px;
}
</style>