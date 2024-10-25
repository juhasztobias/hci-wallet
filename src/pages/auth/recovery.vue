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
        console.log("Selected recovery method:", method);
        //Call API
        this.$router.push('/auth/recoveryCode'); 
        },
        cancelForm() {
            this.$router.push('/auth/signin'); 
        }
    }
    };
    
</script>


<template>
    <v-container class="flex justify-center items-center min-h-screen bg-blue-900">
        <!-- Header -->
        <div class="tw-text-2xl tw-text-primary-600 tw-font-semibold tw-text-left">
          Restablecer contraseña
        </div>
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
