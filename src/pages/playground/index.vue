<template>
    <h1>Playground</h1>
    <div class="tw-flex tw-items-center tw-justify-center tw-h-screen">
        <v-card class="tw-flex tw-flex-col tw-w-[40vw]" elevation="1">
          <v-card-title class="tw-text-lg tw-font-semibold">
            Rendimiento
          </v-card-title>
          <div class="tw-flex-grow">
            <apexchart
                type="area"
                :options="chartOptions"
                :series="series"
                :height="200"
            />
          </div>
        </v-card>
    </div>
</template>

<script setup>
    const series = [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }];

    const labels = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    const chartOptions = { 
            chart: {
              height: 'auto',
              width: '100%',
              type: 'area',
              toolbar: "none",
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
            xaxis: {
              type: 'string',
              categories: labels
            },
          }
</script>