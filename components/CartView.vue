<template>
  <div class="cart-container">
    <h2>Sepetim</h2>
    <div v-if="cartStore.items.length === 0" class="empty-cart">
      Sepetiniz boş
    </div>
    <div v-else>
      <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.title" class="cart-item-image" />
        <div class="cart-item-details">
          <h3>{{ item.title }}</h3>
          <p>Satıcı: {{ item.seller }}</p>
          <p>Fiyat: {{ item.price }}</p>
          <div class="quantity-controls">
            <button @click="decreaseQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)">+</button>
          </div>
        </div>
        <button @click="removeFromCart(item)" class="remove-button">
          Kaldır
        </button>
      </div>
      <div class="cart-summary">
        <p>Toplam: {{ formatPrice(cartStore.totalPrice) }} ₺</p>
        <button @click="checkout" class="checkout-button">Satın Al</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const formatPrice = (price) => {
  return price.toFixed(2)
}

const increaseQuantity = (item) => {
  cartStore.updateItemQuantity(item.id, item.quantity + 1)
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.updateItemQuantity(item.id, item.quantity - 1)
  }
}

const checkout = () => {
  // Ödeme işlemleri burada yapılacak
  alert('Ödeme işlemi başlatılıyor...')
}

const removeFromCart = (item) => {
  if (confirm(`"${item.title}" sepetten çıkarılsın mı?`)) {
    cartStore.removeItemFromCart(item.id)
  }
}
</script> 