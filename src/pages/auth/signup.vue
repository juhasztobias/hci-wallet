<script setup>
    import { ref } from 'vue';
    import {Country} from 'country-state-city';
    import { useRouter } from 'vue-router';
    
    const nombre = ref('')
    const apellido = ref('')
    const nacionalidad = ref('')
    const nacionalidades = ref([]);
    const aceptaTerminos = ref(false);
    const router = useRouter()
    const getCountries = () => {
        const countries = Country.getAllCountries(); 
        nacionalidades.value = countries.map(country => country.name); 
    };

    onMounted(() => {
        getCountries();
    });
    const submitForm = () => {
        if (aceptaTerminos.value && nombre.value != ''  && apellido.value != '' && nacionalidad.value != '') {

            // Handle form submission
            console.log('Form submitted:', { nombre: nombre.value, apellido: apellido.value, nacionalidad: nacionalidad.value })
        }
        else if (nombre.value == '')
        {
            alert('Falta completar tu Nombre')
        }
        else if (apellido.value == '')
        {
            alert('Falta completar tu Apellido')
        }
        else if ( nacionalidad.value == '')
        {
            alert('Falta completar tu Nacionalidad')
        }
        else {
            alert('Debes aceptar los términos y condiciones.')
        }
    }

    const cancelForm = () => {
        // Clear form or navigate away
        nombre.value = ''
        apellido.value = ''
        nacionalidad.value = ''
        aceptaTerminos.value = false

        router.push('/auth/signin')
    }
</script>

<template>
    <v-card-text>
            <h3 class="tw-text-lg tw-font-[500] tw-mb-8 text-center">Contanos un poco de vos.</h3>
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
              <v-combobox
              label="Nacionalidad"
              :items=nacionalidades
              ></v-combobox>

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