<script setup>
import { useAuthStore } from '@/stores/auth-store';
import { ref } from 'vue';
const items = ref([
    {
        title: 'Inicio',
        icon: 'mdi-home',
        to: '/dashboard'
    },
    {
        title: 'Actividad',
        icon: 'mdi-chart-timeline-variant',
        to: '/dashboard/activities'
    },
    {
        title: 'Contactos',
        icon: 'mdi-account',
        to: '/dashboard/contacts'
    },
    {
        title: 'Configuración',
        icon: 'mdi-cog',
        to: '/dashboard/settings'
    }
])

const version = import.meta.env.VITE_APP_VERSION
const name = import.meta.env.VITE_APP_NAME

const logout = () => {
    useAuthStore().logout();
}
</script>
<template>
    <div
        class="tw-flex tw-flex-col tw-bg-primary-500 tw-text-primary-900 tw-rounded-md tw-p-4 tw-py-4 tw-min-h-[calc(100vh-1rem)]">
        <SidebarUser />

        <ul class="tw-flex tw-flex-col tw-gap-2 tw-flex-1 tw-py-10">
            <li v-for="(item, index) in items">
                <SidebarItem :item="item" />
            </li>
            <li>
                <v-btn color="red" @click="logout" block>Cerrar sesión</v-btn>
            </li>
        </ul>

        <div class="tw-text-sm">
            <img src="@/assets/logo.png" alt="Pagozen-logo" class="tw-size-20 tw-rounded-full tw-mix-blend-multiply" />

            <p class="tw-text-primary-100">Pagozen© Copyright {{ new Date().getFullYear() }}</p>
            <p class="tw-text-primary-200">{{ name }} v{{ version }}</p>
        </div>
    </div>
</template>