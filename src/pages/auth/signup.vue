<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const isLoading = ref(false);  // Estado de carga
const router = useRouter();

const handleSubmit = async () => {
  if (!validateEmail(email.value)) {
    alert('Correo no válido.');
    return;
  }

  if (password.value.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return;
  }

  isLoading.value = true;
  try {
    console.log('Iniciar sesión con:', email.value, password.value);
    // Simulación de solicitud API
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulando espera de 2 segundos
    console.log('Inicio de sesión exitoso');
    // Aquí puedes redirigir al usuario a otra ruta, si es necesario
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  } finally {
    isLoading.value = false;
  }
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
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};
</script>

<template>
  <v-card-text>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        label="Correo Electrónico"
        v-model="email"
        type="email"
        placeholder="Introduce tu correo"
        required
      ></v-text-field>
      
      <v-text-field
        label="Contraseña"
        v-model="password"
        type="password"
        placeholder="Introduce tu contraseña"
        required
      ></v-text-field>
      
      <v-btn :disabled="isLoading" color="primary" class="mt-4" block type="submit">
        {{ isLoading ? 'Iniciando sesión...' : 'Iniciar sesión' }}
      </v-btn>
      
      <v-btn :disabled="isLoading" color="secondary" class="mt-2" block @click="register">
        Crear cuenta
      </v-btn>
      
      <v-divider class="my-4"></v-divider>
      
      <v-btn
        class="mb-2"
        color="red darken-2"
        block
        @click="loginWithGoogle"
        :disabled="isLoading"
      >
        <v-icon left>mdi-google</v-icon> Iniciar sesión con Google
      </v-btn>
      
      <v-btn
        class="mb-2"
        color="black"
        block
        @click="loginWithApple"
        :disabled="isLoading"
      >
        <v-icon left>mdi-apple</v-icon> Iniciar sesión con Apple
      </v-btn>
      
      <v-btn
        class="mb-2"
        color="blue darken-4"
        block
        @click="loginWithFacebook"
        :disabled="isLoading"
      >
        <v-icon left>mdi-facebook</v-icon> Iniciar sesión con Facebook
      </v-btn>
    </v-form>
    
    <v-btn text block class="mt-3" @click="recoverPassword" :disabled="isLoading">
      ¿Olvidaste tu contraseña? Recupérala
    </v-btn>
  </v-card-text>
</template>
<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #001f3f, #0070c0);
}

</style>


<route lang="yaml">
meta:
    layout: auth.layout
</route>