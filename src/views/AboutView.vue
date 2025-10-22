<template>
  <div class="about">
    <h1>{{ $t("about.title") }}</h1>
    <p v-html="$t('about.description')"></p>
  </div>
</template>

<style lang="scss">
.about {
  padding-top: 100px;
  text-align: center;
  height: 100%;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
  }
}
</style>
