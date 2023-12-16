<template>
    <div
        v-if="isOpen"
        class="z-40 fixed inset-0"
        :style="`opacity: ${modalOpacity / 100}`"
    >
        <div class="w-full h-full relative -z-20 flex items-center">
            <div
                class="w-full h-full absolute -z-10"
                :class="{
                    'cursor-pointer': closeOnOverlay,
                    'bg-gray-800/20 backdrop-blur-xs': showOverlay,
                }"
                @click="onClickOverlay"
            ></div>
            <div
                class="w-full md:w-2/3 m-auto bg-white z-50 md:rounded-lg shadow-lg"
                :style="`max-height: ${modalMaxHeight}px`"
            >
                <div
                    class="flex items-center gap-4 p-4 border-b border-gray-100"
                >
                    <div class="flex-1">
                        <h3 class="font-title font-bold text-lg md:text-xl">
                            {{ title }}
                        </h3>
                    </div>

                    <div class="flex-0">
                        <button
                            class="px-1 rounded-full text-gray-800 hover:text-red-600 hover:bg-red-50"
                            @click="closeModal"
                        >
                            <span class="mdi mdi-window-close"></span>
                        </button>
                    </div>
                </div>

                <div
                    class="p-6 border-b border-gray-100 overflow-y-scroll"
                    :style="`max-height: ${contentMaxHeight}px`"
                >
                    <slot name="body" />
                </div>

                <div class="flex justify-end gap-2 p-4">
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import $ from "jquery";

import GenericButton from "@/Components/GenericButton.vue";

export default defineComponent({
    name: "modal",
    components: {
        GenericButton,
    },
    props: {
        title: {
            type: String,
            default: null,
            required: false,
        },
        showOverlay: {
            type: Boolean,
            default: true,
            required: false,
        },
        closeOnOverlay: {
            type: Boolean,
            default: true,
            required: false,
        },
    },
    setup(props) {
        const isOpen = ref<boolean>(false);
        const modalOpacity = ref<Number>(0);
        const opacityTimeout = ref();

        const modalMaxHeight = computed<Number>(() => {
            return window.innerHeight - 100;
        });

        const contentMaxHeight = computed<Number>(() => {
            return modalMaxHeight.value - 120;
        });

        const openModal = () => {
            isOpen.value = true;
            $("body").addClass("modal-open");

            opacityTimeout.value = setInterval(() => {
                if (modalOpacity.value >= 100) {
                    modalOpacity.value = 100;
                    clearInterval(opacityTimeout.value);
                } else {
                    modalOpacity.value = modalOpacity.value + 4;
                }
            }, 1);
        };

        const closeModal = () => {
            opacityTimeout.value = setInterval(() => {
                if (modalOpacity.value <= 0) {
                    modalOpacity.value = 0;
                    clearInterval(opacityTimeout.value);
                    isOpen.value = false;
                } else {
                    modalOpacity.value = modalOpacity.value - 4;
                }
            }, 1);

            $("body").removeClass("modal-open");
        };

        const onClickOverlay = () => {
            if (props.closeOnOverlay) {
                closeModal();
            }
        };

        return {
            openModal,
            closeModal,
            isOpen,
            onClickOverlay,
            modalMaxHeight,
            contentMaxHeight,
            modalOpacity,
        };
    },
});
</script>
