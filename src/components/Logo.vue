<template>
  <v-card-title class="text-h6 d-flex justify-center">
    <v-avatar :size="size">
      <img src="@/assets/logo.png" alt="Pagozen-logo" :class="`tw-size-[${size}px]`" />
    </v-avatar>
  </v-card-title>
</template>
<script>
export default {
  name: 'Logo',
  props: {
    size: {
      type: Number,
      default: 150
    }
  }
}
</script>