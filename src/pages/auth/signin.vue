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

        <v-btn  variant="text" text class="forgot-password-btn" @click="recoverPassword">
          ¿Olvidaste tu contraseña? Recupérala
        </v-btn>

        <div class="divider">o</div>

        <v-btn color="primary" class="register-btn mt-4" block @click="register">
          Crear cuenta
        </v-btn>

        <v-btn
          class="google-btn mt-4"
          color="red darken-2"
          prepend-icon="mdi-google"
          block
          @click="loginWithGoogle"
        >
          Iniciar sesión con Google
        </v-btn>

        <v-btn
          class="apple-btn mt-4"
          prepend-icon="mdi-apple"
          color="black"
          block
          @click="loginWithApple"
        >
          Iniciar sesión con Apple
        </v-btn>

        <v-btn
          class="facebook-btn mt-4"
          prepend-icon="mdi-facebook"
          color="blue darken-4"
          block
          @click="loginWithFacebook"
        >
          Iniciar sesión con Facebook
        </v-btn>
      </v-form>
    <!-- </v-card>
  </div> -->
</template>

<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #001f3f, #0070c0);
}

.login-card {
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.logo {
  width: 120px;
  height: auto;
  margin-bottom: 30px;
}

.submit-btn {
  background-color: #007bff !important;
  color: white;
}

.forgot-password-btn {
  margin-top: 10px;
  color: #007bff;
  font-size: 0.9rem;
}

.divider {
  margin: 30px 0;
  text-align: center;
  color: #999;
}

.google-btn,
.apple-btn,
.facebook-btn,
.register-btn {
  margin-top: 15px;
}

.google-btn {
  background-color: #db4437;
  color: white;
}

.apple-btn {
  background-color: #333;
  color: white;
}

.facebook-btn {
  background-color: #4267b2;
  color: white;
}
</style>

<route lang="yaml">
meta:
    layout: auth.layout
</route>
