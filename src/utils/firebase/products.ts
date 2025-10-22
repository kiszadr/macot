import { app } from "@/utils/firebase";
import { getDatabase, ref, child, get } from "firebase/database";

// Initialize Realtime Database and get a reference to the service
export const productsDb = getDatabase(app);

const dbRef = ref(productsDb);

export const getProductById = async (productId: number) => {
  let product;
  console.log("get product", productId);

  await get(child(dbRef, `products`))
    .then((snapshot) => {
      console.log("snapshot", snapshot);
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }

      product = snapshot.val();
    })
    .catch((error) => {
      console.error(error);
    });

  return product;
};

export const getProducts = async () => {
  let products;

  await get(child(dbRef, `products`))
    .then((snapshot) => {
      console.log("snapshot", snapshot);
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }

      products = snapshot.val();
    })
    .catch((error) => {
      console.error(error);
    });

  return products;
};
