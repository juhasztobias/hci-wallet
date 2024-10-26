<template>
    <v-container class="transfer-summary-container">
      <!-- Notificación de éxito -->
      <SuccessNotification
        amount="amount"
        receiverName="receiverName"
        bankName="bankName"
        voucherNumber="voucherNumber"
      />
  
      <!-- Detalles de la transferencia -->
      <TransferDetails
        senderName="senderName"
        senderAlias="senderAlias"
        receiverName="receiverName"
        receiverAlias="receiverAlias"
      />
  
      <!-- Botones de acción -->
      <div class="action-buttons">
        <v-btn icon @click="saveContact">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
        <span class="save-contact-label">Guardar contacto</span>
        <v-btn color="primary" class="confirm-btn" @click="confirmTransfer">
          Confirmar
          <v-icon right>mdi-check</v-icon>
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
    max-width: 600px; /* Ancho máximo para el contenido */
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
  
    .action-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin-top: 20px;
    }

  </style>
  