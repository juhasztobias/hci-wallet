<script setup>
import { useAuthStore } from '@/stores/auth-store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const email = ref('');
const password = ref('');
const error_msg = ref('');
const show_err = ref(false);

const router = useRouter();

const handleSubmit = () => {
  console.log('Iniciar sesión con:', email.value, password.value)
  try {
    if (email.value != '' && password.value != '') {
      useAuthStore().login(
        email.value,
        password.value
      );
    }
    else {
      error_msg.value = 'Debes ingresar un correo electrónico y contraseña';
      show_err.value = true
    }
  }
  catch (err) {
    error_msg.value = err.message
    show_err.value = true
  }

}
const handleRegister = () => {
  console.log('Redirigiendo a Register');
  router.push('/auth/signup');
}

const recoverPassword = () => {
  console.log('Redirigiendo a recuperación de contraseña');
  router.push('/auth/recovery');
};
</script>

<template>

  <v-form @submit.prevent="handleSubmit">
    <v-text-field label="Email" v-model="email" type="email" placeholder="Email" required></v-text-field>

    <v-text-field label="Contraseña" v-model="password" type="password" placeholder="Contraseña"
      required></v-text-field>

    <v-btn color="primary" class="submit-btn mt-4" block type="submit">
      Iniciar sesión
    </v-btn>

    <v-btn variant="text" text class="forgot-password-btn" @click="recoverPassword">
      ¿Olvidaste tu contraseña? Recupérala
    </v-btn>

    <div class="tw-text-center">o</div>

    <v-btn color="primary" @click="handleRegister" class="register-btn mt-4" block>
      Crear cuenta
    </v-btn>
    <v-snackbar v-model="show_err">
      {{ error_msg }}
    </v-snackbar>
  </v-form>

</template>


<route lang="yaml">
meta:
    layout: auth.layout
</route>
