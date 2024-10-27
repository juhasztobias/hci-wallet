<script setup>
import { useAuthStore } from '@/stores/auth-store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const email = ref('');
const password = ref('');

const router = useRouter();

const handleSubmit = () => {
  console.log('Iniciar sesión con:', email.value, password.value)
  useAuthStore().login(
    email.value,
    password.value
  );
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

    <v-btn color="primary" class="register-btn mt-4" block>
      Crear cuenta
    </v-btn>

    <!-- <v-btn class="google-btn mt-4" color="red darken-2" prepend-icon="mdi-google" block @click="loginWithGoogle">
      Iniciar sesión con Google
    </v-btn>

    <v-btn class="apple-btn mt-4" prepend-icon="mdi-apple" color="black" block @click="loginWithApple">
      Iniciar sesión con Apple
    </v-btn>

    <v-btn class="facebook-btn mt-4" prepend-icon="mdi-facebook" color="blue darken-4" block @click="loginWithFacebook">
      Iniciar sesión con Facebook
    </v-btn> -->
  </v-form>
  <!-- </v-card>
  </div> -->
</template>


<route lang="yaml">
meta:
    layout: auth.layout
</route>
