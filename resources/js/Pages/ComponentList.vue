<template>
    <div
        class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-primary-400 to-primary-600"
    >
        <div class="w-full max-w-7xl my-10 bg-white p-6 rounded-xl shadow">
            <h3
                class="font-title font-bold text-secondary-600 text-2xl pb-3 border-b border-gray-200 mb-4"
            >
                Buttons
            </h3>

            <h6 class="font-bold text-base text-deep-black mb-3">Solid</h6>

            <div class="flex gap-4 flex-wrap">
                <GenericButton label="Primary" />
                <GenericButton label="Secondary" colour="secondary" />
                <GenericButton label="Success" colour="success" />
                <GenericButton label="Danger" colour="danger" />
                <GenericButton label="Warning" colour="warning" />
                <GenericButton label="Info" colour="info" />
                <GenericButton label="Black" colour="deep-black" />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">Outline</h6>
            <div class="flex gap-4 flex-wrap">
                <GenericButton label="Primary" button-style="outline" />
                <GenericButton
                    label="Secondary"
                    colour="secondary"
                    button-style="outline"
                />
                <GenericButton
                    label="Success"
                    colour="success"
                    button-style="outline"
                />
                <GenericButton
                    label="Danger"
                    colour="danger"
                    button-style="outline"
                />
                <GenericButton
                    label="Warning"
                    colour="warning"
                    button-style="outline"
                />
                <GenericButton
                    label="Info"
                    colour="info"
                    button-style="outline"
                />
                <GenericButton
                    label="Black"
                    colour="deep-black"
                    button-style="outline"
                />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">Link</h6>
            <div class="flex gap-4 flex-wrap">
                <GenericButton label="Primary" button-style="link" />
                <GenericButton
                    label="Secondary"
                    colour="secondary"
                    button-style="link"
                />
                <GenericButton
                    label="Success"
                    colour="success"
                    button-style="link"
                />
                <GenericButton
                    label="Danger"
                    colour="danger"
                    button-style="link"
                />
                <GenericButton
                    label="Warning"
                    colour="warning"
                    button-style="link"
                />
                <GenericButton label="Info" colour="info" button-style="link" />
                <GenericButton
                    label="Black"
                    colour="deep-black"
                    button-style="link"
                />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">
                Suffix Icon
            </h6>

            <div class="flex gap-4 flex-wrap">
                <GenericButton label="Primary" suffix-icon="arrow-right" />
                <GenericButton
                    label="Secondary"
                    colour="secondary"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Success"
                    colour="success"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Danger"
                    colour="danger"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Warning"
                    colour="warning"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Info"
                    colour="info"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Black"
                    colour="deep-black"
                    suffix-icon="arrow-right"
                />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">
                Prefix Icon
            </h6>

            <div class="flex gap-4 flex-wrap">
                <GenericButton label="Primary" prefix-icon="lock" />
                <GenericButton
                    label="Secondary"
                    colour="secondary"
                    prefix-icon="pencil"
                />
                <GenericButton
                    label="Success"
                    colour="success"
                    prefix-icon="check"
                />
                <GenericButton
                    label="Danger"
                    colour="danger"
                    prefix-icon="delete"
                />
                <GenericButton
                    label="Warning"
                    colour="warning"
                    prefix-icon="alert-box"
                />
                <GenericButton
                    label="Info"
                    colour="info"
                    prefix-icon="information"
                />
                <GenericButton
                    label="Black"
                    colour="deep-black"
                    prefix-icon="archive"
                />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">States</h6>

            <div class="flex gap-4 flex-wrap">
                <GenericButton label="Primary" is-loading />
                <GenericButton label="Disabled" colour="secondary" disabled />
            </div>

            <h3
                class="font-title font-bold text-secondary-600 text-2xl pb-3 border-b border-gray-200 my-4 mt-6"
            >
                Select Input
            </h3>

            <h6 class="font-bold text-base text-deep-black my-3">Inputs</h6>

            <div class="flex gap-4 flex-wrap">
                <SelectInput label="Standard" :items="selectItems" />
                <SelectInput
                    label="Filterable"
                    :items="selectItems"
                    filterable
                />
                <SelectInput label="Multiple" :items="selectItems" multiple />
                <SelectInput label="Clearable" :items="selectItems" clearable />
                <SelectInput label="Add New" :items="selectItems" add-new />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">States</h6>

            <div class="flex gap-4 flex-wrap">
                <SelectInput label="Loading" :items="selectItems" is-loading />
                <SelectInput label="Disabled" :items="selectItems" disabled />
                <SelectInput
                    label="Error"
                    :items="selectItems"
                    status="danger"
                />
                <SelectInput
                    label="Warning"
                    :items="selectItems"
                    status="warning"
                />
                <SelectInput
                    label="Success"
                    :items="selectItems"
                    status="success"
                />
            </div>

            <h3
                class="font-title font-bold text-secondary-600 text-2xl pb-3 border-b border-gray-200 my-4 mt-6"
            >
                Text Input
            </h3>

            <h6 class="font-bold text-base text-deep-black my-3">Inputs</h6>

            <div class="flex gap-4 flex-wrap">
                <div>
                    <PlainTextInput label="Standard" />
                </div>
                <div><PlainTextInput label="Prefix" prefix-content="$" /></div>
                <div>
                    <PlainTextInput label="Prefix Icon" prefix-icon="account" />
                </div>
                <div>
                    <PlainTextInput label="Suffix" suffix-content="00" />
                </div>
                <div>
                    <PlainTextInput label="Suffix Icon" suffix-icon="account" />
                </div>
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">States</h6>

            <div class="flex gap-4 flex-wrap">
                <div>
                    <PlainTextInput label="Loading" is-loading />
                </div>
                <div><PlainTextInput label="Disabled" disabled /></div>
                <div><PlainTextInput label="Error" status="danger" /></div>
                <div><PlainTextInput label="Warning" status="warning" /></div>
                <div><PlainTextInput label="Success" status="success" /></div>
            </div>

            <h3
                class="font-title font-bold text-secondary-600 text-2xl pb-3 border-b border-gray-200 my-4 mt-6"
            >
                Checkboxes
            </h3>

            <h6 class="font-bold text-base text-deep-black my-3">Inputs</h6>

            <div class="flex gap-4 flex-wrap">
                <CheckboxInput label="Standard" v-model="isChecked.first" />
                <CheckboxInput
                    label="Large Switch"
                    v-model="isChecked.second"
                    size="large"
                    is-switch
                />
                <CheckboxInput
                    label="Regular Switch"
                    v-model="isChecked.third"
                    size="regular"
                    is-switch
                />
                <CheckboxInput
                    label="Small Switch"
                    v-model="isChecked.fourth"
                    size="small"
                    is-switch
                />
                <CheckboxInput
                    label="X-Small Switch"
                    v-model="isChecked.fifth"
                    size="x-small"
                    is-switch
                />
                <CheckboxInput
                    label="Custom off colour"
                    v-model="isChecked.sixth"
                    size="x-small"
                    :off-colour="ButtonColour.Danger"
                    is-switch
                />
                <CheckboxInput
                    label="Custom on colour"
                    v-model="isChecked.seventh"
                    size="x-small"
                    :on-colour="ButtonColour.Success"
                    is-switch
                />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">Statuses</h6>

            <div class="flex gap-4 flex-wrap">
                <CheckboxInput
                    label="Disabled"
                    v-model="isChecked.eighth"
                    disabled
                />
                <CheckboxInput
                    label="Error"
                    v-model="isChecked.ninth"
                    status="danger"
                />
                <CheckboxInput
                    label="Warning"
                    v-model="isChecked.tenth"
                    status="warning"
                />
                <CheckboxInput
                    label="Success"
                    v-model="isChecked.eleventh"
                    status="success"
                />
                <CheckboxInput
                    label="Disabled"
                    v-model="isChecked.twelfth"
                    size="x-small"
                    is-switch
                    disabled
                />
                <CheckboxInput
                    label="Error"
                    v-model="isChecked.thirteenth"
                    size="x-small"
                    is-switch
                    status="danger"
                />
                <CheckboxInput
                    label="Warning"
                    v-model="isChecked.fourteenth"
                    size="x-small"
                    is-switch
                    status="warning"
                />
                <CheckboxInput
                    label="Success"
                    v-model="isChecked.fifteenth"
                    size="x-small"
                    is-switch
                    status="success"
                />
            </div>

            <h3
                class="font-title font-bold text-secondary-600 text-2xl pb-3 border-b border-gray-200 my-4 mt-6"
            >
                Currency Input
            </h3>

            <h6 class="font-bold text-base text-deep-black my-3">Inputs</h6>

            <div class="flex gap-4 flex-wrap">
                <CurrencyInput label="Standard" />
                <CurrencyInput label="GBP Symbol" symbol="&pound;" />
                <CurrencyInput label="EUR Symbol" symbol="&euro;" />
                <CurrencyInput label="Yen Symbol" symbol="&yen;" />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">States</h6>

            <div class="flex gap-4 flex-wrap">
                <CurrencyInput label="Loading" is-loading />
                <CurrencyInput label="Disabled" disabled />
                <CurrencyInput label="Error" :status="ValidationStatus.Error" />
                <CurrencyInput
                    label="Warning"
                    :status="ValidationStatus.Warning"
                />
                <CurrencyInput
                    label="Success"
                    :status="ValidationStatus.Success"
                />
            </div>

            <h3
                class="font-title font-bold text-secondary-600 text-2xl pb-3 border-b border-gray-200 my-4 mt-6"
            >
                Date Input
            </h3>

            <h6 class="font-bold text-base text-deep-black my-3">Inputs</h6>

            <div class="flex gap-4 flex-wrap"></div>

            <h6 class="font-bold text-base text-deep-black my-3">States</h6>

            <div class="flex gap-4 flex-wrap"></div>

            <h3
                class="font-title font-bold text-secondary-600 text-2xl pb-3 border-b border-gray-200 my-4 mt-6"
            >
                Modals
            </h3>

            <div class="flex gap-4 flex-wrap">
                <GenericButton label="Primary" @click="openDefaultModal" />
            </div>

            <Modal ref="defaultModal">
                <template #footer>
                    <GenericButton
                        :size="ButtonSize.Small"
                        :colour="ButtonColour.Black"
                        :button-style="ButtonStyle.Outline"
                        label="Close"
                        @click="closeDefaultModal"
                    />
                    <GenericButton
                        :size="ButtonSize.Small"
                        :colour="ButtonColour.Black"
                        label="Save"
                        @click="closeDefaultModal"
                    />
                </template>
            </Modal>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

import GenericButton from "@/Components/GenericButton.vue";
import CheckboxInput from "@/Components/Input/CheckboxInput.vue";
import CurrencyInput from "@/Components/Input/CurrencyInput.vue";
import PlainTextInput from "@/Components/Input/PlainTextInput.vue";
import SelectInput from "@/Components/Input/SelectInput.vue";
import Modal from "@/Components/Modal/Modal.vue";
import { ButtonColour } from "@/Enum/Button/ButtonColour";
import { ButtonSize } from "@/Enum/Button/ButtonSIze";
import { ButtonStyle } from "@/Enum/Button/ButtonStyle";
import { ValidationStatus } from "@/Enum/ValidationStatus";

export default defineComponent({
    components: {
        GenericButton,
        PlainTextInput,
        SelectInput,
        CheckboxInput,
        CurrencyInput,
        Modal,
    },
    setup() {
        const defaultModal = ref<typeof Modal>();

        const selectItems = [
            {
                label: "Option 1",
                value: 1,
            },
            {
                label: "Option 2",
                value: 2,
            },
            {
                label: "Option 3",
                value: 3,
            },
            {
                label: "Option 4",
                value: 4,
            },
            {
                label: "Option 5",
                value: 5,
            },
        ];
        const isChecked = reactive<Record<string, boolean>>({
            first: false,
            second: false,
            third: false,
            fourth: false,
            fifth: false,
            sixth: false,
            seventh: false,
            eighth: false,
            ninth: false,
            tenth: false,
            eleventh: false,
            twelfth: false,
            thirteenth: false,
            fourteenth: false,
            fifteenth: false,
        });

        const openDefaultModal = () => {
            if (defaultModal.value) {
                defaultModal.value.openModal();
            }
        };

        const closeDefaultModal = () => {
            if (defaultModal.value) {
                defaultModal.value.closeModal();
            }
        };

        return {
            selectItems,
            isChecked,
            ButtonColour,
            ValidationStatus,
            defaultModal,
            openDefaultModal,
            ButtonSize,
            ButtonStyle,
            closeDefaultModal,
        };
    },
});
</script>
