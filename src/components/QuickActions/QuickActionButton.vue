<template>
    <div
        class="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-bg-primary-100 tw-text-primary-500 tw-rounded-lg tw-p-2 tw-cursor-pointer">
        <v-icon :icon="icon" size="24" />
        <span class="tw-text-sm tw-font-semibold">{{ title }}</span>
    </div>
</template>

<script setup>
//

const props = defineProps({
    title: {
        type: String,
        default: 'Titulo',
        required: false,
    },
    icon: {
        type: String,
        default: 'mdi-plus',
        required: false,
    }
})
</script>