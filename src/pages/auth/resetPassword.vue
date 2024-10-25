<script setup>
import router from '@/router';
import { ref } from 'vue'

const password = ref('')
const checkPassword = ref('')

// Define submitForm function
const submitForm = () => {
  // Handle form submission logic here
  console.log("Form submitted with:", password.value, checkPassword.value)
}
const cancelForm = () =>
{
    checkPassword.value =''
    password.value = ''

    router.push('/auth/recovery')
}
</script>

<template>
  <v-container>
    <!-- Header -->
    <div class="tw-text-2xl tw-text-primary-600 tw-font-semibold tw-text-left">
      Restablecer contraseña
    </div>
    <div class="tw-h-2 tw-bg-primary-200 tw-w-[10vw] tw-my-2"/>
    <div class="tw-text-xl tw-text-primary-600 tw-font-light tw-text-left">
      Cambia tu contraseña
    </div>
  </v-container>

  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        label="*******"
        v-model="password"
        placeholder="Nueva Contraseña"
        outlined
        required
      ></v-text-field>
      <v-text-field
        label="*******"
        v-model="checkPassword"
        placeholder="Repeti la contraseña"
        outlined
        required
      ></v-text-field>
    </v-form>
     <!-- Buttons -->
     <v-row>
                <v-col cols="6">
                  <v-btn block color="red" @click="cancelForm">Cancelar</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn block color="primary" type="submit">Confirmar</v-btn>
                </v-col>
              </v-row>
  </v-container>
</template>

<route lang="yaml">
meta:
    layout: auth.layout
</route>
