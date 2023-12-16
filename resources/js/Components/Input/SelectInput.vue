<template>
    <div
        :id="'select-input-' + randomKey + tabIndex"
        class="relative"
        :tabindex="tabIndex"
        @focusout="handleSelectFocusOut"
    >
        <div class="mb-1">
            <InputLabel v-if="label !== null" :label="label" :status="status" />
        </div>

        <div
            class="stem__input-group"
            style="min-width: 218px"
            :class="{
                'pointer-events-none opacity-50': disabled || isLoading,
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
                class="flex-0 text-base text-gray-400 pr-2 font-bold"
            >
                {{ prefixContent }}
            </div>

            <div class="flex-1 flex flex-wrap gap-1">
                <template v-if="selectedItems.length > 0">
                    <template v-if="multiple">
                        <Chip
                            v-for="(item, index) in selectedItems"
                            :key="'select-dropdown-' + randomKey + index"
                            :content="item"
                            v-on:delete="removeItem(item)"
                        />
                    </template>
                    <template v-else>
                        <span>{{ selectedItems[0].label }}</span>
                    </template>
                </template>
            </div>

            <div
                v-if="clearable && selectedItems.length > 0"
                class="flex-0 text-xl pl-2 text-gray-400 hover:text-danger cursor-pointer"
                @click="clearAllItems"
            >
                <span class="mdi mdi-close-circle-outline"></span>
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

            <div
                v-if="suffixIcon"
                class="flex-0 text-xl pl-2"
                :class="{
                    'text-gray-300': status === ValidationStatus.Normal,
                    'text-danger': status === ValidationStatus.Error,
                    'text-warning': status === ValidationStatus.Warning,
                    'text-success': status === ValidationStatus.Success,
                }"
            >
                <span :class="`mdi mdi-${suffixIcon}`"></span>
            </div>

            <div
                v-if="suffixContent"
                class="flex-0 text-base text-gray-400 pl-2 font-bold"
            >
                {{ suffixContent }}
            </div>

            <div v-if="isLoading" class="flex-0">
                <span class="mdi mdi-loading mdi-spin"></span>
            </div>

            <div
                class="flex-0 text-xl pl-2"
                @click="settings.expanded = !settings.expanded"
            >
                <span
                    class="mdi mdi-chevron-down"
                    :class="{ 'mdi-rotate-180': settings.expanded }"
                ></span>
            </div>
        </div>

        <SelectInputDropdown
            :items="items"
            :expanded="settings.expanded"
            :multiselect="multiple"
            :filter="filterable"
            :addNew="addNew"
            v-on:itemSelected="addItem($event)"
            v-on:closeDropdown="settings.expanded = false"
            v-on:clickedSearch="dropdownSearchClicked"
            v-on:addNew="onAddNew()"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, watch } from "vue";

import { ValidationStatus } from "@/Enum/ValidationStatus";
import ISelectDropdownItem from "@/Interfaces/Components/ISelectDropdownItem";
import ISelectInputSettings from "@/Interfaces/Components/ISelectInputSettings";

import Chip from "../Chip.vue";
import InputLabel from "./InputLabel.vue";
import SelectInputDropdown from "./SelectInputDropdown.vue";

export default defineComponent({
    name: "select-input",
    components: { InputLabel, Chip, SelectInputDropdown },
    props: {
        modelValue: {
            type: [String, Number, Array],
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
        multiple: {
            type: Boolean,
            default: false,
        },
        filterable: {
            type: Boolean,
            default: false,
        },
        addNew: {
            type: Boolean,
            default: false,
        },
        items: {
            type: Array as PropType<ISelectDropdownItem[]>,
            default: [] as ISelectDropdownItem[],
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        onAddNew: {
            type: Function,
            default: () => {},
        },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        const randomKey = Math.floor(Math.random() * 100000);
        const closeDropdownTimeout = ref<number>(0);
        const isManagingFocus = ref<boolean>(false);
        const tabIndex = Math.floor(Math.random() * 10000000);
        const selectedItems = ref<ISelectDropdownItem[]>(
            [] as ISelectDropdownItem[]
        );
        const settings = reactive<ISelectInputSettings>({
            expanded: false,
            filter: "",
        });

        const addItem = (item: ISelectDropdownItem) => {
            if (props.multiple === false) {
                selectedItems.value = [] as ISelectDropdownItem[];
            }

            selectedItems.value.push(item);
        };

        const removeItem = (item: ISelectDropdownItem) => {
            const itemIndex = selectedItems.value.indexOf(item);
            selectedItems.value.splice(itemIndex, 1);
        };

        const clearAllItems = () => {
            selectedItems.value = [] as ISelectDropdownItem[];
        };

        watch(selectedItems, () => {
            let emitValue;
            if (selectedItems.value.length === 0) {
                emit("update:modelValue", null);
                return;
            }

            if (props.multiple) {
                emitValue = [] as Array<string | number | object>;
                for (const item of selectedItems.value) {
                    emitValue.push(item.value);
                }

                emit("update:modelValue", emitValue);
            } else {
                emit("update:modelValue", selectedItems.value[0].value);
            }
        });

        const handleSelectFocusOut = () => {
            isManagingFocus.value = false;
            closeDropdownTimeout.value = setTimeout(() => {
                if (isManagingFocus.value === false) {
                    settings.expanded = false;
                }
            }, 100);
        };

        const dropdownSearchClicked = () => {
            isManagingFocus.value = true;
            settings.expanded = true;
        };

        return {
            ValidationStatus,
            settings,
            addItem,
            selectedItems,
            removeItem,
            clearAllItems,
            tabIndex,
            handleSelectFocusOut,
            dropdownSearchClicked,
            isManagingFocus,
            randomKey,
        };
    },
});
</script>
