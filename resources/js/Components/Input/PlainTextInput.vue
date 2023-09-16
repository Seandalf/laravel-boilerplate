<template>
    <div class="mb-1">
        <InputLabel v-if="label !== null" :label="label" :status="status" />
    </div>

    <div
        class="stem__input-group"
        :class="{
            'pointer-events-none opacity-50': disabled,
            'border-gray-300': status === ValidationStatus.Normal,
            'border-danger': status === ValidationStatus.Error,
            'border-warning': status === ValidationStatus.Warning,
            'border-success': status === ValidationStatus.Success,
        }"
    >
        <div
            v-if="prefixIcon"
            class="flex-0 text-xl pr-2"
            :class="{
                'text-gray-300': status === ValidationStatus.Normal,
                'text-danger': status === ValidationStatus.Error,
                'text-warning': status === ValidationStatus.Warning,
                'text-success': status === ValidationStatus.Success,
            }"
        >
            <span :class="`mdi mdi-${prefixIcon}`"></span>
        </div>
        <div
            v-if="prefixContent"
            class="flex-0 text-xl text-gray-400 pr-2 font-bold"
        >
            {{ prefixContent }}
        </div>
        <div class="flex-1">
            <input
                type="text"
                :value="modelValue"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target?.value)"
                class="w-full p-0 m-0 border-0 focus:ring-0 focus:outline-none text-sm"
            />
        </div>
        <div
            v-if="status === ValidationStatus.Error"
            class="flex-0 text-xl pl-2 text-danger"
        >
            <span class="mdi mdi-alert-circle-outline"></span>
        </div>
        <div
            v-if="status === ValidationStatus.Warning"
            class="flex-0 text-xl pl-2 text-warning"
        >
            <span class="mdi mdi-alert-outline"></span>
        </div>
        <div
            v-if="status === ValidationStatus.Success"
            class="flex-0 text-xl pl-2 text-success"
        >
            <span class="mdi mdi-check"></span>
        </div>
        <div v-if="suffixIcon" class="flex-0">
            <span :class="`mdi ${prefixIcon}`"></span>
        </div>
        <div v-if="suffixContent" class="flex-0">
            {{ suffixContent }}
        </div>
        <div v-if="isLoading" class="flex-0">
            <span class="mdi mdi-loading mdi-spin"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ValidationStatus } from "@/Enum/ValidationStatus";

import InputLabel from "./InputLabel.vue";

export default defineComponent({
    name: "plain-text-input",
    components: { InputLabel },
    props: {
        modelValue: {
            type: [String, Number],
        },
        prefixIcon: {
            type: String,
            default: null,
        },
        prefixContent: {
            type: String,
            default: null,
        },
        suffixIcon: {
            type: String,
            default: null,
        },
        suffixContent: {
            type: String,
            default: null,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: Text,
            default: null,
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
    emits: ["update:modelValue"],
    setup() {
        return { ValidationStatus };
    },
});
</script>
