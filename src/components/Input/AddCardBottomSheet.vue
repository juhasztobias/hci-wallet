<template>
    <v-dialog :value="isOpen" @input="$emit('update:isOpen', $event)" max-width="800px">
        <MainCard>
            <template #header>
                <v-card-title class="text-h6">Añadir Tarjeta de Crédito</v-card-title>
            </template>
            <template #content>
                <v-card-text>
                    <v-form ref="form" v-model="valid">
                        <div class="tw-grid tw-grid-cols-[1fr_.5fr_.5fr] tw-gap-4">
                            <v-text-field v-model="cardNumber" label="Número de Tarjeta"
                                placeholder="1234 5678 9012 3456" :rules="[rules.required, rules.cardNumber]" outlined
                                prepend-inner-icon="fa:fab fa-cc-mastercard"></v-text-field>

                            <v-text-field v-model="expiryDate" label="Fecha de Expiración" placeholder="MM/AA"
                                :rules="[rules.required, rules.expiryDate]" outlined></v-text-field>

                            <v-text-field v-model="cvv" label="CVV" placeholder="****"
                                :rules="[rules.required, rules.cvv]" outlined type="password"></v-text-field>
                        </div>
                        <v-text-field placeholder="Juan Perez" v-model="cardHolder" label="Nombre del Titular"
                            :rules="[rules.required]" outlined></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <div class="tw-flex tw-flex-1 tw-justify-end tw-gap-4">
                        <v-btn class="tw-flex-1" text @click="close">Cancelar</v-btn>
                        <v-btn class="tw-flex-1" color="primary" variant="flat" @click="submit">Guardar Tarjeta</v-btn>
                    </div>
                </v-card-actions>
                <!-- Snackbar for success message -->
                <v-snackbar v-model="snackbar" color="green" timeout="3000" @close="close">
                    Tarjeta Añadida
                </v-snackbar>
            </template>
        </MainCard>
    </v-dialog>
</template>

<script>
import MainCard from '../MainCard.vue';

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