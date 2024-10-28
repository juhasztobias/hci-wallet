<template>
    <div class="flex flex-col items-center">
        <!-- Etiqueta -->
        <label class="text-center text-xl font-semibold mb-4 text-gray-800">Ingrese el monto</label>

        <!-- Campo de entrada -->
        <div class="tw-max-w-72 tw-flex tw-gap-1">
            <!-- Signo de dólar -->
            <span class="tw-text-2xl">$</span>
            <!-- Input para la parte entera -->
            <span class="tw-outline-none tw-flex-1 tw-px-2 tw-text-4xl tw-text-gray-800" contenteditable="true"
                @input="onIntegerInput" @keydown="onIntegerKeydown" ref="integerInput" data-placeholder="0"></span>

            <!-- Punto decimal -->
            <span class="tw-text-2xl tw-text-gray-800">.</span>

            <!-- Input para la parte decimal -->
            <span class="tw-outline-none tw-px-2 tw-text-2xl tw-text-gray-800" contenteditable="true"
                @input="onDecimalInput" @keydown="onDecimalKeydown" ref="decimalInput" data-placeholder="00"></span>
        </div>

        <!-- Texto secundario -->
        <p class="mt-4 text-gray-600 text-base">
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
                this.setCursorToEnd(this.$refs.integerInput); // Asegurar que el cursor esté al final
            }
        },
        onIntegerKeydown(event) {
            if (event.key === '.' || event.key === ',') {
                event.preventDefault(); // Evitar que el carácter se agregue al input
                this.$refs.decimalInput.focus();
                this.setCursorToEnd(this.$refs.decimalInput); // Asegurar que el cursor esté al final
            }
        },
        onDecimalKeydown(event) {
            if (event.key === 'Backspace' && this.decimalPart.length === 0) {
                // Si la parte decimal está vacía y se presiona Backspace, regresar el foco a la parte entera
                event.preventDefault();
                this.$refs.integerInput.focus();
                this.setCursorToEnd(this.$refs.integerInput); // Asegurar que el cursor esté al final
            }
        },
        setCursorToEnd(el) {
            // Mover el cursor al final del contenido
            const range = document.createRange();
            const sel = window.getSelection();
            range.selectNodeContents(el);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
            // Asegurar que el elemento esté enfocado
            el.focus();
        },
    },
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
    min-width: 0.5em;
}
</style>