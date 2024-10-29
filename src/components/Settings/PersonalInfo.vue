<template>
    <v-card outlined class="mb-6">
        <v-card-title class="text-h6">Información Personal</v-card-title>
        <v-card-subtitle>Actualiza tu información personal.</v-card-subtitle>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field label="Nombre" :value="nombre" @input="$emit('update:nombre', $event.target.value)"
                        outlined></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Apellido" :value="apellido"
                        @input="$emit('update:apellido', $event.target.value)" outlined></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-select label="Nacionalidad" :items="nationalities" :value="nationality"
                        @input="$emit('update:nationality', $event.target.value)" outlined></v-select>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        nombre: String,
        apellido: String,
        nationality: String,
        nationalities: Array,
    },
};
</script>

<style scoped>
.v-card {
    background-color: #f9f9f9;
}
</style>