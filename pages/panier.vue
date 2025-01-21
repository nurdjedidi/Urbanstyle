<template>
    <div class="cart-container">
      <h2 class="cart-title">Mon Panier</h2>
      <div v-if="cartItems.length > 0" class="cart-items">
        <v-card
          class="cart-article"
          v-for="(item, index) in cartItems"
          :key="index"
        >
          <v-img :src="item.img" aspect-ratio="1.5" class="cart-item-image"></v-img>
          <v-card-title class="cart-item-title">{{ item.title }}</v-card-title>
          <v-card-text class="cart-item-price">{{ item.price }}</v-card-text>
        </v-card>
      </div>
      <div v-else>
        <p>Votre panier est vide.</p>
      </div>
      <div>
    <h2>Paiement</h2>
    <div id="card-element"></div>
    <v-btn @click="handlePayment" color="primary">Payer</v-btn>
  </div>
    </div>
  </template>
  
  <script setup>
  import { useNuxtApp } from '#app';
  import { computed } from 'vue';
  
  const { $cart } = useNuxtApp();
  const cartItems = computed(() => $cart.getCart());
  </script>
   
  <style scoped>
  .cart-container {
    padding: 20px;
    max-width: 1200px;
  
  }
  
  .cart-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .cart-items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .cart-article {
    width: 250px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .cart-article:hover {
    transform: scale(1.05);
  }
  
  .cart-item-image {
    height: 200px;
    object-fit: cover;
  }
  
  .cart-item-title {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 10px;
  }
  
  .cart-item-price {
    font-size: 1rem;
    color: #666;
    padding: 0 10px 10px;
  }
  
  .checkout-section {
    margin-top: 30px;
    display: flex;
  }
  
  .checkout-btn {
    padding: 10px 20px;
    width: 200px;
  }
  </style>
  
  