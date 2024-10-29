<template>
    <div class="details-section">
        <div class="detail-item">
            <span class="detail-title">Producto</span>
            <span class="detail-info">{{ product }}</span>
        </div>
        <div class="detail-item">
            <span class="detail-title">Detalles</span>
            <span class="detail-info">{{ details }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsSection',
    props: {
        product: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.details-section {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.detail-item {
    text-align: center;
}

.detail-title {
    color: #333;
    font-weight: bold;
    display: block;
}

.detail-info {
    color: #666;
}
</style>