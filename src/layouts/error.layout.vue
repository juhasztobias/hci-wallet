<template>
    <v-container class="text-center">
      <!-- Blue Background -->
      <div class="blue-background">
        <h1 class="oops-text">¡Oops!</h1>
        <p class="subtext">
          Parece que esta billetera está tan vacía que hasta la mosca se fue a buscar trabajo...
        </p>
        <p class="info-text">No encontramos lo que buscabas</p>
        
        <!-- Button to go back -->
        <v-btn class="back-btn" @click="goBack">¿Volvemos al inicio?</v-btn>
      </div>
      
      <!-- Image Section -->
      <div class="image-section">
        <img src="path_to_wallet_image" alt="Globe and Wallet Image" class="wallet-image"/>
      </div>
    </v-container>
  </template>