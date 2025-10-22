<template>
  <div class="home">
    <h2>
      {{ $t("home.welcomeMessage") }}
    </h2>
    <router-link
      v-for="product in products"
      :key="product.id"
      :to="`/product/${product.id}`"
    >
      <p>
        <img
          width="100"
          height="100"
          :src="product && product.gallery ? product.gallery[0] : ''"
        />
        {{ product.title }} - {{ product.price }} {{ product.currency }} -
        {{ product.description1 }}
      </p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores/products";

const productsStore = useProductsStore();
const { products } = storeToRefs(productsStore);

onMounted(() => {
  productsStore.getProducts();
});
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>

<style lang="scss" scoped>
@import "@/styles/app_settings.scss";
.home {
  height: 100%;
  padding: 0 map-get($settings, app-padding-horizontal);

  h2 {
    margin: 50px 0;
    text-align: center;
  }
}
</style>
