<template>
  <main class="main">
    <div class="container">
      <section class="container-promo">
        <section class="promo pizza">
          <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
          <p class="promo-text">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с
            антисептиком
          </p>
        </section>
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input
              type="text"
              class="input input-search"
              placeholder="Поиск блюд и ресторанов"
            />
          </label>
        </div>
        <div class="cards cards-restaurants">
          <router-link
            :to="{
              // eslint-disable-next-line prettier/prettier
              path:
                '/restaraunt/' +
                partner.products.slice(0, partner.products.indexOf('.')),
              params: {
                restaraunt: partner.products.slice(
                  0,
                  partner.products.indexOf('.')
                ),
              },
            }"
            v-for="partner in partners"
            v-bind:key="partner.id"
            class="card card-restaurant"
          >
            <RestarauntCard :partner="partner" />
            <!-- /.card -->
            <!-- /.card -->
          </router-link>
        </div>

        <!-- /.cards -->
      </section>
    </div>
    <!-- /.container -->
  </main>
  <!-- /.cards -->
</template>

<script setup>
import RestarauntCard from "@/components/RestarauntCard.vue";
import db from "../assets/db/db";
import { useCounterStore } from "@/stores/mainStore";

const store = useCounterStore();
console.log(store);
const partners = db.db.partners;
</script>
