<template>

  <MainCard type="danger">
    <template #header>
      <div class="tw-text-lg tw-font-semibold tw-text-white tw-flex tw-gap-2">
        <v-icon class="tw-text-white" icon="mdi-alert-circle" />
        <h1>Ocurrió un error mientras realizábamos la transferencia</h1>
      </div>
    </template>
    <template #content>
      <h2 class="tw-text-lg tw-font-semibold">
        {{ errorMessage }}
      </h2>
      <p class="tw-text-sm tw-text-gray-400">
        Podés programar la transferencia para más tarde o cambiar tu red Wi-Fi e intentar nuevamente.
      </p>
    </template>
  </MainCard>
</template>

<script>
import MainCard from '../MainCard.vue';

export default {
  name: 'ErrorNotification',
  props: {
    errorMessage: {
      type: String,
      default: 'Error desconocido'
    }
  }
};
</script>