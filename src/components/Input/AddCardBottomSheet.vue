<template>
    <v-bottom-sheet :value="isOpen" @input="$emit('update:isOpen', $event)">
        <v-card outlined>
            <v-card-title class="text-h6">Añadir Tarjeta de Crédito</v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                    <v-text-field v-model="cardNumber" label="Número de Tarjeta"
                        :rules="[rules.required, rules.cardNumber]" outlined></v-text-field>

                    <v-text-field v-model="cardHolder" label="Nombre del Titular" :rules="[rules.required]"
                        outlined></v-text-field>

                    <v-text-field v-model="expiryDate" label="Fecha de Expiración (MM/AA)"
                        :rules="[rules.required, rules.expiryDate]" outlined></v-text-field>

                    <v-text-field v-model="cvv" label="CVV" :rules="[rules.required, rules.cvv]" outlined
                        type="password"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="submit">Guardar Tarjeta</v-btn>
                <v-btn text @click="close">Cancelar</v-btn>
            </v-card-actions>
        </v-card>

        <!-- Snackbar for success message -->
        <v-snackbar v-model="snackbar" color="green" timeout="3000" @close="close">
            Tarjeta Añadida
        </v-snackbar>
    </v-bottom-sheet>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            valid: false,
            cardNumber: '',
            cardHolder: '',
            expiryDate: '',
            cvv: '',
            snackbar: false, // Snackbar visibility
            rules: {
                required: value => !!value || 'Este campo es requerido.',
                cardNumber: value => (value && value.length === 16) || 'Número de tarjeta inválido.',
                expiryDate: value => (value && /^\d{2}\/\d{2}$/.test(value)) || 'Fecha inválida.',
                cvv: value => (value && value.length === 3) || 'CVV inválido.',
            },
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                // Handle form submission logic here
                console.log('Tarjeta guardada:', {
                    cardNumber: this.cardNumber,
                    cardHolder: this.cardHolder,
                    expiryDate: this.expiryDate,
                    cvv: this.cvv,
                });
                this.snackbar = true; // Show snackbar
                setTimeout(() => {
                    this.close(); // Close the bottom sheet after snackbar timeout
                }, 0); // Match this timeout with the snackbar's timeout
            }
        },
        close() {
            this.$emit('update:isOpen', false); // Emit event to close the bottom sheet
            this.snackbar = false; // Hide snackbar if it's open
        },
    },
};
</script>