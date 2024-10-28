<template>
    <v-container class="transfer-summary-container">
      <!-- Notificación de éxito -->
      <SuccessNotification
        amount="amount"
        receiverName="receiverName"
        bankName="bankName"
        voucherNumber="voucherNumber"
      />
  
 
      <TransferDetails
        senderName="senderName"
        senderAlias="senderAlias"
        receiverName="receiverName"
        receiverAlias="receiverAlias"
      />
  

      <div class="action-buttons">
        <v-btn 
            variant="plain"
            color="grey-lighten-3"
            size="large"
        >
            Guardar Contacto
        </v-btn>
        <v-btn 
            color="primary" 
            class="confirm-btn" 
            size="large"
            @click="confirmTransfer">
          Confirmar
        </v-btn>
      </div>
    </v-container>
  </template>
  
  <script>
  import SuccessNotification from '@/components/Transaction/TransferSuccess.vue';
  import TransferDetails from '@/components/Transaction/TransferDetails.vue';
  
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
        // Lógica para guardar contacto
        console.log('Contacto guardado');
      },
      confirmTransfer() {
        // Lógica para confirmar la transferencia
        console.log('Transferencia confirmada');
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
    min-width: 210vh;
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
  
    .action-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1px;
        margin-top: 100px;
    }

  </style>
  