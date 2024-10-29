<template>
    <v-container class="new-charge-screen" max-width="900">
        <v-card outlined>
            <!-- Header Section -->
            <v-card-title class="title-header text-center">Nuevo cobro</v-card-title>

            <!-- Value Input Section -->
            <v-card-text class="text-center value-section">
                <h3>Ingrese el valor a cobrar</h3>
                <h2 class="amount">$ 0<span class="decimal">00</span></h2>
            </v-card-text>

            <!-- Input Fields Section -->
            <v-row class="input-section" no-gutters>
                <v-col cols="6">
                    <v-text-field label="Nombre del producto o servicio" value="Es una prueba" outlined
                        dense></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-select label="Seleccione el tipo de cobro" :items="paymentTypes" value="Servicio" outlined
                        dense></v-select>
                </v-col>
            </v-row>

            <v-row class="input-section" no-gutters>
                <v-col cols="6">
                    <v-text-field label="Nombre del producto o servicio" value="Es una prueba" outlined
                        dense></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-select label="Seleccione el tipo de cobro" :items="paymentTypes" value="Servicio" outlined
                        dense></v-select>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="Detalle" value="Varios" outlined dense></v-text-field>
                </v-col>
            </v-row>

            <!-- Time Selection Section -->
            <v-card-text>
                <h3>Seleccione el plazo en el que se te acreditará:</h3>
                <v-radio-group v-model="selectedTime" column>
                    <v-radio label="Inmediato" value="inmediato" class="radio-option">
                        <template v-slot:label>
                            <div class="option-label">Inmediato</div>
                            <div class="option-subtext">Se le cobrará una comisión del 5%</div>
                        </template>
                    </v-radio>
                    <v-radio label="En 15 días" value="15d" class="radio-option">
                        <template v-slot:label>
                            <div class="option-label">En 15 días</div>
                            <div class="option-subtext">Se le cobrará un 3% de comisión</div>
                        </template>
                    </v-radio>
                    <v-radio label="En 30 días" value="30d" class="radio-option">
                        <template v-slot:label>
                            <div class="option-label">En 30 días</div>
                            <div class="option-subtext">Se le cobrará un 1% de comisión</div>
                        </template>
                    </v-radio>
                </v-radio-group>
            </v-card-text>

            <!-- Buttons Section -->
            <v-card-actions class="button-section">
                <v-btn outlined color="grey" class="cancel-btn" @click="cancel">Cancelar</v-btn>
                <v-btn color="primary" class="continue-btn" @click="continue">Continuar</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            paymentTypes: ["Servicio", "Producto"],
            selectedTime: "inmediato",
        };
    },
    methods: {
        cancel() {
            console.log("Cancel clicked");
        },
        continue() {
            console.log("Continue clicked");
        },
    },
};
</script>

<style scoped>
.new-charge-screen {
    background-color: #f5f7fa;
    padding: 20px;
}

.title-header {
    background-color: #4285f4;
    color: white;
    padding: 16px;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.value-section h3 {
    font-size: 16px;
    color: #333;
    margin-bottom: 0;
}

.amount {
    color: #4285f4;
    font-size: 36px;
    font-weight: bold;
    margin: 0;
}

.amount .decimal {
    font-size: 24px;
    vertical-align: top;
}

.input-section {
    margin-top: 8px;
}

.radio-option {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
}

.option-label {
    font-weight: bold;
    font-size: 16px;
}

.option-subtext {
    font-size: 14px;
    color: #666;
}

.button-section {
    justify-content: space-between;
    padding: 16px;
}

.cancel-btn {
    color: #666;
}

.continue-btn {
    color: white;
    background-color: #4285f4;
}
</style>