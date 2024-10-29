<template>
    <div class="tw-flex tw-flex-col tw-items-center tw-text-primary-500">
        <!-- Etiqueta -->
        <slot name="prepend"></slot>
        <!-- <label class="text-center text-xl font-semibold mb-4 text-gray-800">Ingrese el monto</label> -->

        <!-- Campo de entrada -->
        <div class="tw-max-w-fit tw-flex tw-gap-1">
            <!-- Signo de dólar -->
            <span class="tw-text-2xl tw-font-bold tw-self-center">$</span>
            <!-- Input para la parte entera -->
            <span
                class="tw-outline-none tw-font-bold tw-flex-1 tw-px-2 tw-text-4xl tw-text-primary-500 tw-inline-block integer-part"
                contenteditable="true" @input="onIntegerInput" @keydown="onIntegerKeydown" ref="integerInput"
                data-placeholder="0"></span>
            <!-- Input para la parte decimal -->
            <span class="tw-outline-none tw-font-bold tw-px-2 tw-text-xl tw-text-primary-500 tw-inline-block"
                contenteditable="true" @input="onDecimalInput" @keydown="onDecimalKeydown" ref="decimalInput"
                data-placeholder="00"></span>
        </div>

        <!-- Texto secundario -->
        <slot name="append"></slot>
        <!-- <p class="mt-4 text-gray-600 text-base tw-text-primary-300">
            Dinero disponible: <span class="font-semibold">$100</span>
        </p> -->
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            integerPart: '0',
            decimalPart: '00'
        };
    },
    watch: {
        integerPart: 'emitAmount',
        decimalPart: 'emitAmount'
    },
    methods: {
        emitAmount() {
            // Combina integerPart y decimalPart para formar el monto completo
            const amount = parseFloat(`${this.integerPart}.${this.decimalPart}`);
            this.$emit('update:modelValue', amount); // Emite el valor actualizado para v-model
        },
        onIntegerInput(event) {
            let content = event.target.innerText;
            content = content.replace(/\D/g, ''); // Elimina caracteres no numéricos
            this.integerPart = content || '0';
            this.setCursorToEnd(event.target);
        },
        onDecimalInput(event) {
            let content = event.target.innerText;
            content = content.replace(/\D/g, '').slice(0, 2); // Limita a 2 dígitos decimales
            this.decimalPart = content.padEnd(2, '0'); // Asegura que siempre tenga 2 dígitos
            this.setCursorToEnd(event.target);

            if (this.decimalPart.length === 0) {
                this.$refs.integerInput.focus();
                this.setCursorToEnd(this.$refs.integerInput);
                this.setCursorToEnd(this.$refs.integerInput);
            }
        },
        onIntegerKeydown(event) {
            if (event.key === '.' || event.key === ',') {
                event.preventDefault();
                event.preventDefault();
                this.$refs.decimalInput.focus();
                this.setCursorToEnd(this.$refs.decimalInput);
                this.setCursorToEnd(this.$refs.decimalInput);
            }
        },
        onDecimalKeydown(event) {
            if (event.key === 'Backspace' && this.decimalPart.length === 0) {
                event.preventDefault();
                this.$refs.integerInput.focus();
                this.setCursorToEnd(this.$refs.integerInput);
                this.setCursorToEnd(this.$refs.integerInput);
            }
        },
        setCursorToEnd(el) {
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(el);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
            el.focus();
        },
    },
    computed: {
        totalPart() {
            // Parse to number
            return parseFloat(this.integerPart + "." + this.decimalPart);
        }
    }
};
</script>

<style scoped>
[contenteditable]:empty:before {
    content: attr(data-placeholder);
    color: #a0a0a0;
}

[contenteditable]:focus:empty:before {
    content: '';
}

[contenteditable] {
    display: block;
    /* Convertir a bloque en línea */
    max-width: fit-content;
    /* Establecer un ancho mínimo */
    min-height: 2ch;
    /* Establecer una altura mínima */
}
</style>