<template>
    <v-card elevation="1" rounded="lg">
            <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-2">
                <apexchart 
                    type="radialBar"
                    :options="chartOptions"
                    :series="scaledSeries"
                /> 
                    <table class="tw-w-full">
                        <tbody>
                            <tr 
                                v-for="item in series_data" 
                                :key="item.name"
                                class="tw-h-10 tw-w-full"
                            >
                                <td class="tw-text-sm tw-font-semibold tw-px-2">
                                    <v-chip       
                                        class="tw-text-sm tw-font-semibold"
                                        :color="item.color"
                                        :outlined="true"
                                        :small="true"
                                    >
                                        {{ item.name }}
                                    </v-chip> 
                                </td>
        
                                <td class="tw-text-sm tw-text-end tw-px-4">
                                    <span class="tw-text-sm">
                                        {{ formatCurrency(item.value) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>        
                    </table>
                </div>
        </v-card>
</template>

<script setup>
    const { series_data } = defineProps(['series_data'])
    series_data.sort((a, b) => b.value - a.value);
    const series = series_data.map(s => s.value);
    const total = series.reduce((a, b) => a + b, 0);
    const scaledSeries = series.map(s => s / total * 100);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
        }).format(value);
    }

    const formatterToCurrency = (value) => {
        const idx = scaledSeries.findIndex((s) => s === value);
        return formatCurrency(series[idx] || 0);
    }

    const chartOptions = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    value: {
                        offsetY: 0,
                        fontWeight: 'bold',
                        formatter: formatCurrency,
                    },
                    total: {
                        show: true,
                        label: 'Gasto total',
                        formatter: function (w) {
                            return new Intl.NumberFormat('es-AR', {
                                style: 'currency',
                                currency: 'ARS',
                            }).format(total);
                        },
                    },
                },
                hollow: {
                    margin: 5,
                    size: '40%',
                    background: 'transparent',
                    image: undefined,
                    position: 'front',
                },
                track: {
                    margin: 10, // margin is in pixels

                },
            },  
        },
        stroke: {
            lineCap: 'round',
        },
        labels: series_data.map(s => s.name),
        colors: series_data.map(s => s.color),
    }
</script>