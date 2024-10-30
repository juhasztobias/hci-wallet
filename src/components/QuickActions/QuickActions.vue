<template>
    <v-card class="tw-flex tw-flex-col tw-w-full" elevation="1">
        <div class="tw-flex tw-flex-col tw-gap-3 tw-p-2">
            <CreditCard />
            <div class="tw-grid tw-grid-cols-4 tw-gap-1">
                <QuickActionButton title="Ingresar" icon="mdi-cash-multiple" @click="openDepositPage" />
                <QuickActionButton title="Egresar" icon="mdi-cash-minus" @click="() => openTransfer({ type: 'Out' })" />
                <QuickActionButton title="Enviar" icon="mdi-send" @click="openConctactPage" />
                <QuickActionButton title="Servicios" icon="mdi-account-multiple" disabled />
            </div>
        </div>
    </v-card>
</template>

<script>

export default {
    name: 'QuickActions',
    methods: {
        openDepositPage() {
            this.$router.push('/dashboard/deposit');
        },
        openTransfer(params) {
            this.$router.push({
                path: '/dashboard/transfer',
                query: params
            });
        },
        openConctactPage() {
            this.$router.push('/dashboard/contacts');
        }
    }
};
</script>
