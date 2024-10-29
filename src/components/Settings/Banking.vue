<template>
    <v-card outlined class="mb-6">
        <v-card-title class="text-h6">Bancaria</v-card-title>
        <v-card-subtitle>Actualiza tus datos bancarios para gestionar pagos de manera segura.</v-card-subtitle>
        <v-card-text>
            <v-text-field label="Tu Alias" :value="alias" @input="$emit('update:alias', $event.target.value)"
                placeholder="sol.cielo.arcoiris" outlined></v-text-field>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    props: {
        alias: {
            type: String,
            required: true, // Optional: use if you want to enforce that the prop is always passed
        },
    },
};
</script>