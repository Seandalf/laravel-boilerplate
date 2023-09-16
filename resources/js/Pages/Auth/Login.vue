<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>
        <form @submit.prevent="submit">
            <PlainTextInput
                prefix-icon="account"
                v-model="form.username"
                label="Email"
            />
        </form>
    </GuestLayout>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import InputLabel from "@/Components/Input/InputLabel.vue";
import PlainTextInput from "@/Components/Input/PlainTextInput.vue";
import { ValidationStatus } from "@/Enum/ValidationStatus";
import ILogin from "@/Interfaces/Auth/ILogin";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link } from "@inertiajs/vue3";

export default defineComponent({
    name: "login",
    components: {
        GuestLayout,
        Head,
        Link,
        InputLabel,
        PlainTextInput,
    },
    props: {
        canResetPassword: {
            type: Boolean,
        },
        status: {
            type: String,
        },
    },
    setup(props) {
        const form: ILogin = reactive({
            username: "",
            password: "",
            remember: false,
        });

        const submit = () => {
            console.log("wow");
        };

        return { form, submit, ValidationStatus };
    },
});
</script>
