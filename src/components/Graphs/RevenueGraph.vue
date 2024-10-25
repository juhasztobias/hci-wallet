<template>
    <v-card class="tw-flex tw-flex-col tw-w-full" elevation="1">
        <v-card-title class="tw-text-lg tw-font-semibold">
            Rendimiento
        </v-card-title>
        <div class="tw-flex-grow">
            <apexchart
                type="area"
                :options="chartOptions"
                :series="series_data"
                :height="200"
            />
        </div>
    </v-card>
</template>

<script setup>
    const { series_data } = defineProps(['series_data'])
    const labels = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    const chartOptions = { 
            chart: {
              height: 'auto',
              width: '100%',
              type: 'area',
              toolbar: "none",
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            legend: {
              show: false
            },
            stroke: {
              curve: 'smooth'
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: .2,
                opacityFrom: .4,
                opacityTo: .05,
              }
            },
            xaxis: {
              type: 'string',
              categories: labels
            },
          }
</script>