<template>
  <h1>Playground</h1>
  <div class="tw-flex tw-items-center tw-justify-center tw-h-screen">
    <div class="tw-w-[40vw] tw-flex tw-flex-col">
      <BigCheckBox title="Pago en efectivo" subtitle="Transferencia programada" />
    </div>
  </div>
</template>

<script setup>
import BigCheckBox from '@/components/Input/BigCheckBox.vue';

</script>