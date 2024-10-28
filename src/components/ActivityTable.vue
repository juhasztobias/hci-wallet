<template>
    <section>
        <v-data-table :hide-default-footer="!paginatorShow" class="tw-mt-4" v-model:page="page"
            :page-count="Math.ceil(activityToShow.length / 5)" :headers="headers" :items="activityToShow"
            :items-per-page="5" density="compact">
            <template v-slot:item.fecha="{ item }">
                <span class="tw-text-gray-500 tw-text-xs">{{
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
                <span class="tw-font-semibold" :class="item.monto > 0 ? 'tw-text-green-500' : 'tw-text-red-500'">{{
                    new Intl.NumberFormat('es-AR', {
                        style: 'currency',
                        currency: 'ARS',
                    }).format(item.monto)
                }}</span>
            </template>
        </v-data-table>
    </section>
</template>

<script setup>

import { faker } from '@faker-js/faker';
const props = defineProps({
    type: {
        type: String,
        default: () => "all-time",
        validator: (value) => ['all-time', 'recents', 'last-30-days'].includes(value)
    }
})

const activity_data = Array.from({ length: 27 }, () => {
    return {
        fecha: faker.date.past(),
        tipo: faker.finance.transactionType(),
        descripcion: faker.finance.accountName() + ' - ' + faker.finance.accountNumber(),
        monto:
            (Math.random() * 1000 + 10) *
            (Math.random() > 0.5 ? -1 : 1)
    };
}).sort((a, b) => b.fecha - a.fecha);

const typeToArr = (arr, type) => {
    switch (type) {
        case 'all-time':
            return arr;
        case 'recents':
            return arr.slice(0, 5);
        case 'last-30-days':
            return arr.slice(0, 30);
    }
}
const activityToShow = computed(() => typeToArr(activity_data, props.type));
const paginatorShow = computed(() => activityToShow.value.length > 5);
</script>
