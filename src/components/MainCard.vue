<template>
    <v-card elevation="1" class="tw-w-full tw-p-0">
        <div :class="headerClases">
            <slot name="header"></slot>
        </div>
        <div class="tw-flex tw-flex-col tw-gap-3 tw-p-5">
            <slot name="content"></slot>
        </div>
    </v-card>
</template>

<script setup>

import { computed } from 'vue';
const props = defineProps({
    type: {
        type: String,
        default: 'primary',
        validator: (value) => ['gray', 'primary', 'danger', 'success'].includes(value)
    }
})
const baseClases = "tw-flex tw-flex-col tw-p-5"
const headerClases = computed(() => {
    switch (props.type) {
        case 'gray':
            return baseClases + " tw-bg-gray-500 tw-text-gray-100";
        case 'primary':
            return baseClases + " tw-bg-primary-500 tw-text-primary-100";
        case 'danger':
            return baseClases + " tw-bg-red-500 tw-text-red-100";
        case 'success':
            return baseClases + " tw-bg-green-500 tw-text-green-100";
    }
})

</script>