<template>
    <div class="rounded-lg shadow-sm bg-white border border-gray-200 w-full">
        <div
            v-if="title !== null && title !== ''"
            class="py-2 px-3 font-title text-primary text-base tracking-wide font-bold bg-gray-50 border-b border-gray-200"
        >
            {{ title }}
        </div>

        <slot name="body" />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
    name: "card",
    props: {
        title: {
            type: String as PropType<string | null>,
            default: null,
        },
    },
});
</script>
