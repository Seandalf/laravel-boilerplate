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
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import GenericButton from "@/Components/GenericButton.vue";
import PlainTextInput from "@/Components/Input/PlainTextInput.vue";
import SelectInput from "@/Components/Input/SelectInput.vue";

export default defineComponent({
    components: { GenericButton, PlainTextInput, SelectInput },
    setup() {
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

        return { selectItems };
    },
});
</script>
