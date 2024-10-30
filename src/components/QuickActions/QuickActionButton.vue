<template>
    <div class="tw-flex tw-flex-col tw-gap-2 tw-items-center tw-bg-primary-100 tw-text-primary-500 tw-rounded-lg tw-p-2 tw-cursor-pointer hover:tw-bg-primary-200 tw-transition-all tw-duration-500 tw-ease-in-out"
        :class="disabled && 'tw-cursor-not-allowed tw-opacity-75'">
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
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    }
})
</script>