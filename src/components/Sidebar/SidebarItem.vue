<script setup>
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'

    const { item } = defineProps(['item'])
    const route = useRoute();
    const isActive = computed(() => route.path === item.to);

</script>

<template>
    <router-link :to="item.to">
        <div 
            class="tw-bg-primary-500 tw-text-primary-100 hover:tw-bg-primary-400
            tw-font-medium tw-rounded-md tw-px-3 tw-py-2 tw-cursor-pointer tw-flex tw-items-center 
            tw-gap-2 tw-transition-all tw-duration-200 tw-ease-in-out"

            :class="{
                'tw-bg-primary-400': isActive.value,
            }"
        >
            <!-- Example icon -->
            <v-icon>{{ item.icon }}</v-icon>
            <span>{{ item.title }}</span>
        </div>
    </router-link>
</template>