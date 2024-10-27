<script setup>
import { useAuthStore } from '@/stores/auth-store';
import { useRouter } from 'vue-router';
const router = useRouter();
const email_text = ref('')
const error_msg = ref('')
const show_err = ref(false)

const handleEmailSubmission = async () => {
  let email = email_text.value
  console.log("Submitted email:", email);

  try {
    await useAuthStore().forgotPassword(email)
    router.push({
      path: '/auth/recoveryCode',
      query: { email: email }
    });
  }
  catch (err) {
    error_msg.value = err.message
    show_err.value = true
  }
}
const cancelForm = () => {
  router.push('/auth/signin');
}
</script>


<template>
  <v-container>

    <div class="tw-text-2xl tw-text-primary-600 tw-font-semibold tw-text-left">
      Restablecer contraseña
    </div>
    <div class="tw-h-2 tw-bg-primary-200 tw-w-[10vw] tw-my-2" />
    <div class="tw-text-xl tw-text-primary-600 tw-font-light tw-text-left">
      Selecciona un Ingrese su mail para recuperar la contraseña
    </div>

    <!-- Email Input -->
    <v-text-field v-model="email_text" label="Correo electrónico" placeholder="Correo electrónico" type="email"
      class="mt-6" required></v-text-field>


    <!-- Button Container -->
    <div class="mt-6 d-flex d-flex justify-space-between">
      <!-- Cancel Button -->
      <v-btn variant="text" @click="cancelForm" color="primary" class="mr-2">
        <v-icon>mdi-arrow-left</v-icon>
        Cancelar
      </v-btn>

      <!-- Submit Button -->
      <v-btn @click="handleEmailSubmission" color="primary">
        Enviar
      </v-btn>
    </div>
    <v-snackbar v-model="show_err">
      {{ error_msg }}
    </v-snackbar>
  </v-container>
</template>

<route lang="yaml">
meta:
    layout: auth.layout
</route>
