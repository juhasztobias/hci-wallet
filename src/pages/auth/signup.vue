<script setup>
    import { ref } from 'vue';

    const nombre = ref('')
    const apellido = ref('')
    const nacionalidad = ref('')
    const aceptaTerminos = ref(false)

    const submitForm = () => {
    if (aceptaTerminos.value) {
        // Handle form submission
        console.log('Form submitted:', { nombre: nombre.value, apellido: apellido.value, nacionalidad: nacionalidad.value })
    } else {
        alert('Debes aceptar los términos y condiciones.')
    }
    }

    const cancelForm = () => {
        // Clear form or navigate away
        nombre.value = ''
        apellido.value = ''
        nacionalidad.value = ''
        aceptaTerminos.value = false
    }
</script>

<template>
    <v-card-text>
            <h3 class="text-center">Contanos un poco de vos.</h3>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                label="Nombre"
                v-model="nombre"
                placeholder="Nombre"
                outlined
                required
              ></v-text-field>
              <v-text-field
                label="Apellido"
                v-model="apellido"
                placeholder="Apellido"
                outlined
                required
              ></v-text-field>
              <v-text-field
                label="Nacionalidad"
                v-model="nacionalidad"
                placeholder="Nacionalidad"
                outlined
                required
              ></v-text-field>

              <!-- Terms and Conditions Checkbox -->
              <v-checkbox
                v-model="aceptaTerminos"
                label="Acepto los Términos y Condiciones de Servicio"
                required
              ></v-checkbox>

              <!-- Buttons -->
              <v-row>
                <v-col cols="6">
                  <v-btn block color="red" @click="cancelForm">Cancelar</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn block color="primary" type="submit">Registrarse</v-btn>
                </v-col>
              </v-row>
            </v-form>
            </v-card-text>
</template>

<route lang="yaml">
meta:
    layout: auth.layout
</route>