<script setup>
</script>

<template>
    <main class="tw-bg-primary-100 tw-min-h-screen tw-grid tw-place-content-center">
        <Logo class="tw-absolute tw-top-4 tw-left-4" size="75" />
        <section class="tw-bg-red-100">
            <router-view />
        </section>
    </main>
</template>