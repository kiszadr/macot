import { createI18n } from "vue-i18n";
import { translationEn as en } from "./en";
import { translationsPl as pl } from "./pl";

export const i18n = createI18n({
  locale: "pl",
  fallbackLocale: "en",
  messages: {
    en,
    pl,
  },
});
