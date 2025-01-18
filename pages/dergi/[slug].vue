<template>
  <div v-if="dergi" class="page-container">
    <Header />
    
    <div class="dergi-detail-container">
      <div class="breadcrumb">
        <NuxtLink to="/">Ana Sayfa</NuxtLink> >
        <NuxtLink to="/dergiler">Dergiler</NuxtLink> >
        <span>{{ dergi.title }}</span>
      </div>

      <div class="dergi-content">
        <div class="dergi-layout">
          <!-- Sol Sütun: Dergi Görseli -->
          <div class="dergi-image-column">
            <img :src="dergi.image" :alt="dergi.title" />
          </div>

          <!-- Orta Sütun: Dergi Bilgileri -->
          <div class="dergi-info-column">
            <h1>{{ dergi.title }}</h1>
            <div class="author">{{ dergi.author }}</div>
            <div class="price">{{ dergi.price }} TL</div>
            
            <div class="info-grid">
              <div class="info-row">
                <div class="info-group">
                  <div class="info-item">
                    <span class="info-label">Ürün Kodu:</span>
                    <span class="info-value">{{ dergi.productCode }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Stokta:</span>
                    <span class="info-value">{{ dergi.stock }} adet var</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Çeviren:</span>
                    <span class="info-value">{{ dergi.translator }}</span>
                  </div>
                </div>

                <div class="info-group">
                  <div class="info-item">
                    <span class="info-label">Yayınevi:</span>
                    <span class="info-value">{{ dergi.publisher }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Yayın Yeri:</span>
                    <span class="info-value">{{ dergi.publishPlace }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Dili:</span>
                    <span class="info-value">{{ dergi.language }}</span>
                  </div>
                </div>

                <div class="info-group">
                  <div class="info-item">
                    <span class="info-label">ISBN NO:</span>
                    <span class="info-value">{{ dergi.isbn }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Durum:</span>
                    <span class="info-value">{{ dergi.condition }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Kargo:</span>
                    <span class="info-value">{{ dergi.shipping }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="buttons">
              <button class="add-to-cart" @click="addToCart" :disabled="isAddedToCart">
                {{ isAddedToCart ? 'Sepetinize Eklendi' : 'Sepete Ekle' }}
              </button>
              <button class="ask-question">Satıcıya Soru Sor</button>
            </div>
          </div>

          <!-- Sağ Sütun: Satıcı Bilgileri -->
          <div class="seller-info-column">
            <div class="seller-box">
              <h3>{{ dergi.seller }}</h3>
              <div class="seller-stats">
                <span>{{ dergi.sellerStats }} işlemde %100 başarı</span>
              </div>

              <div class="shipping-info">
                <p>{{ dergi.seller }} tüm Türkiye'ye</p>
                <p>Hepsijet Kargo & NadirKitap anlaşması ile</p>
                <p>gönderim yapmaktadır.</p>
                
                <div class="shipping-prices">
                  <p>Tek kitap kargo ücreti: <strong>79.00 TL</strong> (KDV dahil)</p>
                  <p>2 ve daha fazla kitap: <strong>89.00 TL</strong> (Adet limiti olmaksızın, KDV dahil)</p>
                </div>

                <div class="free-shipping-info">
                  <p>{{ dergi.seller }} kendi ürünlerinden yapılan</p>
                  <p><strong>750 TL ve üzeri</strong> yurtiçi alımlarda</p>
                  <p>kargo ücretini karşılamaktadır.</p>
                </div>
              </div>

              <div class="seller-links">
                <a href="#" class="seller-link">Tüm Kitaplarına Gözat</a>
                <a href="#" class="seller-link">Sanat & Koleksiyon</a>
                <a href="#" class="seller-link">Hakkındaki Yorumlar</a>
              </div>
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

.dergi-layout {
  display: grid;
  grid-template-columns: 300px minmax(400px, 1fr) 300px;
  gap: 30px;
  padding: 20px;
}

.dergi-image-column img {
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  padding: 10px;
}

.dergi-info-column {
  padding-right: 30px;
}

.seller-info-column {
  background: #fff;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.seller-box {
  padding: 15px;
}

.seller-box h3 {
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
}

.seller-stats {
  color: #28a745;
  font-size: 14px;
  margin-bottom: 20px;
}

.shipping-info {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin: 20px 0;
}

.shipping-prices {
  margin: 15px 0;
  padding: 10px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.free-shipping-info {
  margin: 15px 0;
  line-height: 1.4;
}

.seller-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.seller-link {
  display: block;
  padding: 10px;
  text-align: center;
  color: #931818;
  border: 1px solid #931818;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.seller-link:hover {
  background: #931818;
  color: white;
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

.breadcrumb {
  padding: 10px 0;
  margin-bottom: 20px;
  color: #666;
}

.breadcrumb a {
  color: #146eb2;
  text-decoration: none;
}

.breadcrumb span {
  color: #666;
}

.success-rate {
  color: #28a745;
  margin-left: 10px;
}

.shipping-info p {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
}

.info-grid {
  margin: 20px 0;
  width: 100%;
}

.info-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.info-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 14px;
  color: #333;
}

.info-label {
  min-width: 80px;
  color: #666;
  font-weight: 500;
}

.info-value {
  color: #333;
}

.dergi-info-column h1 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.author {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.price {
  font-size: 24px;
  color: #146eb2;
  font-weight: bold;
  margin: 15px 0;
}
</style> 