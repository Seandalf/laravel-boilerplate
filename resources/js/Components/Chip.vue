<template>
    <div
        class="rounded-full bg-gray-200 px-2 py-1 text-xs flex align-items-center gap-1"
    >
        <div
            class="flex-0 cursor-pointer hover:text-red-500"
            @click="$emit('delete', content)"
        >
            <span class="mdi mdi-close-circle-outline"></span>
        </div>

        <div class="font-sans pointer-events-none">
            {{ content.label }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import ISelectDropdownItem from "@/Interfaces/Components/ISelectDropdownItem";

export default defineComponent({
    name: "select-chip",
    props: {
        content: {
            type: Object as PropType<ISelectDropdownItem>,
            default: null,
        },
    },
    emits: ["delete"],
});
</script>
