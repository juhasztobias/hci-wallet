<template>
    <main class="tw-grid tw-grid-cols-[1fr,.4fr] tw-gap-3 tw-p-2 tw-items-start">
        <section class="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-justify-center">
            <v-card class="tw-w-full tw-min-h-[600px] tw-p-4"></v-card>
            <v-card class="tw-w-full tw-min-h-[200px] tw-p-4"></v-card>
        </section>
        <aside class="tw-flex tw-gap-3 tw-flex-col">
            <BillGraph :series_data="series_data"/>
            <BillGraph :series_data="series_data"/>
        </aside>
    </main>
</template>

<script setup>
    const series_data = [
        { name: 'Comida', value: 1000, color: '#FB67CA' }, 
        { name: 'Entretenimiento', value: 2000, color: '#FFA84A' },
        { name: 'Transporte', value: 1000, color: '#04BFDA' }, 
    ]
</script>

<route lang="yaml">
meta:
    layout: dashboard.layout
    requiresAuth: true
</route>