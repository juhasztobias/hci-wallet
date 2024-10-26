  
  <script>
  export default {
    name: 'TransferDetails',
    props: {
      senderName: {
        type: String,
        required: true
      },
      senderAlias: {
        type: String,
        required: true
      },
      receiverName: {
        type: String,
        required: true
      },
      receiverAlias: {
        type: String,
        required: true
      }
    }
  }
  </script>
<template>
    <div class="transfer-details-card">
      <div class="header">
        Detalles de la transferencia
      </div>
      <div class="content">
        <div class="user-info">
          <p class="name">{{ senderName }}</p>
          <p class="alias">Alias: {{ senderAlias }}</p>
        </div>
        <div class="arrow">→</div>
        <div class="user-info">
          <p class="name">{{ receiverName }}</p>
          <p class="alias">Alias: {{ receiverAlias }}</p>
        </div>
      </div>
    </div>
  </template>


<style scoped>
.transfer-details-card {
  width: 100%;
  max-width: 600px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.header {
  background-color: #6c757d;
  color: white;
  padding: 16px 16px;
  font-weight: bold;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
}

.user-info {
  text-align: center;
}

.name {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 4px;
}

.alias {
  color: #6c757d;
}

.arrow {
  font-size: 1.5rem;
  color: #6c757d;
}
</style>