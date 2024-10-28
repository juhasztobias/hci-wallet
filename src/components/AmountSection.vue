<template>
    <div class="amount-section">
        <span class="amount-label">Monto a pagar</span>
        <div class="amount-value">${{ amount.toFixed(2) }}</div>
    </div>
</template>

<script>
export default {
    name: 'AmountSection',
    props: {
        amount: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style scoped>
.amount-section {
    text-align: center;
    margin: 20px 0;
}

.amount-label {
    color: #666;
    font-size: 14px;
}

.amount-value {
    color: #1976D2;
    font-size: 32px;
    font-weight: bold;
}
</style>