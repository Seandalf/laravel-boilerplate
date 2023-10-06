<template>
    <div>
        <PlainTextInput
            :label="label"
            :prefix-content="symbol"
            :keypressFunction="onlyCurrency"
            :isLoading="isLoading"
            :disabled="disabled"
            :status="status"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ValidationStatus } from "@/Enum/ValidationStatus";
import { onlyCurrency } from "@/Helpers/MoneyHelpers";

import PlainTextInput from "./PlainTextInput.vue";

export default defineComponent({
    name: "currency-input",
    components: { PlainTextInput },
    props: {
        symbol: {
            type: String,
            default: "$",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String as PropType<ValidationStatus>,
            default: ValidationStatus.Normal,
        },
        label: {
            type: String,
            default: null,
        },
    },
    setup() {
        return { onlyCurrency };
    },
});
</script>
