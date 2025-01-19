tamam boşver şimdi sana 9. ve 10. component i atacağım ve senden sadece bunları incele hiçbir şey yapma tamam mı az sonra bunlar için bir kaç şey isteyeceğim senden


<!-- ComponentNine.vue -->
<template>
  <div class="nine">
    <div class="baslik">Sepetim</div>

    <div v-if="cartItems.length === 0" class="sepet-box">
      <img src="/images/sepet.jpg" alt="sepet" />
      <p>Sepetiniz Boş</p>
      <button class="ana-sayfa" @click="goToHomePage">Ana Sayfaya Dön</button>
    </div>

    <div v-else>
      <!-- Satıcıya göre gruplandırılmış ürünler -->
      <div v-for="(group, seller) in groupedItems" :key="seller" class="seller-group">
        <div class="seller-header">
          <h3>Satıcı: {{ seller }}</h3>
          <p class="kargo-info">Kargo Ücreti: {{ calculateShipping(group) }} TL</p>
        </div>

        <div class="sepet-listesi">
          <div v-for="(item, index) in group" :key="index" class="sepet-item">
            <div class="item-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="item-details">
              <h3 class="item-title">{{ item.title }}</h3>
              <p class="item-seller">Satıcı: {{ item.seller }}</p>
              <div class="item-quantity">
                <label>Adet:</label>
                <select v-model="item.quantity" @change="updateQuantity(item)">
                  <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                </select>
              </div>
              <p class="item-price">{{ formatPrice(item.price * item.quantity) }} TL</p>
            </div>
            <button class="remove-button" @click="removeFromCart(index)">Sepetten Çıkar</button>
          </div>
        </div>

        <div class="group-total">
          <p>Ara Toplam: {{ calculateGroupTotal(group) }} TL</p>
          <p>Kargo: {{ calculateShipping(group) }} TL</p>
        </div>
      </div>

      <!-- Genel Toplam -->
      <div class="cart-total">
        <div class="total-line">
          <span>Toplam Ürün:</span>
          <span>{{ calculateSubTotal() }} TL</span>
        </div>
        <div class="total-line">
          <span>Toplam Kargo:</span>
          <span>{{ calculateTotalShipping() }} TL</span>
        </div>
        <div class="total-line grand-total">
          <span>Genel Toplam:</span>
          <span>{{ calculateGrandTotal() }} TL</span>
        </div>
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

// Satıcıya göre ürünleri grupla
const groupedItems = computed(() => {
  return cartItems.value.reduce((groups, item) => {
    const seller = item.seller
    if (!groups[seller]) {
      groups[seller] = []
    }
    groups[seller].push(item)
    return groups
  }, {})
})

const formatPrice = (price) => {
  return Number(price).toFixed(2)
}

const calculateShipping = (items) => {
  // Her satıcı için sabit kargo ücreti (örnek)
  return 99.00
}

const calculateGroupTotal = (items) => {
  return formatPrice(items.reduce((total, item) => {
    return total + (parseFloat(item.price) * item.quantity)
  }, 0))
}

const calculateSubTotal = () => {
  return formatPrice(cartItems.value.reduce((total, item) => {
    return total + (parseFloat(item.price) * item.quantity)
  }, 0))
}

const calculateTotalShipping = () => {
  // Her satıcı için ayrı kargo ücreti
  return formatPrice(Object.keys(groupedItems.value).length * 99.00)
}

const calculateGrandTotal = () => {
  const subtotal = parseFloat(calculateSubTotal())
  const shipping = parseFloat(calculateTotalShipping())
  return formatPrice(subtotal + shipping)
}

const updateQuantity = (item) => {
  cartStore.updateItemQuantity(item)
}

const removeFromCart = (index) => {
  const itemToRemove = cartItems.value[index]
  if (itemToRemove) {
    if (confirm(`"${itemToRemove.title}" sepetten çıkarılsın mı?`)) {
      cartStore.removeItemFromCart(itemToRemove.id)
    }
  }
}

const goToHomePage = () => {
  router.push('/')
}
</script>

<style scoped>
/* Mevcut stiller korunacak, yeni stiller eklenecek */
.seller-group {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.seller-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.kargo-info {
  color: #666;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.item-quantity select {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.group-total {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  text-align: right;
}

.cart-total {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
}

.total-line {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

.grand-total {
  font-size: 1.2em;
  font-weight: bold;
  color: #931818;
  border-top: 2px solid #eee;
  margin-top: 10px;
  padding-top: 10px;
}
</style>