<template>
    <div class="tw-flex tw-flex-col tw-items-center tw-text-primary-500">
        <!-- Etiqueta -->
        <label class="text-center text-xl font-semibold mb-4 text-gray-800">Ingrese el monto</label>

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
        <p class="mt-4 text-gray-600 text-base tw-text-primary-300">
            Dinero disponible: <span class="font-semibold">$100</span>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            integerPart: '',
            decimalPart: '',
        };
    },
    methods: {
        onIntegerInput(event) {
            let content = event.target.innerText;
            content = content.replace(/\D/g, '');
            event.target.innerText = content;
            this.integerPart = content;
            this.setCursorToEnd(event.target);
        },
        onDecimalInput(event) {
            let content = event.target.innerText;
            content = content.replace(/\D/g, '').slice(0, 2);
            event.target.innerText = content;
            this.decimalPart = content;
            this.setCursorToEnd(event.target);

            // Si la parte decimal está vacía, regresar el foco a la parte entera
            if (this.decimalPart.length === 0) {
                this.$refs.integerInput.focus();
                this.setCursorToEnd(this.$refs.integerInput);
            }
        },
        onIntegerKeydown(event) {
            if (event.key === '.' || event.key === ',') {
                event.preventDefault();
                this.$refs.decimalInput.focus();
                this.setCursorToEnd(this.$refs.decimalInput);
            }
        },
        onDecimalKeydown(event) {
            if (event.key === 'Backspace' && this.decimalPart.length === 0) {
                event.preventDefault();
                this.$refs.integerInput.focus();
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
/* Placeholder para elementos contenteditable */
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