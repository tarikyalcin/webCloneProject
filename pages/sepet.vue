<template>
  <div class="page-container">
    <Header />
    
    <div class="sepet-container">
      <div class="baslik">Sepetim</div>

      <!-- Sepet boşsa -->
      <div v-if="cartStore.items.length === 0" class="empty-cart">
        <img src="/images/sepet.jpg" alt="Boş Sepet" class="empty-cart-image" />
        <p class="empty-message">Sepetiniz Boş</p>
        <button class="return-home" @click="router.push('/')">Ana Sayfaya Dön</button>
      </div>

      <!-- Sepette ürün varsa -->
      <div v-else class="cart-content">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <div class="item-image">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="item-details">
            <h3 class="item-title">{{ item.title }}</h3>
            <p class="item-seller">Satıcı: {{ item.seller }}</p>
            <p class="item-price">{{ item.price }}</p>
            <div class="quantity-controls">
              <button @click="decreaseQuantity(item)" class="quantity-btn">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)" class="quantity-btn">+</button>
            </div>
            <button @click="handleRemoveFromCart(item)" class="remove-btn">Sepetten Çıkar</button>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const router = useRouter()
const cartStore = useCartStore()

const handleRemoveFromCart = (item) => {
  console.log('Removing item:', item) // Debug için
  if (confirm(`"${item.title}" sepetten çıkarılsın mı?`)) {
    cartStore.removeItemFromCart(item.id)
  }
}

const increaseQuantity = (item) => {
  cartStore.updateItemQuantity(item.id, item.quantity + 1)
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    cartStore.updateItemQuantity(item.id, item.quantity - 1)
  }
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}

.sepet-container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  flex: 1;
}

.baslik {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.empty-cart-image {
  width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.empty-message {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.return-home {
  padding: 12px 30px;
  background-color: #931818;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.return-home:hover {
  background-color: #7a1414;
}

.cart-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.item-image img {
  width: 100px;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  flex: 1;
}

.item-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.item-seller {
  color: #666;
  margin-bottom: 5px;
}

.item-price {
  font-size: 20px;
  color: #931818;
  font-weight: bold;
  margin-bottom: 15px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.quantity-btn {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.quantity {
  padding: 0 10px;
}

.remove-btn {
  padding: 8px 16px;
  background: white;
  color: #931818;
  border: 1px solid #931818;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn:hover {
  background: #fff5f5;
}
</style> 