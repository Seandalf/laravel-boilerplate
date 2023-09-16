<template>
    <div
        class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-br from-primary-400 to-primary-600"
    >
        <div class="w-full max-w-7xl bg-white p-6 rounded shadow">
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
                <GenericButton label="Primary" prefix-icon="arrow-right" />
                <GenericButton
                    label="Secondary"
                    colour="secondary"
                    prefix-icon="arrow-right"
                />
                <GenericButton
                    label="Success"
                    colour="success"
                    prefix-icon="arrow-right"
                />
                <GenericButton
                    label="Danger"
                    colour="danger"
                    prefix-icon="arrow-right"
                />
                <GenericButton
                    label="Warning"
                    colour="warning"
                    prefix-icon="arrow-right"
                />
                <GenericButton
                    label="Info"
                    colour="info"
                    prefix-icon="arrow-right"
                />
                <GenericButton
                    label="Black"
                    colour="deep-black"
                    prefix-icon="arrow-right"
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
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import GenericButton from "@/Components/GenericButton.vue";

export default defineComponent({
    components: { GenericButton },
});
</script>
