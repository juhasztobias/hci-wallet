<template>
    <main class="tw-grid tw-grid-cols-[1fr,.4fr] tw-gap-3 tw-py-2 tw-items-start">
        <section class="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-justify-center">
            <MainCard>
                <template #header>
                    <AvailableMoney />
                </template>

                <template #content>
                    <ActivityTable />
                </template>
            </MainCard>
            <div class="tw-flex tw-gap-3 tw-flex-row tw-w-full">
                <BillGraph :series_data="series_data" />
                <RevenueGraph :series_data="revenue_data" />
            </div>
        </section>
        <aside class="tw-flex tw-gap-3 tw-flex-col">
            <QuickActions />
            <ContactData />
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
    return Array.from({ length: 7 }, randomData);
}
const revenue_data = [
    {
        name: 'Semana pasada',
        data: randomRevenueData(),
        color: '#777', // Muy buenas a todos, guapisimos!
        type: 'line'
    },
    {
        name: 'Esta semana',
        data: randomRevenueData(),
        color: '#1D60F8'
    }
]
</script>

<route lang="yaml">
meta:
    layout: dashboard.layout
    requiresAuth: true
</route>