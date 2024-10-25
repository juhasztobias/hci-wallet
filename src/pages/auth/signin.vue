<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleSubmit = () => {
  console.log('Iniciar sesión con:', email.value, password.value);
};

const register = () => {
  console.log('Redirigiendo a registro');
  router.push('/auth/signup');
};

const loginWithGoogle = () => {
  console.log('Iniciar sesión con Google');
};

const loginWithApple = () => {
  console.log('Iniciar sesión con Apple');
};

const loginWithFacebook = () => {
  console.log('Iniciar sesión con Facebook');
};

const recoverPassword = () => {
  console.log('Redirigiendo a recuperación de contraseña');
  router.push('/auth/recovery');
};
</script>

<template>

      <v-form @submit.prevent="handleSubmit">
        <v-text-field
          label="Email"
          v-model="email"
          type="email"
          placeholder="Email"
          required
        ></v-text-field>

        <v-text-field
          label="Contraseña"
          v-model="password"
          type="password"
          placeholder="Contraseña"
          required
        ></v-text-field>

        <v-btn color="primary" class="submit-btn mt-4" block type="submit">
          Iniciar sesión
        </v-btn>

        <v-btn variant="text" text class="forgot-password-btn" @click="recoverPassword">
          ¿Olvidaste tu contraseña? Recupérala
        </v-btn>

        <div class="tw-text-center">o</div>

        <v-btn color="primary" class="register-btn mt-4" block @click="register">
          Crear cuenta
        </v-btn>

        <v-btn
          class="google-btn mt-4"
          color="red darken-2"
          block
          @click="loginWithGoogle"
        >
          <v-icon left>mdi-google</v-icon> Iniciar sesión con Google
        </v-btn>

        <v-btn
          class="apple-btn mt-4"
          color="black"
          block
          @click="loginWithApple"
        >
          <v-icon left>mdi-apple</v-icon> Iniciar sesión con Apple
        </v-btn>

        <v-btn
          class="facebook-btn mt-4"
          color="blue darken-4"
          block
          @click="loginWithFacebook"
        >
          <v-icon left>mdi-facebook</v-icon> Iniciar sesión con Facebook
        </v-btn>
      </v-form>
    <!-- </v-card>
  </div> -->
</template>


<route lang="yaml">
meta:
    layout: auth.layout
</route>
