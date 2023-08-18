import { ref, reactive } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counter", () => {
  const cartTotalPrice = ref(0);
  const cart = reactive([]);
  function addItem(item) {
    const index = cart.indexOf(item);
    if (index <= -1) {
      item.quantity = 1;
      cartTotalPrice.value += item.price;
      cart.push(item);
    }
  }
  function removeItem(item) {
    const index = cart.indexOf(item);
    if (index > -1) {
      cart.splice(index, 1);
    }
  }
  function incrementQuantity(item) {
    item.quantity++;
    cartTotalPrice.value += item.price;
  }
  function decrementQuantity(item) {
    cartTotalPrice.value -= item.price;
    if (item.quantity >= 2) {
      item.quantity--;
    } else {
      item.quantity--;
      removeItem(item);
    }
  }

  return {
    name,
    cartTotalPrice,
    cart,
    addItem,
    incrementQuantity,
    decrementQuantity,
  };
});
