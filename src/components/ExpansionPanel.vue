<template>
    <v-expansion-panels hide-actions elevation="2" class="tw-w-full tw-p-0 tw-bg-primary-100">
        <v-expansion-panel :value="isExpanded" :disabled="!isExpanded">
            <v-expansion-panel-title :class="headerClases">
                <div class="tw-flex tw-gap-2 tw-items-center">
                    <slot name="header"></slot>
                </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <div class="tw-flex tw-flex-col tw-gap-3 tw-p-5">
                    <slot name="content"></slot>
                </div>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
    name: 'ExpansionPanel',
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        togglePanel() {
            this.$emit('update:modelValue', !this.modelValue);
        },
    },
    computed: {
        baseClases() {
            return 'tw-flex tw-flex-col tw-p-5';
        },
        headerClases() {
            return this.baseClases + ' tw-bg-primary-500 tw-text-primary-100';
        },
        isExpanded() {
            return this.isOpen;
        },
    },
};
</script>