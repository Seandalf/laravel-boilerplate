<template>
    <div
        class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-primary-400 to-primary-600"
    >
        <div>
            <Link href="/"> Logo </Link>
        </div>

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Link } from "@inertiajs/vue3";

export default defineComponent({
    name: "guest-layout",
});
</script>
