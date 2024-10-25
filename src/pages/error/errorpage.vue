<script setup>
</script>
<template>
    <v-container class="blue-background" fluid>
      <!-- Sección de fondo azul -->
      <div class="text-section">
        <h1 class="oops-text">¡Oops!</h1>
        <p class="subtext">
          Parece que esta billetera está tan vacía que hasta la mosca se fue a buscar trabajo...
        </p>
        <p class="info-text">No encontramos lo que buscabas</p>
        
        <!-- Botón para volver al inicio -->
        <v-btn class="back-btn" @click="goBack">¿Volvemos al inicio?</v-btn>
      </div>
      
      <!-- Sección de imagen -->
      <div class="image-section">
        <img src="@/assets/Mundito.png" alt="Imagen de billetera vacía" class="wallet-image"/>
      </div>
    </v-container>
</template>
  
<style scoped>
  .blue-background {
  background-color: #4285F4; /* Color de fondo azul */
  color: white;
  padding: 2rem 1rem;
}

.oops-text {
  font-size: 3rem;
  font-weight: bold;
}

.subtext {
  font-size: 1.25rem;
  margin-top: 0.5rem;
}

.info-text {
  font-size: 1rem;
  margin-top: 1rem;
}

.back-btn {
  background-color: #1E88E5;
  color: white;
  margin-top: 2rem;
}

.image-section {
  display: flex;
  justify-content: flex-end; /* Mueve la imagen hacia la derecha */
  margin-right: 20rem;
  width: 50%;
}

.wallet-image {
  width: 400px; /* Ajuste del tamaño de la imagen */
  height: auto;
}
</style>