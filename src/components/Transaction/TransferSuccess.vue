<script>
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
    <v-container class="success-notification-container" max-width="500">
      <div class="success-header">
        <span>Transferencia exitosa</span>
      </div>
      <div class="success-content">
        <p class="success-message">
          Se transfirieron <strong>${{amount}}</strong> a {{receiverName}} en <strong>{{bankName}}</strong>
        </p>
        <p class="success-note">Comprobante #{{voucherNumber}}</p>
      </div>
    </v-container>
</template>
    
<style scoped>
  .success-notification-container {
    border-radius: 8px;
    overflow: hidden;
    background-color: #f5f5f5;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    padding: 0;
  }
  
  .success-header {
    background-color: #4caf50;
    color: white;
    padding: 12px 16px;
    font-weight: bold;
    font-size: 16px;
  }
  
  .success-content {
    padding: 16px;
    background-color: white;
  }
  
  .success-message {
    font-size: 16px;
    color: #333;
    margin: 0;
  }
  
  .success-note {
    font-size: 14px;
    color: #666;
    margin-top: 8px;
  }
  </style>
  