<template>
    <h1>Playground</h1>
    <div class="tw-flex tw-items-center tw-justify-center tw-h-screen">
        <BillGraph 
            :series_data="series_data"
        />
    </div>

</template>

<script setup>

    const series_data = [
        { name: 'Comida', value: 1000, color: '#FB67CA' }, 
        { name: 'Entretenimiento', value: 2000, color: '#FFA84A' },
        { name: 'Transporte', value: 1000, color: '#04BFDA' }, 
    ]
</script>