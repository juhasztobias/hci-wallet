<template>
    <v-card class="tw-w-full" elevation="1">
        <div class="tw-p-2">
            <!-- <div class="tw-flex-grow">
                <qrcode-vue value="qrCodeValue" :size="200" level="H" />
            </div> -->
            <div class="tw-p-1">
                <h2 class="tw-text-lg tw-font-semibold">Datos de contacto</h2>
                <CopyValue title="Alias" :value="alias" />
                <CopyValue title="CVU" :value="cvu" />
            </div>

            <v-btn block @click="shareContactData" color="primary" variant="flat" class="tw-flex-1"
                prepend-icon="mdi-share-variant">
                Compartir datos de contacto
            </v-btn>
        </div>

        <v-snackbar v-model="snackbar" color="success" timeout="2000">
            <div class="tw-text-sm tw-items-center">
                <v-icon icon="mdi-check-circle-outline" size="24" />
                Copiado!
            </div>
        </v-snackbar>
    </v-card>
</template>

<script setup>

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