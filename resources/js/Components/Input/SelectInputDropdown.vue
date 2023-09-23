<template>
    <div
        class="absolute w-full max-h-[200px] rounded-b border-b border-l border-r border-gray-100 shadow bg-white flex flex-col z-50"
        :class="{ hidden: !expanded }"
    >
        <div
            v-if="filter || addNew"
            class="w-full bg-gray-100 border-b border-gray-150 p-2"
        >
            <PlainTextInput
                v-model="filterValue"
                prefixIcon="magnify"
                @focusin="$emit('clickedSearch')"
            />
        </div>

        <div class="flex flex-col overflow-y-scroll flex-1">
            <div
                v-for="(item, index) in itemList"
                :key="'dropdown-item-' + randomKey + index"
                class="p-3 hover:bg-primary-50 cursor-pointer"
                @click="selectItem(item)"
            >
                <span class="pointer-events-none">{{ item.label }}</span>
            </div>
            <div
                v-if="addNew && !isEmptyString(filterValue)"
                class="p-3 hover:bg-primary-50 cursor-pointer"
            >
                <span class="pointer-events-none">Add '{{ filterValue }}'</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import PlainTextInput from "@/Components/Input/PlainTextInput.vue";
import { isEmptyString } from "@/Helpers/TextHelpers";
import ISelectDropdownItem from "@/Interfaces/Components/ISelectDropdownItem";

export default defineComponent({
    props: {
        items: {
            type: Array as PropType<ISelectDropdownItem[]>,
            default: [] as ISelectDropdownItem[],
        },
        expanded: {
            type: Boolean,
            default: false,
        },
        multiselect: {
            type: Boolean,
            default: false,
        },
        filter: {
            type: Boolean,
            default: false,
        },
        addNew: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["itemSelected", "closeDropdown", "clickedSearch", "addNew"],
    setup(props, { emit }) {
        const randomKey = Math.floor(Math.random() * 100000);
        const filterValue = ref<string>("");
        const itemList = computed<ISelectDropdownItem[]>(() => {
            if (filterValue.value === "") {
                return props.items;
            }
            return props.items.filter((item) => {
                if (item.label.includes(filterValue.value)) {
                    return true;
                }
                if (
                    typeof item.value === "number" &&
                    item.value == filterValue.value
                ) {
                    return true;
                }
                if (
                    typeof item.value === "string" &&
                    item.value.includes(filterValue.value)
                ) {
                    return true;
                }
                if (typeof item.value === "object") {
                    for (const prop in item.value) {
                        if (item.value[prop].includes(filterValue.value)) {
                            return true;
                        }
                    }
                }
                return false;
            });
        });
        const selectItem = (item: ISelectDropdownItem) => {
            emit("itemSelected", item);
            if (props.multiselect === false) {
                emit("closeDropdown");
            }
        };
        return { selectItem, filterValue, itemList, randomKey, isEmptyString };
    },
    components: { PlainTextInput },
});
</script>
