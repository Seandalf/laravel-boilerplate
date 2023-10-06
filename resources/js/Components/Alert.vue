<template>
    <div :class="`rounded border shadow p-4 flex gap-4 ` + colourClasses">
        <div class="flex-0">
            <span
                v-if="alertStyle === AlertType.Error"
                class="mdi mdi-alert-circle-outline"
            ></span>
        </div>

        <div v-if="message !== null" class="flex-1">
            {{ message }}
        </div>

        <div v-else>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { AlertType } from "@/Enum/AlertType";

export default defineComponent({
    name: "alert",
    props: {
        alertStyle: {
            type: String as PropType<AlertType>,
            default: AlertType.Info,
        },
        message: {
            type: String,
            default: null,
            required: false,
        },
    },
    setup(props) {
        const colourClasses = computed<string>(() => {
            switch (props.alertStyle) {
                case AlertType.Error:
                    return "border-danger-500 bg-danger-100 text-danger-600";
                case AlertType.Warning:
                    return "border-warning-500 bg-warning-100 text-warning-600";
                case AlertType.Success:
                    return "border-success-500 bg-success-100 text-success-600";
                default:
                    return "border-info-500 bg-info-100 text-info-600";
            }
        });

        return { colourClasses, AlertType };
    },
});
</script>
