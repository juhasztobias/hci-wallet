<template>
    <div class="tw-flex tw-gap-4 tw-items-center tw-font-semibold tw-text-primary-100 hover:tw-bg-primary-400 tw-p-2 
        tw-rounded-md tw-transition-all tw-duration-200 tw-ease-in-out tw-cursor-pointer">
        <div class="tw-size-10 tw-rounded-full tw-bg-primary-100">

        </div>
        <span class="tw-flex-1">
            Hola, {{ authStore.getAccount().name }}
        </span>
        <v-icon icon="mdi-chevron-right" />
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth-store';
const authStore = useAuthStore();

</script>