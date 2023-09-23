<template>
    <div
        class="flex gap-2 items-center"
        :class="{ 'opacity-50 pointer-events-none': disabled }"
    >
        <div class="flex-0 checkbox" :class="{ 'hidden ': isSwitch }">
            <input
                class="checkboxInputVue"
                type="checkbox"
                :checked="modelValue"
                @change="changeCheckbox"
                :class="{
                    'border-danger-500': status === ValidationStatus.Error,
                    'border-warning-500': status === ValidationStatus.Warning,
                    'border-success-500': status === ValidationStatus.Success,
                }"
            />
        </div>

        <div
            v-if="isSwitch"
            class="flex-0"
            :class="`checkboxSlider ${size}`"
            @click="changeCheckbox(!modelValue)"
        >
            <span :class="sliderClasses"></span>
        </div>

        <div :class="{ 'pt-1': !isSwitch }">
            <InputLabel v-if="label !== null" :label="label" :status="status" />
        </div>
    </div>
</template>

<style>
/* The switch - the box around the slider */
.checkboxSlider.large {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.checkboxSlider.regular {
    position: relative;
    display: inline-block;
    width: 54px;
    height: 31px;
}

.checkboxSlider.small {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 28px;
}

.checkboxSlider.x-small {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 26px;
}

/* The slider */
.sliderButton {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 25px;
    border-width: 1px;
    border-style: solid;
}

.sliderButton.large:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 100%;
}

.sliderButton.small:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 100%;
}

.sliderButton.x-small:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 100%;
}

.sliderButton.regular:before {
    position: absolute;
    content: "";
    height: 23px;
    width: 23px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 100%;
}

.sliderButton.large.isChecked:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.sliderButton.regular.isChecked:before {
    -webkit-transform: translateX(23px);
    -ms-transform: translateX(23px);
    transform: translateX(23px);
}

.sliderButton.small.isChecked:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
}

.sliderButton.x-small.isChecked:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
}
</style>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ButtonColour } from "@/Enum/Button/ButtonColour";
import { ButtonSize } from "@/Enum/Button/ButtonSIze";
import { ValidationStatus } from "@/Enum/ValidationStatus";

import InputLabel from "./InputLabel.vue";

export default defineComponent({
    name: "checkbox-input",
    components: { InputLabel },
    props: {
        modelValue: {
            type: [String, Number, Boolean],
        },
        isSwitch: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: null,
        },
        status: {
            type: String as PropType<ValidationStatus>,
            default: ValidationStatus.Normal,
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: ButtonSize.Regular,
        },
        onColour: {
            type: String as PropType<ButtonColour>,
            default: ButtonColour.Primary,
        },
        offColour: {
            type: String as PropType<ButtonColour>,
            default: ButtonColour.Gray,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        const changeCheckbox = (event: Event | boolean) => {
            if (typeof event === "boolean") {
                emit("update:modelValue", event);
            } else {
                if (event.target) {
                    emit("update:modelValue", event.target.checked);
                }
            }
        };

        const sliderClasses = computed<string>(() => {
            let sliderClass = "sliderButton " + props.size;

            if (props.modelValue == true) {
                sliderClass += ` isChecked bg-${getColourClass(
                    props.onColour
                )}`;
            } else {
                sliderClass += ` bg-${getColourClass(props.offColour)}`;
            }

            switch (props.status) {
                case ValidationStatus.Error:
                    sliderClass += " border-danger-500";
                    break;
                case ValidationStatus.Warning:
                    sliderClass += " border-warning-500";
                    break;
                case ValidationStatus.Success:
                    sliderClass += " border-success-500";
                    break;
            }

            return sliderClass;
        });

        const getColourClass = (colour: String) => {
            if (colour === ButtonColour.Gray) {
                return ButtonColour.Gray + "-300";
            }

            return colour + "-500";
        };

        return { changeCheckbox, sliderClasses, ValidationStatus };
    },
});
</script>
