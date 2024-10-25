<template>
    <main class="tw-grid tw-grid-cols-[1fr,.4fr] tw-gap-3 tw-py-2 tw-items-start">
        <section class="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-justify-center">
            <v-card elevation="1" class="tw-w-full tw-min-h-[600px] tw-p-4"></v-card>
            <RevenueGraph :series_data="revenue_data"/>
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

    const randomData = () => {
        return Math.round(Math.random() * 1000);
    }
    const randomRevenueData = () => {
        return Array.from({length: 7}, randomData);
    }
    const revenue_data = [
        {
            name: '2022',
            data: randomRevenueData()
        },
        {
            name: '2023',
            data: randomRevenueData()
        }
    ]
</script>

<route lang="yaml">
meta:
    layout: dashboard.layout
    requiresAuth: true
</route>