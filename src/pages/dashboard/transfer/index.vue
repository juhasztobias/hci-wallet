<template>
    <main>
        <section>
            <v-card elevation="1" class="tw-w-full tw-p-4">
                <div class="tw-grid tw-py-4 tw-px-4 tw-bg-primary-500">
                    <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                        Realizar transferencia
                    </h1>
                </div>
                <div class="tw-grid tw-py-4 tw-px-4 tw-gap-4">
                    <!-- Monto a transferir, debe figurar el dinero disponible -->
                    <div class="tw-flex tw-flex-col tw-items-center">
                        <MoneyInput v-model="transferAmount" />
                    </div>

                    <!-- Seleccionar contacto, motivo y detalle -->
                    <div class="tw-grid tw-gap-2 tw-grid-cols-3">
                        <v-select v-model="selectedContact" :items="contacts" label="Seleccionar contacto"
                            density="comfortable" variant="outlined" color="primary"
                            prepend-inner-icon="mdi-account-multiple" clearable>
                            <template v-slot:item="{ item }">
                                <v-list-item-title>{{ item.name }} {{ item.lastName }}</v-list-item-title>
                                <v-list-item-subtitle>{{ item.email }}</v-list-item-subtitle>
                            </template>
                        </v-select>

                        <v-select v-model="selectedReason" :items="reasons" label="Motivo" density="comfortable"
                            variant="outlined" color="primary" prepend-inner-icon="mdi-alert-circle-outline"
                            clearable />

                        <v-text-field v-model="selectedDetail" label="Detalle" density="comfortable" variant="outlined"
                            color="primary" />

                        <v-select v-model="selectedType" :items="banks" label="Tipo de transferencia"
                            density="comfortable" variant="outlined" color="primary"
                            :class="selectedBank === 'Programada' ? 'tw-col-span-2' : 'tw-col-span-2'" />
                        <DateInput />
                    </div>

                    <!-- Checkbox seleccionar banco del contacto -->
                    <BigCheckBox title="Cuenta de Pagozen " :subtitle="alias" isSelected />

                    <!-- Boton de enviar -->
                    <div class="tw-flex tw-gap-2 tw-justify-end tw-items-center">
                        <v-btn color="neutral" variant="text" @click="cancel" class="tw-flex-1">
                            Cancelar
                        </v-btn>
                        <v-btn color="primary" variant="flat" @click="continueTransfer" class="tw-flex-1">
                            Continuar
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const alias = 'juan.pagozen.alias';
const transferAmount = ref(0); // Ensure this is defined
const selectedContact = ref(null);
const selectedReason = ref(null);
const selectedDetail = ref('');
const selectedType = ref(null);
const contacts = []; // Populate with actual contacts
const reasons = []; // Populate with actual reasons
const banks = []; // Populate with actual bank types
const router = useRouter();

const cancel = () => {
    router.go(-1); // Go back to the previous page
};

const continueTransfer = () => {
    console.log(transferAmount.value)
    if (transferAmount.value <= 0) {
        alert("Por favor ingrese un monto positivo para transferir");
        return;
    }

    if (transferAmount.value <= 100) {
        // Show an alert or error message
        alert("El monto debe ser mayor a 100");
        return;
    }

    // Si el monto es mayor a 100, continuar con la lógica de transferencia
    console.log('Realizando la transferencia...');
    router.push('/transfers/TransferSummary');
};

</script>

<route lang="yaml">
meta:
    layout: default
</route>