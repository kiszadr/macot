<template>
  <div class="product-view">
    <product-gallery :gallery="product.gallery ?? []" :alt="product.title" />
    <article class="product-view-article">
      <h1>{{ product.title }}</h1>
      <h3>
        {{ product.description1 }} <strong>{{ price }}</strong>
      </h3>
      <p>{{ product.description2 }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
import ProductGallery from "@/components/Products/ProductGallery.vue";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "@/stores/products";
import type { Product } from "@/types/products";

const productsStore = useProductsStore();
const product = ref<Product>({} as Product);
const route = useRoute();

const price = computed(() => {
  return product.value && product.value.price
    ? `${product.value.price} ${product.value.currency}`
    : "";
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
@import "@/styles/app_settings.scss";

.product-view {
  &-article {
    padding: 0 map-get($settings, app-padding-horizontal);
  }
}
</style>
