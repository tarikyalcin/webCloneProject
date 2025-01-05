<!-- ComponentTen.vue -->
<template>
  <div class="dergi-container">
    <div class="search-section">
      <input 
        type="text" 
        placeholder="Dergiler kategorisinde ara" 
        class="search-input"
      />
      <button class="search-button">ARA</button>
    </div>

    <div class="filter-section">
      <p class="filter-text">Dergiler kategorisindeki dergiler (Son 48 saat)</p>
      <div class="sort-bar">
        <div class="sort-label">Sıralama Şekli</div>
        <div class="sort-options">
          <span>Seçiniz</span>
          <select class="sort-select">
            <option value="new">Yeni Gelenler</option>
          </select>
        </div>
      </div>
    </div>

    <div class="products-grid">
      <div class="product-header">
        <div class="header-urun">Ürün</div>
        <div class="header-kargo">Kargo</div>
        <div class="header-fiyat">Fiyat</div>
      </div>

      <div v-for="(dergi, index) in dergiler" :key="index" class="product-item">
        <div class="product-info" @click="goToDergiDetail(dergi)">
          <img 
            :src="dergi.image" 
            :alt="dergi.title" 
            class="product-image"
            @error="handleImageError"
          />
          <div class="product-details">
            <h3 class="product-title">{{ dergi.title }}</h3>
            <p class="product-seller">Satıcı: {{ dergi.seller }}</p>
            <p class="product-publisher">Yayınevi: {{ dergi.publisher }}</p>
            <p class="product-condition">Kondisyon: <span class="condition-stars">{{ dergi.condition }}</span></p>
          </div>
        </div>
        <div class="product-kargo">Alıcıya Ait</div>
        <div class="product-price">
          <span class="price-amount">{{ dergi.price }}</span>
          <button 
            class="add-to-cart" 
            @click="addToCart(dergi, index)"
            :disabled="addedToCart[index]"
          >
            {{ addedToCart[index] ? 'Sepetinize Eklendi' : 'Sepete Ekle' }}
          </button>
          <span class="stock-info">Stok adedi: {{ dergi.stock || 5 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/products'

const router = useRouter()
const cartStore = useCartStore()
const productStore = useProductStore()
const addedToCart = ref({})

onMounted(async () => {
  await productStore.fetchMagazines()
})

const dergiler = computed(() => productStore.magazines)

const addToCart = (dergi, index) => {
  cartStore.addItemToCart({
    title: dergi.title,
    price: dergi.price,
    seller: dergi.seller,
    image: dergi.image
  })
  addedToCart.value[index] = true
}

const handleImageError = (e) => {
  console.error('Resim yüklenemedi:', e.target.src)
  // İsteğe bağlı: Yüklenemeyen resim yerine varsayılan bir resim göster
  e.target.src = '/default-dergi.jpg'
}

const goToDergiDetail = (dergi) => {
  // Dergi başlığından URL-friendly bir slug oluştur
  const slug = dergi.title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
  
  router.push(`/dergi/${slug}`)
}
</script>

<style scoped>
.dergi-container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.search-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-button {
  padding: 10px 20px;
  background: #931818;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-section {
  margin-bottom: 20px;
}

.filter-text {
  margin-bottom: 10px;
}

.sort-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
}

.sort-options {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sort-select {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.products-grid {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.product-header {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: 10px;
  background: #f5f5f5;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}

.product-item {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  align-items: center;
}

.product-info {
  display: flex;
  gap: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.product-info:hover {
  background-color: #f5f5f5;
}

.product-image {
  width: 100px;
  height: auto;
  border: 1px solid #ddd;
  padding: 5px;
}

.product-title {
  color: #146eb2;
  margin-bottom: 5px;
}

.product-seller, .product-publisher, .product-condition {
  margin: 5px 0;
  font-size: 14px;
}

.condition-stars {
  color: #d2bd7a;
}

.product-price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.price-amount {
  font-weight: bold;
  color: #146eb2;
  font-size: 18px;
}

.add-to-cart {
  padding: 8px 15px;
  background: #faf7ec;
  color: #931818;
  border: 1px solid #931818;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.add-to-cart:disabled {
  background: #f5f5f5;
  color: #666;
  cursor: default;
  border: 1px solid #ddd;
}

.stock-info {
  font-size: 12px;
  color: #666;
}
</style>
