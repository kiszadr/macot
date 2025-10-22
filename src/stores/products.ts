import { defineStore } from "pinia";
import type { Product } from "@/types/products";
import { getProducts } from "@/utils/firebase/products";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [] as Product[],
      productsLoaded: false,
    };
  },
  actions: {
    async getProducts() {
      console.log("get products action");
      try {
        const products = await getProducts();

        if (products) {
          this.products = products;
        } else {
          this.products = [];
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        this.products = [];
      } finally {
        this.productsLoaded = true;
      }
    },
    getProductById(productId: number): Product | undefined {
      return this.products.find((product) => product.id === productId);
    },
  },
});
