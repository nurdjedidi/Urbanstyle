import { reactive } from 'vue';

export default defineNuxtPlugin(() => {
  const cart = reactive([]);

  const addToCart = (selectedArticle) => {
    cart.push(selectedArticle);
  };

  const getCart = () => cart;

  return {
    provide: {
      cart: {
        addToCart,
        getCart,
      },
    },
  };
});

