<template>
    <v-bottom-sheet :value="isOpen" @input="$emit('update:isOpen', $event)" class="credit-card-bottom-sheet">
        <v-card outlined class="credit-card-form">
            <v-card-title class="text-h6 credit-card-title">Añadir Tarjeta de Crédito</v-card-title>
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
            <v-card-actions class="credit-card-actions">
                <v-btn color="primary" @click="submit" class="save-button">Guardar Tarjeta</v-btn>
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
                console.log('Tarjeta guardada:', {
                    cardNumber: this.cardNumber,
                    cardHolder: this.cardHolder,
                    expiryDate: this.expiryDate,
                    cvv: this.cvv,
                });
                this.snackbar = true; // Show snackbar
                setTimeout(() => {
                    this.close(); // Close the bottom sheet after snackbar timeout
                }, 3000);
            }
        },
        close() {
            this.$emit('update:isOpen', false); // Emit event to close the bottom sheet
            this.snackbar = false; // Hide snackbar if it's open
        },
    },
};
</script>

<style scoped>
.credit-card-bottom-sheet {
    background-color: rgba(0, 0, 0, 0.3);
}

.credit-card-title {
    color: #4A4A4A;
    font-weight: bold;
    text-align: center;
}

.credit-card-actions {
    display: flex;
    justify-content: space-between;
    padding: 16px;
}

.save-button {
    color: #fff;
    background-color: #007bff;
}

.save-button:hover {
    background-color: #0056b3;
}
</style>