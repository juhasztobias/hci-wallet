<template>
    <MainCard>
        <template #header>
            <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                Ingresar dinero
            </h1>
        </template>
        <template #content>
            <div class="tw-p-2">
                <div class="tw-p-1">
                    <h2 class="tw-text-lg tw-font-semibold">Datos de contacto</h2>
                    <CopyValue title="Alias" :value="alias" />
                    <CopyValue title="CVU" :value="cvu" />
                </div>

                <v-btn block @click="shareContactData" color="primary" variant="flat" class="tw-flex-1"
                    prepend-icon="mdi-share-variant">
                    Compartir datos de contacto
                </v-btn>

                <span class="tw-text-sm tw-text-gray-500 tw-mt-4">
                    Para depositar dinero debes transferirte a tu cuenta de Pagozen desde un banco.
                </span>
            </div>

            <v-snackbar v-model="snackbar" color="success" timeout="2000">
                <div class="tw-text-sm tw-items-center">
                    <v-icon icon="mdi-check-circle-outline" size="24" />
                    Copiado!
                </div>
            </v-snackbar>
        </template>
    </MainCard>
</template>

<route lang="yaml">
meta:
    layout: dashboard.layout
</route>

<script setup>
import MainCard from '@/components/MainCard.vue';
const snackbar = ref(false);
const alias = 'juan.pagozen.alias';
const cvu = '123456789';
const shareContactData = () => {
    console.log('Compartir datos de contacto');
    const toCopy = `Hola! Aquí tienes mis datos de contacto:\nAlias: ${alias}\nCVU: ${cvu}`;
    snackbar.value = true;
    navigator.clipboard.writeText(toCopy);
}

</script>