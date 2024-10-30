<template>
    <MainCard>
        <template #header>
            <h1 class="tw-text-lg tw-font-semibold tw-text-primary-100">
                Información Personal
            </h1>
            <p class="tw-text-sm tw-text-gray-200">
                Actualiza tus datos personales para mantenernos en comunicación contigo.
            </p>
        </template>
        <template #content>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field label="Nombre" v-model:model-value="nombre"
                        @input="$emit('update:nombre', $event.target.value)" outlined />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Apellido" v-model:model-value="apellido"
                        @input="$emit('update:apellido', $event.target.value)" outlined />
                </v-col>
                <v-col cols="12">
                    <v-select label="Nacionalidad" :items="nationalities" v-model:model-value="nationality"
                        @input="$emit('update:nationality', $event.target.value)" outlined />
                </v-col>
            </v-row>
        </template>
    </MainCard>
</template>

<script>
import MainCard from '../MainCard.vue';

export default {
    props: {
        nombre: String,
        apellido: String,
        nationality: String,
        nationalities: Array,
    },
    data() {
        return {
            nombre: this.nombre,
            apellido: this.apellido,
            nationality: this.nationality,
            nationalities: this.nationalities,
            phoneNumber: this.phoneNumber,
            alias: this.alias,
        }
    }
};
</script>

<style scoped>
.v-card {
    background-color: #f9f9f9;
}
</style>