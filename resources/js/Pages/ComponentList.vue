<template>
    <div
        class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-primary-500 to-secondary-500"
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
                <GenericButton
                    label="Secondary"
                    :colour="ButtonColour.Secondary"
                />
                <GenericButton label="Success" :colour="ButtonColour.Success" />
                <GenericButton label="Danger" :colour="ButtonColour.Danger" />
                <GenericButton label="Warning" :colour="ButtonColour.Warning" />
                <GenericButton label="Info" :colour="ButtonColour.Info" />
                <GenericButton label="Black" :colour="ButtonColour.Black" />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">Outline</h6>
            <div class="flex gap-4 flex-wrap">
                <GenericButton
                    label="Primary"
                    :buttonStyle="ButtonStyle.Outline"
                />
                <GenericButton
                    label="Secondary"
                    :colour="ButtonColour.Secondary"
                    :buttonStyle="ButtonStyle.Outline"
                />
                <GenericButton
                    label="Success"
                    :colour="ButtonColour.Success"
                    :buttonStyle="ButtonStyle.Outline"
                />
                <GenericButton
                    label="Danger"
                    :colour="ButtonColour.Danger"
                    :buttonStyle="ButtonStyle.Outline"
                />
                <GenericButton
                    label="Warning"
                    :colour="ButtonColour.Warning"
                    :buttonStyle="ButtonStyle.Outline"
                />
                <GenericButton
                    label="Info"
                    :colour="ButtonColour.Info"
                    :buttonStyle="ButtonStyle.Outline"
                />
                <GenericButton
                    label="Black"
                    :colour="ButtonColour.Black"
                    :buttonStyle="ButtonStyle.Outline"
                />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">Link</h6>
            <div class="flex gap-4 flex-wrap">
                <GenericButton
                    label="Primary"
                    :buttonStyle="ButtonStyle.Link"
                />
                <GenericButton
                    label="Secondary"
                    :colour="ButtonColour.Secondary"
                    :buttonStyle="ButtonStyle.Link"
                />
                <GenericButton
                    label="Success"
                    :colour="ButtonColour.Success"
                    :buttonStyle="ButtonStyle.Link"
                />
                <GenericButton
                    label="Danger"
                    :colour="ButtonColour.Danger"
                    :buttonStyle="ButtonStyle.Link"
                />
                <GenericButton
                    label="Warning"
                    :colour="ButtonColour.Warning"
                    :buttonStyle="ButtonStyle.Link"
                />
                <GenericButton
                    label="Info"
                    :colour="ButtonColour.Info"
                    :buttonStyle="ButtonStyle.Link"
                />
                <GenericButton
                    label="Black"
                    :colour="ButtonColour.Black"
                    :buttonStyle="ButtonStyle.Link"
                />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">
                Suffix Icon
            </h6>

            <div class="flex gap-4 flex-wrap">
                <GenericButton label="Primary" suffix-icon="arrow-right" />
                <GenericButton
                    label="Secondary"
                    :colour="ButtonColour.Secondary"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Success"
                    :colour="ButtonColour.Success"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Danger"
                    :colour="ButtonColour.Danger"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Warning"
                    :colour="ButtonColour.Warning"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Info"
                    :colour="ButtonColour.Info"
                    suffix-icon="arrow-right"
                />
                <GenericButton
                    label="Black"
                    :colour="ButtonColour.Black"
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
                    :colour="ButtonColour.Secondary"
                    prefix-icon="pencil"
                />
                <GenericButton
                    label="Success"
                    :colour="ButtonColour.Success"
                    prefix-icon="check"
                />
                <GenericButton
                    label="Danger"
                    :colour="ButtonColour.Danger"
                    prefix-icon="delete"
                />
                <GenericButton
                    label="Warning"
                    :colour="ButtonColour.Warning"
                    prefix-icon="alert-box"
                />
                <GenericButton
                    label="Info"
                    :colour="ButtonColour.Info"
                    prefix-icon="information"
                />
                <GenericButton
                    label="Black"
                    :colour="ButtonColour.Black"
                    prefix-icon="archive"
                />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">States</h6>

            <div class="flex gap-4 flex-wrap">
                <GenericButton label="Primary" is-loading />
                <GenericButton
                    label="Disabled"
                    :colour="ButtonColour.Secondary"
                    disabled
                />
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
                    :status="ValidationStatus.Error"
                />
                <SelectInput
                    label="Warning"
                    :items="selectItems"
                    :status="ValidationStatus.Warning"
                />
                <SelectInput
                    label="Success"
                    :items="selectItems"
                    :status="ValidationStatus.Success"
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
                <div>
                    <PlainTextInput
                        label="Error"
                        :status="ValidationStatus.Error"
                    />
                </div>
                <div>
                    <PlainTextInput
                        label="Warning"
                        :status="ValidationStatus.Warning"
                    />
                </div>
                <div>
                    <PlainTextInput
                        label="Success"
                        :status="ValidationStatus.Success"
                    />
                </div>
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

            <div class="flex gap-4 flex-wrap">
                <DateInput label="Standard" />
            </div>

            <h6 class="font-bold text-base text-deep-black my-3">States</h6>

            <div class="flex gap-4 flex-wrap">
                <DateInput label="Loading" is-loading />
                <DateInput label="Disabled" disabled />
                <DateInput label="Error" :status="ValidationStatus.Error" />
                <DateInput label="Warning" :status="ValidationStatus.Warning" />
                <DateInput label="Success" :status="ValidationStatus.Success" />
            </div>

            <h3
                class="font-title font-bold text-secondary-600 text-2xl pb-3 border-b border-gray-200 my-4 mt-6"
            >
                Cards
            </h3>

            <div class="flex gap-4 flex-wrap">
                <div class="flex-1">
                    <Card title="Card With Title">
                        <template #body>
                            <div class="p-4">Some content</div>
                        </template>
                    </Card>
                </div>

                <div class="flex-1">
                    <Card>
                        <template #body>
                            <div class="p-4">Some content</div>
                        </template>
                    </Card>
                </div>
            </div>

            <h3
                class="font-title font-bold text-secondary-600 text-2xl pb-3 border-b border-gray-200 my-4 mt-6"
            >
                Stat Blocks
            </h3>

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
                <template #body>
                    <p class="p-6">This is some test content</p>
                </template>

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

import Card from "@/Components/Card.vue";
import GenericButton from "@/Components/GenericButton.vue";
import CurrencyInput from "@/Components/Input/CurrencyInput.vue";
import DateInput from "@/Components/Input/DateInput.vue";
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
        CurrencyInput,
        DateInput,
        Modal,
        Card,
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
