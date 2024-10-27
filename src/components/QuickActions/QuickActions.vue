<template>
    <v-card class="tw-flex tw-flex-col tw-w-full" elevation="1">
        <div class="tw-flex tw-flex-col tw-gap-3 tw-p-2">
            <CreditCard />
            <div class="tw-grid tw-grid-cols-4 tw-gap-1">
                <QuickActionButton title="Ingresar" icon="mdi-cash-multiple" />
                <QuickActionButton title="Egresar" icon="mdi-cash-minus" />
                <QuickActionButton title="Enviar" icon="mdi-send" />
                <QuickActionButton title="Servicios" icon="mdi-account-multiple" />
            </div>
        </div>
    </v-card>
</template>
