<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading" style="justify-content: space-between">
          <h2 class="section-title restaurant-title">{{ restaraunt.name }}</h2>
          <div class="card-info">
            <div class="rating">{{ restaraunt.stars }}</div>
            <div class="price">От {{ restaraunt.price }} ₽</div>
            <div class="category">{{ restaraunt.kitchen }}</div>
          </div>
          <div style="display: inline-flex">
            <button
              class="button button-cart"
              @click="sort('desc')"
              id="cart-button"
            >
              <span class="button-text">Сначала дорогие</span>
            </button>
            <button class="button button-cart" @click="sort('asc')">
              <span class="button-text">Сначала дешевые</span>
            </button>
          </div>
        </div>
        <div class="cards cards-menu">
          <div class="card" v-for="product in products" v-bind:key="product.id">
            <DishCard
              :restaraunt="restaraunt"
              :product="product"
              @add-product="addProduct"
            />
            <!-- /.card-text -->
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import DishCard from "@/components/DishCard.vue";
import { useRoute } from "vue-router";
import db from "../assets/db/db";
import { useCounterStore } from "@/stores/mainStore";

export default {
  name: "HomeView",
  setup() {
    const counterStore = useCounterStore();

    return { counterStore };
  },
  async mounted() {
    const route = useRoute();
    this.products = await import(
      `../assets/db/${route.params.restaraunt}.json`
    );
    console.log(this.counterStore.cart);
    this.products = Array.from(this.products);
    console.log(this.products, Array.isArray(this.products));
    const partners = db.db.partners;
    this.restaraunt = partners.find((el) => {
      return el.products === `${route.params.restaraunt}.json`;
    });
    this.restarauntName = route.params.restaraunt;
  },
  data() {
    return {
      restarauntName: "",
      products: [],
      restaraunt: {},
      cart: [],
    };
  },
  methods: {
    addProduct(product) {
      this.counterStore.addItem(product);
    },
    sort(direction) {
      if (direction === "desc") {
        this.products.sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          } else return 1;
        });
      } else {
        this.products.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          } else return 1;
        });
      }
    },
  },
  components: {
    DishCard,
  },
};
</script>
