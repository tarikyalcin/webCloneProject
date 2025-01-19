<template>
  <div class="nine">
    <div class="baslik">Sepetim</div>

    <div v-if="cartItems.length === 0" class="sepet-box">
      <img src="/images/sepet.jpg" alt="sepet" class="empty-cart-image" />
      <p class="empty-message">Sepetiniz Boş</p>
      <button class="ana-sayfa" @click="goToHomePage">Ana Sayfaya Dön</button>
    </div>

    <div v-else class="sepet-listesi">
      <div class="sepet-item" v-for="(item, index) in cartItems" :key="index">
        <div class="item-image">
          <img :src="item.image || '/default-product.jpg'" :alt="item.title" />
        </div>
        <div class="item-details">
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-seller">Satıcı: {{ item.seller }}</p>
          <p class="item-price">{{ item.price }}</p>
          <button class="remove-button" @click="removeFromCart(item)">Sepetten Çıkar</button>
        </div>
      </div>
      <div class="sepet-toplam">
        <div class="toplam-tutar">
          Toplam Tutar: {{ calculateTotal() }}
        </div>
        <button class="satin-al">Satın Al</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const router = useRouter()
const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items)

const goToHomePage = () => {
  router.push('/')
}

const removeFromCart = (item) => {
  if (confirm(`"${item.title}" sepetten çıkarılsın mı?`)) {
    cartStore.removeItemFromCart(item.id)
  }
}

const calculateTotal = () => {
  return cartItems.value
    .reduce((total, item) => {
      const price = parseFloat(item.price.replace('TL', '').replace(',', '.'))
      return total + price
    }, 0)
    .toFixed(2) + ' TL'
}
</script>

<style scoped>
.nine {
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.baslik {
  color: #931818;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  padding-left: 20px;
}

.sepet-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
}

.empty-cart-image {
  width: 150px;
  margin-bottom: 20px;
}

.empty-message {
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
}

.ana-sayfa {
  padding: 12px 30px;
  background-color: #931818;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.sepet-listesi {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sepet-item {
  display: flex;
  gap: 30px;
  padding: 30px;
  background: #faf7ec;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.item-image {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-title {
  font-size: 20px;
  color: #146eb2;
  margin: 0;
}

.item-seller {
  font-size: 16px;
  color: #666;
}

.item-price {
  font-size: 24px;
  color: #931818;
  font-weight: bold;
}

.remove-button {
  align-self: flex-start;
  padding: 10px 20px;
  background: white;
  color: #931818;
  border: 1px solid #931818;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.remove-button:hover {
  background: #931818;
  color: white;
}

.sepet-toplam {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-top: 20px;
}

.toplam-tutar {
  font-size: 20px;
  font-weight: bold;
  color: #146eb2;
}

.satin-al {
  padding: 12px 40px;
  background: #931818;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.satin-al:hover {
  background: #7a1414;
}
</style> 