<script setup>
    import BillGraph from '@/components/Graphs/BillGraph.vue';
import { faker } from '@faker-js/faker';
    const series_data = [
        { name: 'Comida', value: 1000, color: '#FB67CA' }, 
        { name: 'Entretenimiento', value: 2000, color: '#FFA84A' },
        { name: 'Transporte', value: 1000, color: '#04BFDA' }, 
    ]
    // [ { 
    //     date: '2023-01-01',
    //     name: 'Comida',
    //     monto: 1000,
    // } ]

    const activity_data = Array.from({length: 27}, () => {
        return {
            fecha: faker.date.past(),
            tipo: faker.finance.transactionType(),
            descripcion: faker.finance.accountName() + ' - ' + faker.finance.accountNumber(),
            monto: 
                (Math.random() * 1000 + 10)
                * (Math.random() > .5 ? -1 : 1)  
            ,
        }
    }).sort((a, b) => b.fecha - a.fecha);

    console.log(activity_data);
</script>

<template>
    <main class="tw-grid tw-grid-cols-[1fr,.4fr] tw-gap-3 tw-py-2 tw-items-start">
        <section class="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-justify-center">
            <v-card elevation="1" class="tw-w-full tw-p-4">
                <div class="tw-grid tw-py-4 tw-px-4">
                    <h1 class="tw-text-lg tw-font-semibold tw-pb-4 tw-text-primary-500">Actividad</h1>
                    <v-data-table
                        :headers="headers"
                        :items="activity_data"
                        :items-per-page="25"
                        density="comfortable"
                    >
                        <template v-slot:item.fecha="{ item }">
                            <span
                                class="tw-text-gray-500 tw-text-xs"
                            >{{ 
                                new Date(item.fecha).toLocaleDateString() 
                                }}</span>
                        </template>
                        <template v-slot:item.tipo="{ item }">
                            <span>{{ item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1) }}</span>
                        </template>
                        <template v-slot:item.descripcion="{ item }">
                            <span>{{ item.descripcion }}</span>
                        </template>
                        <template v-slot:item.monto="{ item }">
                            <span
                                class="tw-font-semibold"
                                :class="item.monto > 0 ? 'tw-text-green-500' : 'tw-text-red-500'"
                            >{{ 
                                new Intl.NumberFormat('es-AR', {
                                    style: 'currency',
                                    currency: 'ARS',
                                }).format(item.monto)
                            }}</span>
                        </template>
                    </v-data-table>
                </div>
            </v-card>
        </section>
        <aside
            class="tw-sticky tw-top-0 tw-flex tw-gap-3 tw-flex-col"
        >
            <BillGraph :series_data="series_data" />
        </aside>
    </main>
</template>

<route lang="yaml">
meta:
    layout: dashboard.layout
    requiresAuth: true
</route>