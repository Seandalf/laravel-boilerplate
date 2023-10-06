<template>
    <GuestLayout>
        <Head title="Log in" />

        <div class="font-title text-2xl font-medium text-center mb-3">
            Login to your account
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div class="mb-3">
                <PlainTextInput
                    prefix-icon="account"
                    v-model="form.email"
                    label="Email"
                    :disabled="isLoading || loginSuccessful"
                    :status="
                        errorList && errorList.email !== null
                            ? ValidationStatus.Error
                            : ValidationStatus.Normal
                    "
                    :errorMessage="errorList.email"
                />
            </div>

            <div class="mb-3">
                <PlainTextInput
                    prefix-icon="lock"
                    type="password"
                    v-model="form.password"
                    label="Password"
                    :disabled="isLoading || loginSuccessful"
                    :status="
                        errorList && errorList.password !== null
                            ? ValidationStatus.Error
                            : ValidationStatus.Normal
                    "
                    :errorMessage="errorList.password"
                />
            </div>

            <div class="mb-3">
                <GenericButton
                    :label="loginSuccessful ? 'Success!' : 'Login'"
                    type="submit"
                    :colour="ButtonColour.Secondary"
                    :is-loading="isLoading"
                    :disabled="loginSuccessful"
                    loading-text="Logging in"
                    full-width
                />
            </div>
        </form>
    </GuestLayout>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";

import axios from "axios";

import GenericButton from "@/Components/GenericButton.vue";
import InputLabel from "@/Components/Input/InputLabel.vue";
import PlainTextInput from "@/Components/Input/PlainTextInput.vue";
import { AlertType } from "@/Enum/AlertType";
import { ButtonColour } from "@/Enum/Button/ButtonColour";
import { ValidationStatus } from "@/Enum/ValidationStatus";
import { hasErrors, resetErrorList } from "@/Helpers/ResponseHelpers";
import ILogin from "@/Interfaces/Auth/ILogin";
import IErrorList from "@/Interfaces/IErrorList";
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
        GenericButton,
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
        const isLoading = ref<boolean>(false);
        const loginSuccessful = ref<boolean>(false);
        const form: ILogin = reactive({
            email: "",
            password: "",
            remember: false,
        });

        const errorList: IErrorList = reactive({
            email: null,
            password: null,
        });

        const formHasErrors = computed<boolean>(() => {
            return hasErrors(errorList);
        });

        const submit = () => {
            if (form.email !== "" && form.password !== "") {
                resetErrorList(errorList);

                isLoading.value = true;
                axios
                    .post(route("login"), form)
                    .then(() => {
                        loginSuccessful.value = true;
                    })
                    .catch((e) => {
                        if (e.response.data.errors) {
                            for (const index in e.response.data.errors) {
                                errorList[index] =
                                    e.response.data.errors[index][0];
                            }
                        }
                    })
                    .finally(() => {
                        isLoading.value = false;
                    });
            }

            if (form.email === "") {
                errorList.email = "Email is required";
            }

            if (form.password === "") {
                errorList.password = "Password is required";
            }
        };

        return {
            form,
            submit,
            ValidationStatus,
            ButtonColour,
            AlertType,
            errorList,
            formHasErrors,
            isLoading,
            loginSuccessful,
        };
    },
});
</script>
