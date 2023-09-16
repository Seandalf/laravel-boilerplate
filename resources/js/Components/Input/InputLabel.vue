<template>
    <label
        class="font-bold font-title"
        :class="{
            'text-deep-black': status === ValidationStatus.Normal,
            'text-danger': status === ValidationStatus.Error,
            'text-warning': status === ValidationStatus.Warning,
            'text-success': status === ValidationStatus.Success,
        }"
    >
        <span v-if="mandatory" class="text-red-500">*</span>
        {{ label }}
    </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ValidationStatus } from "@/Enum/ValidationStatus";

export default defineComponent({
    name: "input-label",
    props: {
        label: {
            type: String,
            required: true,
        },
        status: {
            type: String as PropType<ValidationStatus>,
            default: ValidationStatus.Normal,
        },
        mandatory: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        return { ValidationStatus };
    },
});
</script>
