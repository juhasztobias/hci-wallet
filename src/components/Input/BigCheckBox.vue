<template>
    <div @click="onSelect"
        class="tw-p-4 tw-bg-primary-100 tw-cursor-pointer hover:tw-bg-primary-100 active:tw-bg-primary-200 tw-border tw-border-primary-500 tw-rounded-lg tw-flex tw-justify-between tw-items-center tw-transition-all tw-duration-500 tw-ease-in-out">
        <div class="tw-flex tw-gap-2 tw-items-center">
            <div>
                <!-- Logo -->
                <img src="@/assets/logo.png" alt="Pagozen-logo"
                    class="tw-size-10 tw-rounded-full tw-mix-blend-multiply" />
            </div>
            <div>
                <h1 class="tw-text-lg tw-font-semibold tw-text-primary-500">
                    {{ title }}
                </h1>
                <p class="tw-text-sm tw-text-primary-500">
                    {{ subtitle }}
                </p>
            </div>
        </div>
        <div>
            <v-icon v-if="!isSelected" color="primary">mdi-circle-outline</v-icon>
            <v-icon v-else color="primary">mdi-check-circle-outline</v-icon>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

// export default {
//     props: {
//         title: {
//             type: String,
//             required: true,
//         },
//         subtitle: {
//             type: String,
//             required: true,
//         },
//         icon: {
//             type: String,
//             required: false,
//         },
//         isSelected: {
//             type: Boolean,
//             required: false,
//         },
//     },
// };
const isSelected = ref(false);

const onSelect = () => isSelected.value = !isSelected.value;
</script>
