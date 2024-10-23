<script setup>
  import { ref } from 'vue';
import { useRouter } from 'vue-router';

  const email = ref('')
  const password = ref('')
  const router = useRouter()

  const handleSubmit = () => {
    console.log('Iniciar sesión con:', email.value, password.value)
  }

  const register = () => {
    console.log('Redirigiendo a registro')
    router.push('/auth/signup')
  }

  const loginWithGoogle = () => {
    console.log('Iniciar sesión con Google')
  }

  const loginWithApple = () => {
    console.log('Iniciar sesión con Apple')
  }

  const loginWithFacebook = () => {
    console.log('Iniciar sesión con Facebook')
  }

  const recoverPassword = () => {
    console.log('Redirigiendo a recuperación de contraseña')
  }
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
              
              <v-btn color="primary" class="mt-4" block type="submit">
                Iniciar sesión
              </v-btn>
              
              <v-btn color="secondary" class="mt-2" block @click="register">
                Crear cuenta
              </v-btn>
              
              <v-divider class="my-4"></v-divider>
              
              <v-btn
                class="mb-2"
                color="red darken-2"
                block
                @click="loginWithGoogle"
              >
                <v-icon left>mdi-google</v-icon> Iniciar sesión con Google
              </v-btn>
              
              <v-btn
                class="mb-2"
                color="black"
                block
                @click="loginWithApple"
              >
                <v-icon left>mdi-apple</v-icon> Iniciar sesión con Apple
              </v-btn>
              
              <v-btn
                class="mb-2"
                color="blue darken-4"
                block
                @click="loginWithFacebook"
              >
                <v-icon left>mdi-facebook</v-icon> Iniciar sesión con Facebook
              </v-btn>
            </v-form>
            
            <v-btn text block class="mt-3" @click="recoverPassword">
              ¿Olvidaste tu contraseña? Recupérala
            </v-btn>
          </v-card-text>
</template>

<route lang="yaml">
meta:
    layout: auth.layout
</route>