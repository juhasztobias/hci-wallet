<template>
  <div class="tw-grid tw-grid-cols-[300px,1fr] tw-p-2 tw-gap-8">
      <Sidebar />
      <div class="tw-overflow-y-auto tw-max-h-[calc(100vh-2rem)]">
          <router-view />
      </div>
  </div>
</template>
<script setup>
</script>