<template>
  <div v-if="dergi" class="page-container">
    <Header />
    
    <div class="dergi-detail-container">
      <div class="dergi-content">
        <div class="dergi-header">
          <div class="dergi-image">
            <img :src="dergi.image" :alt="dergi.title" />
          </div>
          <div class="dergi-info">
            <h1>{{ dergi.title }}</h1>
            <div class="publisher">{{ dergi.publisher }}</div>
            <div class="price">{{ dergi.price }}</div>
            <div class="product-info">
              <div class="info-item"><strong>Satıcı:</strong> {{ dergi.seller }}</div>
              <div class="info-item"><strong>Kondisyon:</strong> {{ dergi.condition }}</div>
              <div class="info-item"><strong>Stok:</strong> {{ dergi.stock }} adet</div>
              <div class="info-item"><strong>Kargo:</strong> Alıcıya Ait</div>
            </div>
            <div class="buttons">
              <button 
                class="add-to-cart" 
                @click="addToCart"
                :disabled="isAddedToCart"
              >
                {{ isAddedToCart ? 'Sepetinize Eklendi' : 'Sepete Ekle' }}
              </button>
              <button class="ask-question">Soru Sor</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/products'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const productStore = useProductStore()
const dergi = ref(null)
const isAddedToCart = ref(false)

onMounted(async () => {
  const slug = route.params.slug
  // Firestore'dan dergi verisini çek
  const magazineData = await productStore.getMagazineBySlug(slug)
  if (magazineData) {
    dergi.value = magazineData
  } else {
    router.push('/dergiler')
  }
})

const addToCart = () => {
  if (dergi.value) {
    cartStore.addItemToCart({
      title: dergi.value.title,
      price: dergi.value.price,
      seller: dergi.value.seller,
      image: dergi.value.image
    })
    isAddedToCart.value = true
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

.dergi-detail-container {
  flex: 1;
  padding: 20px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.dergi-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.dergi-header {
  display: flex;
  gap: 30px;
}

.dergi-image {
  flex: 0 0 300px;
}

.dergi-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.dergi-info {
  flex: 1;
}

.buttons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.add-to-cart, .ask-question {
  padding: 12px 25px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.add-to-cart {
  background: #931818;
  color: white;
  border: none;
}

.add-to-cart:disabled {
  background: #f5f5f5;
  color: #666;
  cursor: default;
  border: 1px solid #ddd;
}

.ask-question {
  background: #faf7ec;
  color: #931818;
  border: 1px solid #931818;
}

.price {
  font-size: 24px;
  color: #931818;
  font-weight: bold;
  margin: 15px 0;
}

.product-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 20px 0;
}

.info-item {
  font-size: 14px;
  color: #333;
}
</style> 