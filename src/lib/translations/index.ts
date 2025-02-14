import i18n from "sveltekit-i18n";

const config = {
    loaders: [
        {
            locale: "en",
            key: "blog",
            routes: ["/"],
            loader: async () => (await import("./en/blog.json")).default,
        },
        {
            locale: "en",
            key: "nav",
            routes: ["/"],
            loader: async () => (await import("./en/nav.json")).default,
        },
        {
            locale: "fa",
            key: "blog",
            routes: ["/"],
            loader: async () => (await import("./fa/blog.json")).default,
        },
        {
            locale: "fa",
            key: "nav",
            routes: ["/"],
            loader: async () => await import("./fa/nav.json"),
        },
        {
            locale: "en",
            key: "home",
            routes: ["/"],
            loader: async () => (await import("./en/home.json")).default,
        },
        {
            locale: "fa",
            key: "home",
            routes: ["/"],
            loader: async () => (await import("./fa/home.json")).default,
        },
        {
            locale: "en",
            key: "contact",
            routes: ["/"],
            loader: async () => (await import("./en/contact.json")).default,
        },
        {
            locale: "fa",
            key: "contact",
            routes: ["/"],
            loader: async () => (await import("./fa/contact.json")).default,
        },
    ],
};

export const defaultLocale = "fa";

export const { t, locale, locales, loading, loadTranslations, translations } =
    new i18n(config);
