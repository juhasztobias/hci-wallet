<script>

    export default {
    data() {
        return {
        recoveryMethods: [
            { title: 'Mensaje de texto', icon: 'mdi-message' },
            { title: 'Mensaje de Whatsapp', icon: 'mdi-whatsapp' },
            { title: 'Correo electrónico', icon: 'mdi-email' }
        ]
        };
    },
    methods: {
        handleRecoveryMethod(method) {
            console.log("Selected recovery method:", method); // Verificación
            // Asegúrate de que el método no esté vacío o undefined
            if (method) {
                // Enviar método de recuperación seleccionado como parámetro
                this.$router.push({
                    path: '/auth/recoveryCode',
                    query: { method: method } // Enviando el método seleccionado a la siguiente página
                });
            } else {
                console.error("No se seleccionó un método de recuperación");
            }
        },
        cancelForm() {
            this.$router.push('/auth/signin'); 
        }
    }
    };
    
</script>


<template>
    <v-container>
        <!-- Header -->
        <div class="tw-text-2xl tw-text-primary-600 tw-font-semibold tw-text-left">
          Restablecer contraseña
        </div>
        <div class="tw-h-2 tw-bg-primary-200 tw-w-[10vw] tw-my-2"/>
        <div class="tw-text-xl tw-text-primary-600 tw-font-light tw-text-left">
          Selecciona un método de recuperación
        </div>

        <!-- Recovery Options -->
        <v-list class="mt-6">
          <v-list-item v-for="(method, index) in recoveryMethods" :key="index">
            <div
              class="tw-flex tw-items-center tw-justify-between tw-w-full hover:tw-bg-slate-200 active:tw-bg-slate-400 tw-cursor-pointer tw-px-6 tw-py-4 tw-rounded-lg"
              @click="handleRecoveryMethod(method.title)"
            >
              <div class="tw-flex tw-items-center tw-text-primary-600">
                <v-icon left class="tw-mr-3 tw-text-primary-200 ">{{ method.icon }}</v-icon>
                {{ method.title }}
              </div>
              <v-icon class ="tw-text-primary-600">mdi-chevron-right</v-icon>
            </div>
          </v-list-item>
        </v-list>
  
        <!-- Cancel Button -->
        <div class="tw-items-left mt-6">
            <v-btn variant="text" @click="cancelForm" color="primary">
                <v-icon>mdi-arrow-left</v-icon>
                Cancelar
            </v-btn>
        </div>
    </v-container>
</template>
<route lang="yaml">
meta:
    layout: auth.layout
</route>
