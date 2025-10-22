<template>
  <div class="home">
    <h3>
      Welcome to mâCot - Your Cozy Corner for Handmade Crafts and Artisanal
      Goods
    </h3>
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
