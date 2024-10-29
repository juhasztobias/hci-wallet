<script>

import { useAuthStore } from '@/stores/auth-store';
import { th } from '@faker-js/faker';

export default {
  created() {
    const email = this.$route.query.email;
    const code = this.$route.query.code;
    console.log("Correo electrónico recibido:", email);

    if (email) {
      this.recoveryEmail = email;
    } else {
      console.error("No se recibió ningún correo electrónico");
    }
    if (code) {
      this.code = code;
    }
    else {
      console.error("No se recibió ningún código");
    }
  },
  data() {
    return {
      recoveryEmail: '',
      password: '',
      checkPassword: '',
      code: ''
    }
  },
  methods: {
    // Define submitForm function
    async submitForm() {
      // Handle form submission logic here
      console.log("Form submitted with:", this.password, this.checkPassword)
      if (this.password != this.checkPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      try {
        await useAuthStore().resetPassword(this.recoveryEmail, this.code, this.password)
        alert("La contraseña se ha cambiado con exito");
        this.$router.push('/auth/signin')

      }
      catch (err) {
        console.error(err)
        alert("la contraseña no es valida")
      }
    },
    cancelForm() {
      checkPassword.value = ''
      password.value = ''

      this.$router.push('/auth/signin')
    }
  }
}
</script>
<template>
  <v-container>
    <!-- Header -->
    <div class="tw-text-2xl tw-text-primary-600 tw-font-semibold tw-text-left">
      Restablecer contraseña
    </div>
    <div class="tw-h-2 tw-bg-primary-200 tw-w-[10vw] tw-my-2" />
    <div class="tw-text-xl tw-text-primary-600 tw-font-light tw-text-left">
      Cambia tu contraseña
    </div>
  </v-container>

  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field label="*******" v-model="password" placeholder="Nueva Contraseña" outlined required></v-text-field>
      <v-text-field label="*******" v-model="checkPassword" placeholder="Repeti la contraseña" outlined
        required></v-text-field>
    </v-form>
    <!-- Buttons -->
    <v-row>
      <v-col cols="6">
        <v-btn block color="red" @click="cancelForm">Cancelar</v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn block color="primary" @click="submitForm" type="submit">Confirmar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<route lang="yaml">
meta:
    layout: auth.layout
</route>
