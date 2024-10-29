<template>
    <v-container class="error-notification-container" max-width="500">
      <div class="error-header">
        <v-icon color="white" class="error-icon">mdi-alert-circle</v-icon>
        <span>Ocurrió un error mientras realizábamos la transferencia</span>
      </div>
      <div class="error-content">
        <p class="error-title">Parece que no tenés conexión a internet.</p>
        <p class="error-description">
          Podés programar la transferencia para más tarde o cambiar tu red Wi-Fi e intentar nuevamente.
        </p>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ErrorNotification',
  };
  </script>
  
  <style scoped>
  .error-notification-container {
    border-radius: 8px;
    overflow: hidden;
    background-color: #f5f5f5;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    padding: 0;
  }
  
  .error-header {
    background-color: #ff5252;
    color: white;
    padding: 12px 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    font-size: 16px;
  }
  
  .error-icon {
    margin-right: 8px;
  }
  
  .error-content {
    padding: 16px;
    background-color: white;
  }
  
  .error-title {
    font-weight: bold;
    font-size: 16px;
    color: #333;
    margin-bottom: 4px;
  }
  
  .error-description {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
  </style>
  