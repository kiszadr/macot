<template>
  <div class="app">
    <app-header />
    <div class="app-body">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppMain/AppHeader.vue";
import AppFooter from "@/components/AppMain/AppFooter.vue";
</script>

<style lang="scss">
@import "@/styles/app_settings.scss";

body {
  margin: 0;
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}

.app {
  height: 100vh;

  &-name {
    font-family: "Times New Roman", Times, serif;
  }

  &-body {
    overflow-y: scroll;
    padding-bottom: calc(map-get($settings, footer-height) + 16px);
    height: calc(
      100% - map-get($settings, footer-height) -
        map-get($settings, header-height)
    );
    box-sizing: border-box;
  }
}
</style>
