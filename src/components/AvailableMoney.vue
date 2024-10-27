<template>
    <div>
        <h1 class="tw-text-lg tw-font-semibold">
            Disponible
        </h1>

        <div class="tw-flex tw-gap-2 tw-items-center">
            <span class="tw-flex tw-text-2xl tw-font-bold tw-gap-1">
                <div>
                    {{ isMoneyVisible ? formattedValue.integer : "$ ***" }}
                </div>
                <div class="tw-text-xs">
                    {{ isMoneyVisible ? formattedValue.decimal : "**" }}
                </div>
            </span>
            <v-btn icon variant="text" @click="toggleMoneyVisibility" class="tw-flex tw-gap-2 tw-items-center">
                <v-icon v-if="!isMoneyVisible" color="white">mdi-eye</v-icon>
                <v-icon v-else color="white">mdi-eye-off</v-icon>
            </v-btn>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    money: {
        type: Number,
        default: 1000.20,
    }
})

const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(value);
}

const integerPart = (formattedValue) => formattedValue.split(',')[0];
const decimalPart = (formattedValue) => formattedValue.split(',')[1];

const formattedValue = computed(() => {
    const value = formatCurrency(props.money);
    return {
        integer: integerPart(value),
        decimal: decimalPart(value)
    };
})

const isMoneyVisible = ref(false);
const toggleMoneyVisibility = () => isMoneyVisible.value = !isMoneyVisible.value;
</script>