<script setup>
import { faker } from '@faker-js/faker';
const series_data = [
    { name: 'Comida', value: 1000, color: '#FB67CA' },
    { name: 'Entretenimiento', value: 2000, color: '#FFA84A' },
    { name: 'Transporte', value: 1000, color: '#04BFDA' },
]

</script>

<template>
    <main class="tw-grid tw-grid-cols-[1fr,.4fr] tw-gap-3 tw-py-2 tw-items-start">
        <section class="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-justify-center">
            <MainCard>
                <template #header>
                    <h1 class="tw-text-lg tw-font-semibold">Actividad general</h1>
                </template>

                <template #content>
                    <ActivityTable type="all-time" />
                </template>
            </MainCard>
        </section>

        <aside class="tw-sticky tw-top-0 tw-flex tw-gap-3 tw-flex-col">
            <BillGraph :series_data="series_data" />
        </aside>
    </main>
</template>

<route lang="yaml">
meta:
    layout: dashboard.layout
    requiresAuth: true
</route>