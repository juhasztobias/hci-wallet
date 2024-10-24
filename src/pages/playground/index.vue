<template>
    <h1>Playground</h1>
    <div
        class="tw-flex tw-items-center"
    >
        <apexchart 
            type="radialBar"
            :options="chartOptions"
            :series="scaledSeries"
        /> 
    </div>
</template>

<script setup> 

    const series = [ 500, 20, 30 ];
    const total = series.reduce((a, b) => a + b, 0);
    const scaledSeries = series.map(s => s / total * 100);

    const formatCurrency = (value) => {
        const idx = scaledSeries.indexOf(value);
        console.log(idx);
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
        }).format(series[idx]);
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
        labels: ['Vuetify', 'Vue', 'Apex Charts'],
    }

    
</script>