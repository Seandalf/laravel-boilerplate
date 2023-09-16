<template>
    <button
        :type="type"
        :class="buttonClasses"
        :disabled="disabled || isLoading"
    >
        <template v-if="isLoading">
            <div class="flex-1 flex items-center justify-center gap-3">
                <div class="flex-0">
                    {{ loadingText }}
                </div>
                <div class="flex-0">
                    <span class="mdi mdi-loading mdi-spin"></span>
                </div>
            </div>
        </template>

        <template v-else>
            <div
                v-if="prefixIcon !== null"
                :class="{
                    'flex-1': label === null && suffixIcon === null,
                    'flex-0': label !== null || suffixIcon !== null,
                }"
            >
                <span :class="`mdi mdi-${prefixIcon}`"></span>
            </div>

            <div
                v-if="label !== null"
                class="flex-1 font-title font-bold tracking-wide"
            >
                {{ label }}
            </div>

            <div
                v-if="suffixIcon !== null"
                :class="{
                    'flex-1': label === null && prefixIcon === null,
                    'flex-0': label !== null || prefixIcon !== null,
                }"
            >
                <span :class="`mdi mdi-${suffixIcon}`"></span>
            </div>
        </template>
    </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ButtonColour } from "@/Enum/Button/ButtonColour";
import { ButtonSize } from "@/Enum/Button/ButtonSIze";
import { ButtonStyle } from "@/Enum/Button/ButtonStyle";

export default defineComponent({
    name: "generic-button",
    props: {
        label: {
            type: String,
            default: null,
            required: false,
        },
        buttonStyle: {
            type: String as PropType<ButtonStyle>,
            default: ButtonStyle.Solid,
            required: false,
        },
        colour: {
            type: String as PropType<ButtonColour>,
            default: ButtonColour.Primary,
            required: false,
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: ButtonSize.Regular,
            required: false,
        },
        prefixIcon: {
            type: String,
            default: null,
            required: false,
        },
        suffixIcon: {
            type: String,
            default: null,
            required: false,
        },
        isLoading: {
            type: Boolean,
            default: false,
            required: false,
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false,
        },
        type: {
            type: String,
            default: "button",
            required: false,
        },
        fullWidth: {
            type: Boolean,
            default: false,
            required: false,
        },
        loadingText: {
            type: String,
            default: "Loading...",
            required: false,
        },
    },
    setup(props) {
        /**
         * Gets the structural size classes based on the button size
         */
        const sizeClasses = computed<string>(() => {
            switch (props.size) {
                case ButtonSize.Small:
                    return "text-sm px-2 py-1";
                case ButtonSize.Regular:
                    return "text-base px-3 py-2";
                case ButtonSize.Large:
                    return "text-lg px-4 py-3";
            }
        });

        const colourClasses = computed<string>(() => {
            let backgroundColor = "";
            let backgroundHoverColour = "";
            let borderColour = "";
            let borderHoverColour = "";
            let textColour = "";
            let textHoverColour = "";

            switch (props.buttonStyle) {
                case ButtonStyle.Solid:
                    if (props.colour === ButtonColour.Black) {
                        backgroundColor = borderColour = `${props.colour}`;
                        backgroundHoverColour = borderHoverColour = "gray-700";
                        textColour = textHoverColour = "white";
                    } else {
                        backgroundColor = borderColour = `${props.colour}-500`;
                        backgroundHoverColour =
                            borderHoverColour = `${props.colour}-600`;
                        textColour = textHoverColour = "white";
                    }
                    break;
                case ButtonStyle.Link:
                    if (props.colour === ButtonColour.Black) {
                        backgroundColor = backgroundHoverColour = "white";
                        borderColour = textColour = `${props.colour}`;
                        borderHoverColour = textHoverColour = "gray-700";
                    } else {
                        backgroundColor = backgroundHoverColour = "white";
                        borderColour = textColour = `${props.colour}-500`;
                        borderHoverColour =
                            textHoverColour = `${props.colour}-600`;
                    }
                    break;
                case ButtonStyle.Outline:
                    if (props.colour === ButtonColour.Black) {
                        backgroundColor = "white";
                        backgroundHoverColour = "gray-100";
                        borderColour = textColour = `${props.colour}`;
                        borderHoverColour = textHoverColour = "gray-700";
                    } else {
                        backgroundColor = "white";
                        backgroundHoverColour = `${props.colour}-50`;
                        borderColour = textColour = `${props.colour}-500`;
                        borderHoverColour =
                            textHoverColour = `${props.colour}-600`;
                    }
                    break;
            }

            // Override the border colours to always be white
            if (props.buttonStyle === ButtonStyle.Link) {
                borderColour = "transparent hover:underline";
                borderHoverColour = "transparent";
            }

            return (
                `bg-${backgroundColor} border-${borderColour} text-${textColour} ` +
                `hover:bg-${backgroundHoverColour} hover:border-${borderHoverColour} hover:text-${textHoverColour}`
            );
        });

        const buttonClasses = computed<string>(() => {
            let classes =
                "border rounded disabled:opacity-50 disabled:pointer-events-none flex gap-2 items-center transition";
            classes += ` ${sizeClasses.value} ${colourClasses.value}`;

            if (props.fullWidth) {
                classes += " w-full";
            }

            return classes;
        });

        return { sizeClasses, colourClasses, buttonClasses };
    },
});
</script>
