<script setup>
import { ref, onMounted } from 'vue';
import { Country } from 'country-state-city';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth-store';

const nombre = ref('');
const apellido = ref('');
const nacionalidad = ref('');
const password = ref('');
const checkPassword = ref('');
const email = ref('');
const nacionalidades = ref([]);
const aceptaTerminos = ref(false);
const router = useRouter();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Snackbar state
const snackbar = ref({
  show: false,
  message: '',
  color: 'red'
});

const getCountries = () => {
  const countries = Country.getAllCountries();
  nacionalidades.value = countries.map(country => country.name);
};

onMounted(() => {
  getCountries();
});

const showSnackbar = (message) => {
  snackbar.value.message = message;
  snackbar.value.show = true;
};

const submitForm = () => {
  if (aceptaTerminos.value && nombre.value != '' && apellido.value != '' && nacionalidad.value != '') {

    if (!emailPattern.test(email.value)) {
      showSnackbar('Email invalido');
      return;
    }
    if (password.value != checkPassword.value) {
      showSnackbar("Las contraseñas no coinciden");
      return;
    }

    try {
      useAuthStore().register(email.value, password.value, nacionalidad.value);
      console.log("Going to dashboard");
      router.push('/dashboard');
    } catch (err) {
      showSnackbar("Error en el registro");
    }

  } else if (nombre.value == '') {
    showSnackbar('Falta completar tu Nombre');
  } else if (apellido.value == '') {
    showSnackbar('Falta completar tu Apellido');
  } else if (nacionalidad.value == '') {
    showSnackbar('Falta completar tu Nacionalidad');
  } else {
    showSnackbar('Debes aceptar los términos y condiciones.');
  }
};

const cancelForm = () => {
  nombre.value = '';
  apellido.value = '';
  nacionalidad.value = '';
  email.value = '';
  password.value = '';
  checkPassword.value = '';
  aceptaTerminos.value = false;

  router.push('/auth/signin');
};
</script>

<template>
  <v-card-text>
    <h3 class="tw-text-lg tw-font-[500] tw-mb-8 text-center">Contanos un poco de vos.</h3>
    <v-form @submit.prevent="submitForm">
      <v-text-field label="Nombre" v-model="nombre" placeholder="Nombre" outlined required></v-text-field>
      <v-text-field label="Apellido" v-model="apellido" placeholder="Apellido" outlined required></v-text-field>
      <v-text-field label="Email" v-model="email" placeholder="E-mail" outlined required></v-text-field>
      <v-text-field label="Contraseña" v-model="password" placeholder="Contraseña" outlined required></v-text-field>
      <v-text-field label="Confirmar Contraseña" v-model="checkPassword" placeholder="Confirmar Contraseña" outlined
        required></v-text-field>
      <v-combobox label="Nacionalidad" v-model="nacionalidad" :items="nacionalidades" outlined required></v-combobox>

      <v-checkbox v-model="aceptaTerminos" label="Acepto los Términos y Condiciones de Servicio" required></v-checkbox>

      <v-row>
        <v-col cols="6">
          <v-btn block color="red" @click="cancelForm">Cancelar</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn block color="primary" type="submit">Registrarse</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <!-- Snackbar Component -->
    <v-snackbar v-model="snackbar.show" color="red" timeout="3000">
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.show = false">Cerrar</v-btn>
      </template>
    </v-snackbar>
  </v-card-text>
</template>

<route lang="yaml">
meta:
    layout: auth.layout
</route>