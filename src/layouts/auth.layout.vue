<template>
    <v-app>
        <v-main class="tw-flex tw-items-center tw-justify-center 
            tw-min-w-[100vw] tw-h-screen tw-bg-gradient-to-r tw-from-primary-400 tw-to-primary-600">
            <v-row class="d-flex justify-center align-center">
                <v-col cols="12" sm="8" md="4">
                    <v-card>
                        <Logo />
                        <v-container>
                            <router-view />
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
    </v-app>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
//
</script>