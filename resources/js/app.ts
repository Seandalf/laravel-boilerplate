import "./bootstrap";
import "../css/app.css";
import "primevue/resources/themes/lara-light-teal/theme.css";

import { createApp, DefineComponent, h } from "vue";

import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import PrimeVue from "primevue/config";

import { createInertiaApp } from "@inertiajs/vue3";

import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob<DefineComponent>("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(PrimeVue)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});
