<template>
  <div class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="$emit('showCart', false)">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <div class="food-row" v-for="item in cart" v-bind:key="item.id">
          <span class="food-name">{{ item.name }}</span>
          <strong class="food-price">{{ item.price }} ₽</strong>
          <div class="food-counter">
            <button
              class="counter-button"
              @click="store.decrementQuantity(item)"
            >
              -
            </button>
            <span class="counter">{{ item.quantity }}</span>
            <button
              class="counter-button"
              @click="store.incrementQuantity(item)"
            >
              +
            </button>
          </div>
        </div>
        <!-- /.foods-row -->
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ cartTotalPrice }} ₽</span>
        <div class="footer-buttons">
          <button
            class="button button-primary"
            @click="$emit('showCart', false)"
          >
            Оформить заказ
          </button>
          <button class="button clear-cart" @click="$emit('showCart', false)">
            Отмена
          </button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>
<script setup>
import { useCounterStore } from "../stores/mainStore";
import { storeToRefs } from "pinia";
const store = useCounterStore();

const cart = store.cart;
const { cartTotalPrice } = storeToRefs(store);
</script>
