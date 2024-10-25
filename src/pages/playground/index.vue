<template>
    <h1>Playground</h1>
    <div class="tw-flex tw-items-center tw-justify-center tw-h-screen">
        <v-card class="tw-w-[50vw] tw-max-h-[30vh]" elevation="1">
            <apexchart
                type="area"
                :options="chartOptions"
                :series="series"
            />
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
              type: 'area',
              toolbar: "none",
            },
            dataLabels: {
              enabled: false
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