<template>
  <footer class="app-footer">
    <nav>
      <router-link to="/">{{ $t("router.home") }}</router-link> |
      <router-link to="/about">{{ $t("router.about") }}</router-link>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/styles/app_settings.scss";

.app-footer {
  background-color: map-get($base-colors, black);
  height: map-get($settings, footer-height);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: map-get($base-colors, white);

  nav {
    a {
      font-weight: bold;
      color: map-get($base-colors, white);

      &.router-link-exact-active {
        color: map-get($base-colors, primary);
      }
    }
  }
}
</style>
