<template>
  <LoginModal v-if="isShowLogin" @show-login="showLogin" />
  <CartModal v-if="isShowCart" @show-cart="showCart" />
  <div class="container">
    <header class="header">
      <router-link class="logo" :to="'/'">
        <img src="../assets/img/icon/logo.svg" alt="Logo" />
      </router-link>
      <label class="address">
        <input
          type="text"
          class="input input-address"
          placeholder="Адрес доставки"
        />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button
          class="button button-primary button-auth"
          @click="showLogin(true)"
        >
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button
          class="button button-cart"
          id="cart-button"
          @click="showCart(true)"
        >
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>c
        </button>
      </div>
    </header>
  </div>
</template>
<script setup>
import CartModal from "./CartModal.vue";
import LoginModal from "./LoginModal.vue";
import { ref } from "vue";
const isShowLogin = ref(false);
const isShowCart = ref(false);

function showLogin(value) {
  isShowLogin.value = value;
}
function showCart(value) {
  isShowCart.value = value;
}
</script>
<style>
@import "../assets/css/style.css";
@import "../assets/css/normalize.css";
</style>
