<template>
  <div class="product-view">
    <img
      :class="{ 'product-view-gallery__mobile': screen.isMobile }"
      class="product-view-gallery"
      :src="mainImg"
      :alt="product.title || 'empty image'"
    />
    <button :disabled="step === 0" @click="step--">previous</button>
    <button :disabled="step === galleryLength - 1" @click="step++">next</button>
    <article>
      <h1>{{ product.title }}</h1>
      <h3>
        {{ product.description1 }} <strong>{{ price }}</strong>
      </h3>
      <p>{{ product.description2 }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import { useScreenStore } from "@/stores/screen";
import type { Product } from "@/types/products";

const screen = useScreenStore();
const productsStore = useProductsStore();
const product = ref<Product>({} as Product);
const step = ref(0);
const route = useRoute();

const mainImg = computed(() => {
  return product.value && product.value.gallery
    ? product.value.gallery[step.value]
    : "../assets/logo.png";
});

const price = computed(() => {
  return product.value && product.value.price
    ? `${product.value.price} ${product.value.currency}`
    : "";
});

const galleryLength = computed(() => {
  return product.value && product.value.gallery
    ? product.value.gallery.length
    : 0;
});

onMounted(async () => {
  if (!productsStore.productsLoaded) {
    await productsStore.getProducts();
  }

  console.log("route", route);
  const id = Number(route.params.id);
  console.log("ProductView mounted", id);
  const productData = productsStore.getProductById(id);
  product.value = productData ?? ({} as Product);
});
</script>

<style lang="scss" scoped>
.product-view {
  &-gallery {
    background-color: black;
    width: 100%;
    height: 40vw;
    object-fit: contain;

    &__mobile {
      height: 40vh;
    }
  }
}
</style>
