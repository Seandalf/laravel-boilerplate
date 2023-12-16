<template>
    <div>
        <div>
            <div class="mb-1">
                <InputLabel
                    v-if="label !== null"
                    :label="label"
                    :status="status"
                />
            </div>

            <div
                class="stem__input-group"
                :class="{
                    'pointer-events-none opacity-50': disabled || isLoading,
                    'border-gray-300':
                        status === ValidationStatus.Normal && !hasInvalidDate,
                    'border-danger':
                        status === ValidationStatus.Error || hasInvalidDate,
                    'border-warning': status === ValidationStatus.Warning,
                    'border-success': status === ValidationStatus.Success,
                }"
            >
                <div
                    class="flex-1 grid grid-cols-3 divide-x divide-solid"
                    :class="{
                        'divide-danger':
                            status === ValidationStatus.Error || hasInvalidDate,
                    }"
                >
                    <div class="col-span-1 text-center">
                        <input
                            ref="dayInput"
                            type="text"
                            class="w-full p-0 m-0 border-0 focus:ring-0 focus:outline-none text-sm text-center"
                            @keypress="onlyDayField"
                            @blur="validateDateField"
                            @focusin="focusInDate"
                            placeholder="DD"
                        />
                    </div>
                    <div class="col-span-1 text-center">
                        <input
                            ref="monthInput"
                            type="text"
                            class="w-full p-0 m-0 border-0 focus:ring-0 focus:outline-none text-sm text-center"
                            @keypress="onlyMonthField"
                            @blur="validateDateField"
                            @focusin="focusInDate"
                            placeholder="MM"
                        />
                    </div>
                    <div class="col-span-1 text-center">
                        <input
                            ref="yearInput"
                            type="text"
                            class="w-full p-0 m-0 border-0 focus:ring-0 focus:outline-none text-sm text-center"
                            @keypress="onlyYearField"
                            @blur="validateDateField"
                            @focusin="focusInDate"
                            placeholder="YYYY"
                        />
                    </div>
                </div>
                <div
                    v-if="status === ValidationStatus.Error || hasInvalidDate"
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
                <div v-if="isLoading" class="flex-0">
                    <span class="mdi mdi-loading mdi-spin"></span>
                </div>
            </div>
        </div>

        <div
            v-if="
                (status === ValidationStatus.Error && errorMessage !== null) ||
                hasInvalidDate
            "
            class="text-red-600 mt-1"
        >
            <span v-if="hasInvalidDate">Please enter a valid date</span>
            <span v-else>{{ errorMessage }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import moment from "moment";

import { ValidationStatus } from "@/Enum/ValidationStatus";
import {
    onlyDayField,
    onlyMonthField,
    onlyYearField,
} from "@/Helpers/DateHelpers";

import { isDateValid } from "../../Helpers/DateHelpers";
import InputLabel from "./InputLabel.vue";

export default defineComponent({
    name: "date-input",
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
            type: String,
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
        type: {
            type: String,
            default: "text",
        },
        errorMessage: {
            type: [String],
            default: null,
            required: false,
        },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        const dayInput = ref<HTMLInputElement>();
        const monthInput = ref<HTMLInputElement>();
        const yearInput = ref<HTMLInputElement>();
        const hasInvalidDate = ref<boolean>(false);

        const focusInDate = () => {
            hasInvalidDate.value = false;
        };

        const validateDateField = () => {
            hasInvalidDate.value = false;
            if (!dayInput.value || !monthInput.value || !yearInput.value) {
                return;
            }

            if (
                isDateValid(
                    dayInput.value.value,
                    monthInput.value.value,
                    yearInput.value.value
                )
            ) {
                updateModelValue();
                return;
            }

            hasInvalidDate.value = true;
        };

        const updateModelValue = () => {
            let dayValue = "01";
            let monthValue = "01";
            let yearValue = moment().year().toString();

            if (dayInput && dayInput.value) {
                dayValue = dayInput.value.value;
            }

            if (monthInput && monthInput.value) {
                monthValue = monthInput.value.value;
            }

            if (yearInput && yearInput.value) {
                yearValue = yearInput.value.value;
            }

            emit("update:modelValue", `${yearValue}-${monthValue}-${dayValue}`);
        };

        return {
            ValidationStatus,
            onlyDayField,
            onlyMonthField,
            onlyYearField,
            validateDateField,
            hasInvalidDate,
            dayInput,
            monthInput,
            yearInput,
            focusInDate,
        };
    },
});
</script>
