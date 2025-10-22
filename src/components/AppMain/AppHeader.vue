<template>
  <header class="app-header">
    <router-link class="app-name" to="/">{{ $t("app.name") }}</router-link>
  </header>
</template>

<style lang="scss" scoped>
@import "@/styles/app_settings.scss";

.app-header {
  height: map-get($settings, header-height);
  background-color: map-get($base-colors, black);
  padding: 12px;
  font-size: 24px;
  text-align: left;

  a {
    color: map-get($base-colors, white);
  }
}
</style>
