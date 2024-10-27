<template>
    <div class="tw-flex tw-p-2 tw-gap-2 tw-items-center tw-justify-between">
        <div class="tw-flex tw-flex-col tw-gap-1">
            <span class="tw-text-sm tw-font-semibold">{{ title }}</span>
            <span class="tw-text-sm tw-font-normal">{{ value }}</span>
        </div>
        <v-btn size="small" variant="flat" @click="copyValue" class="tw-flex tw-gap-2 tw-items-center">
            <v-icon>mdi-content-copy</v-icon>
        </v-btn>

        <v-snackbar v-model="snackbar" color="success" timeout="2000">
            <div class="tw-text-sm tw-items-center">
                <v-icon icon="mdi-check-circle-outline" size="24" />
                Copiado!
            </div>
        </v-snackbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    value: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: 'Titulo',
        required: false,
    }
})
const snackbar = ref(false);

const copyValue = () => {
    snackbar.value = true;
    navigator.clipboard.writeText(props.value)
};
</script>