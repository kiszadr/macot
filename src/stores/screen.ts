import { defineStore } from "pinia";

export const useScreenStore = defineStore("screen", {
  state: () => {
    return {
      isMobile: window.screen.width <= 768,
    };
  },
});
