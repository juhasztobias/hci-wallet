<template>
    <v-menu v-model="menu" :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ props }">
            <div @click="menu = true">
                <v-text-field v-model:model-value="formattedDate" label="Seleccionar fecha"
                    :label="selectedType === 'Programada' ? 'Banco' : 'Cuenta'" color="primary" v-bind="props"
                    prepend-inner-icon="mdi-calendar" clearable @update:model-value="onChangeText"
                    messages="Para transferir hoy utilizá la transferencia inmediata" :error="!isValidDate"
                    :error-messages="!isValidDate && 'La fecha no es válida'" />
            </div>
        </template>

        <v-date-picker @update:model-value="onUpdateDate" v-model="selectedDate" label="Fecha de transferencia"
            :allowed-dates="allowedDates" density="comfortable" variant="outlined" elevation="2" color="primary"
            hide-header></v-date-picker>
    </v-menu>
</template>

<script setup>
import { ref } from 'vue';
const menu = ref(false);
const formatDate = (date) => new Intl.DateTimeFormat('es-AR', { month: 'numeric', day: 'numeric', year: 'numeric' }).format(date);

const fromFormattedDate = (date) => {
    if (!date) return new Date();
    const [day, month, year] = date.split('/');
    return new Date(year, month - 1, day);
};

const selectedDate = ref(new Date());
const formattedDate = ref(formatDate(selectedDate.value));
const isValidDate = ref(true);

const onChangeText = (date) => {
    const newDate = fromFormattedDate(date);
    const today = new Date();
    if (!(newDate instanceof Date) || newDate <= today) {
        isValidDate.value = false;
        return;
    }

    selectedDate.value = newDate;
    formattedDate.value = formatDate(newDate);
    isValidDate.value = true;
    return;
};
const selectedType = ref('Programada');



const allowedDates = (date) => {
    const today = new Date();
    return date >= today;
}
const onUpdateDate = (date) => {
    formattedDate.value = formatDate(date);
    menu.value = false;
}

defineExpose({
    selectedDate,
    formattedDate,
    isValidDate,
    onChangeText,
    selectedType,
    allowedDates,
    onUpdateDate
})
</script>