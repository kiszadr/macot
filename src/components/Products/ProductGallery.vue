<template>
  <div
    class="gallery"
    @mouseenter="mouseOver = true"
    @mouseleave="mouseOver = false"
  >
    <img
      :class="{ 'gallery-image__mobile': screen.isMobile }"
      class="gallery-image"
      :src="mainImg"
      :alt="alt ?? 'empty image'"
    />
    <div class="gallery-counter">{{ step + 1 }} / {{ galleryLength }}</div>
    <div
      class="gallery-nav"
      :class="{
        'gallery-nav__disabled': step === 0,
        'gallery-nav__hidden': !screen.isMobile && !mouseOver,
        'gallery-nav__mobile': screen.isMobile,
      }"
      @click="step !== 0 && step--"
    >
      &lt;
    </div>
    <div
      class="gallery-nav gallery-nav__right"
      :class="{
        'gallery-nav__disabled': step === galleryLength - 1,
        'gallery-nav__hidden': !screen.isMobile && !mouseOver,
        'gallery-nav__mobile': screen.isMobile,
      }"
      @click="step !== galleryLength - 1 && step++"
    >
      &gt;
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from "vue";
import { useScreenStore } from "@/stores/screen";

const props = defineProps<{
  gallery: string[];
  alt?: string;
}>();

const mouseOver = ref(false);

const gallery = computed(() => props.gallery);
const alt = computed(() => props.alt);

const step = ref(0);
const screen = useScreenStore();

const mainImg = computed(() =>
  gallery.value ? gallery.value[step.value] : "../assets/logo.png"
);

const galleryLength = computed(() =>
  gallery.value ? gallery.value.length : 0
);
</script>

<style lang="scss" scoped>
@import "@/styles/app_settings.scss";

.gallery {
  position: relative;

  &-image {
    background-color: map-get($base-colors, black);
    width: 100%;
    height: 33vw;
    object-fit: contain;

    &__mobile {
      height: 66vw;
    }
  }

  &-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    background-color: map-get($base-colors, white);
    opacity: 0.3;
    color: map-get($base-colors, primary);
    cursor: pointer;
    font-size: 30px;

    &__disabled {
      opacity: 0.1;
      pointer-events: none;
    }

    &__hidden {
      display: none;
    }

    &__mobile {
      opacity: 0;
    }

    &__right {
      right: 0;
      left: auto;
    }
  }

  &-counter {
    position: absolute;
    bottom: map-get($settings, app-padding-horizontal);
    padding: 5px;
    left: 50%;
    color: map-get($base-colors, black);
    background-color: map-get($base-colors, white);
    box-shadow: 2px 2px 2px map-get($base-colors, black);
    text-align: center;
    opacity: 0.7;
  }
}
</style>
