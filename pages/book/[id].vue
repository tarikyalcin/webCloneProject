<template>
  <div v-if="book" class="page-container">
    <Header />
    
    <div class="book-detail-container">
      <div class="breadcrumb">
        <NuxtLink to="/">Ana Sayfa</NuxtLink> >
        <span>{{ book.name }}</span>
      </div>

      <div class="book-content">
        <div class="book-layout">
          <!-- Sol Sütun: Kitap Görseli -->
          <div class="book-image-column">
            <img :src="book.image" :alt="book.name" />
          </div>

          <!-- Orta Sütun: Kitap Bilgileri -->
          <div class="book-info-column">
            <h1>{{ book.name }}</h1>
            <div class="author">{{ book.author }}</div>
            <div class="price">{{ book.price }}</div>
            
            <div class="info-grid">
              <div class="info-row">
                <div class="info-group">
                  <div class="info-item">
                    <span class="info-label">Yayın Yeri:</span>
                    <span class="info-value">{{ book.publishPlace }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Yayınevi:</span>
                    <span class="info-value">{{ book.publisher }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Dili:</span>
                    <span class="info-value">{{ book.language }}</span>
                  </div>
                </div>

                <div class="info-group">
                  <div class="info-item">
                    <span class="info-label">Cildi:</span>
                    <span class="info-value">{{ book.cover }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">ISBN:</span>
                    <span class="info-value">{{ book.isbn }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Özellik:</span>
                    <span class="info-value">{{ book.feature }}</span>
                  </div>
                </div>

                <div class="info-group">
                  <div class="info-item">
                    <span class="info-label">Durum:</span>
                    <span class="info-value">{{ book.condition }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Kargo:</span>
                    <span class="info-value">{{ book.shipping }}</span>
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
              <h3>{{ book.seller }}</h3>
              <div class="seller-stats">
                <span>316 işlemde %100 başarı</span>
              </div>

              <div class="shipping-info">
                <p>{{ book.seller }} tüm Türkiye'ye</p>
                <p>Hepsijet Kargo & NadirKitap anlaşması ile</p>
                <p>gönderim yapmaktadır.</p>
                
                <div class="shipping-prices">
                  <p>Tek kitap kargo ücreti: <strong>79.00 TL</strong> (KDV dahil)</p>
                  <p>2 ve daha fazla kitap: <strong>89.00 TL</strong> (Adet limiti olmaksızın, KDV dahil)</p>
                </div>

                <div class="free-shipping-info">
                  <p>{{ book.seller }} kendi ürünlerinden yapılan</p>
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
  <div v-else>
    <p>Yükleniyor...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const router = useRouter()
const book = ref(null)
const cartStore = useCartStore()
const isAddedToCart = ref(false)

// Kitap verilerini simüle edelim
const bookDetails = {
  1: {
    id: 1,
    name: 'Avrasyada Şamanlar',
    author: 'MIHALY HOPPAL',
    price: '90,00 ₺',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FAvrasyadaŞamanlar.jpg?alt=media&token=0b3998f4-1960-4020-85df-a744f1d899c6',
    publishPlace: 'İSTANBUL',
    publisher: 'Yapı Kredi Yayınları',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789750852459',
    feature: 'İmzalı Özel Baskı',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  2: {
    id: 2,
    name: 'Bilişsel Davranış Terapisinde Bilinçli Uygulama',
    author: 'James F. Boswell',
    price: '459₺',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FBilişselDavranışlarTerapisindeBilinçliUygulama.jpg?alt=media&token=e8952a31-7223-416e-9d2c-7650ca20e4ac',
    publishPlace: 'İSTANBUL',
    publisher: 'Sola Unitas',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789750852460',
    feature: 'Özel Baskı',
    condition: 'Yeni',
    shipping: 'Ücretsiz Kargo'
  },
  3: {
    id: 3,
    name: "BİRİNCİ DÜNYA SAVAŞI'NDA İSTANBUL'A YAPILAN HAVA SALDIRILARI",
    author: 'EMİN KURT - MESUT GÜVENBAŞ',
    price: '64₺',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FBirinciDünyaSavaşındaİstanbulaYapılanHavaSaldırıları.jpg?alt=media&token=7ab943d6-e322-4d8e-86b6-6f9f9bafa012',
    publishPlace: 'İSTANBUL',
    publisher: 'İş Bankası Kültür Yayınları',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789750852461',
    feature: 'Özel Baskı',
    condition: 'Yeni',
    shipping: 'Ücretsiz Kargo'
  },
  4: {
    id: 4,
    name: 'DENİZLER ALTINDA YİRMİ BİN FERSAH',
    author: 'Jules Verne',
    price: '70₺',
    publisher: 'Klasik Yayınları',
    publishPlace: 'İstanbul',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789754589632',
    condition: 'Yeni',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FDenizlerAltındaYirmiBinFersah.jpg?alt=media&token=79394dce-68e8-4e44-8dfa-89fef9552dd4',
    seller: 'Klasik Kitapevi',
    sellerStats: '1250',
    shipping: 'Ücretsiz Kargo'
  },
  5: {
    id: 5,
    name: 'GÖNÜL SOHBETLERİ GÜLDESTESİ IV',
    author: 'FEYZİ HALICI, H. YURDABAK, A. SATOĞLU',
    price: '5₺',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FGönülSohbetleri.jpg?alt=media&token=5405b291-8104-4453-ba30-8986bbea29c6',
    publishPlace: 'İSTANBUL',
    publisher: 'Türk Edebiyatı Vakfı Yayınları',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789754589123',
    feature: 'Özel Baskı',
    condition: 'Yeni',
    seller: 'Türk Edebiyatı Vakfı',
    sellerStats: '850',
    shipping: 'Alıcıya Ait'
  },
  6: {
    id: 6,
    name: 'Hükümdar ve Siyaset Kitabı',
    author: 'İbn Abdirabbih',
    price: '20₺',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FHükümdarVeSiyaset.jpg?alt=media&token=34e177a0-485e-4519-8ae8-a50ddb6974db',
    publishPlace: 'İSTANBUL',
    publisher: 'Klasik Yayınları',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789759114862',
    feature: 'Çeviri Eser',
    condition: 'Yeni',
    seller: 'Klasik Kitapevi',
    sellerStats: '750',
    shipping: 'Alıcıya Ait'
  },
  7: {
    id: 7,
    name: 'SAKIN BÜYÜME ÇOCUK',
    author: 'MUHANMET RECEPARAR',
    price: '40₺',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FSakınBüyümeÇocuk.jpg?alt=media&token=b0a4c968-8301-4868-8a95-de5aec1fd8fa',
    publishPlace: 'İSTANBUL',
    publisher: 'Yediveren Yayınları',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9786057428776',
    feature: 'İlk Baskı',
    condition: 'Yeni',
    seller: 'Yediveren Kitabevi',
    sellerStats: '920',
    shipping: 'Alıcıya Ait'
  },
  8: {
    id: 8,
    name: 'TARİHİ GERÇEKLER IŞIĞINDA BELGELERLE MUSTAFA KEMAL ATATÜRK',
    author: 'YUSUF KOÇ - ALİ KOÇ',
    price: '37₺',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FTarihiGerçeklerIşığındaMustafaKemalAtatürk.jpg?alt=media&token=4acb074e-94e5-432a-9fd4-09708e34be14',
    publishPlace: 'İSTANBUL',
    publisher: 'Türk Tarih Kurumu',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789751633057',
    feature: 'Araştırma-İnceleme',
    condition: 'Yeni',
    seller: 'Türk Tarih Kurumu Yayınevi',
    sellerStats: '980',
    shipping: 'Alıcıya Ait'
  },
  9: {
    id: 9,
    name: 'THE ICE ROSE',
    author: 'EUROPE AFS',
    price: '14₺',
    image: '/images/books/TheIceRose.jpg',
    publishPlace: 'LONDON',
    publisher: 'Penguin Books, 2023',
    language: 'İngilizce',
    cover: 'Paperback',
    isbn: '9780241567234',
    feature: 'First Edition',
    condition: 'New',
    shipping: 'Buyer Pays'
  },
  10: {
    id: 10,
    name: 'TÜRKİYE TÜRKÇESİ GRAMERİ ŞEKİL BİLGİSİ',
    author: 'ZEYNEP KORKMAZ',
    price: '65₺',
    image: '/images/books/TürkiyeTürkçesiGrameriŞekilBilgisi.jpg',
    publishPlace: 'ANKARA',
    publisher: 'TDK Yayınları, 2023',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789751608474',
    feature: 'Akademik Yayın',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  11: {
    id: 11,
    name: 'Yalnız Adamın Hayalleri',
    author: 'J.J RUSSEAU',
    price: '15₺',
    image: '/images/books/YalnızAdamınHayalleri.jpg',
    publishPlace: 'İSTANBUL',
    publisher: 'İletişim Yayınları, 2022',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789750528492',
    feature: 'Çeviri Eser',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  12: {
    id: 12,
    name: 'YAZILAR YAZGILAR GİBİDİR SİLİNMEZ',
    author: 'TÜRKER GÖKSEL',
    price: '4,50₺',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FYazılarYazgılarGibidirSilinmez.jpg?alt=media&token=f705acfd-5639-4f24-a634-aa77a549522b',
    publishPlace: 'İSTANBUL',
    publisher: 'Yapı Kredi Yayınları',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789750852470',
    feature: 'Özel Baskı',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  }
}

onMounted(() => {
  const bookId = parseInt(String(route.params.id))
  book.value = bookDetails[bookId]
  
  if (!book.value) {
    console.error('Kitap bulunamadı:', bookId)
    router.push('/')
  }
})

const addToCart = () => {
  if (book.value) {
    cartStore.addItemToCart({
      id: book.value.id,
      title: book.value.name,
      price: book.value.price,
      seller: book.value.publisher || 'Belirtilmemiş',
      image: book.value.image,
      quantity: 1
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

.book-detail-container {
  flex: 1;
  padding: 20px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.book-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.book-layout {
  display: grid;
  grid-template-columns: 300px minmax(400px, 1fr) 300px;
  gap: 30px;
  padding: 20px;
}

.book-image-column {
  flex: 0 0 300px;
}

.book-image-column img {
  width: 100%;
  height: auto;
  border: 1px solid #eee;
  padding: 10px;
}

.book-info-column {
  flex: 1;
}

.book-info-column h1 {
  color: #146eb2;
  font-size: 24px;
  margin-bottom: 15px;
}

.author {
  color: #666;
  font-size: 18px;
  margin-bottom: 20px;
}

.price {
  color: #931818;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.info-row {
  display: flex;
  gap: 15px;
}

.info-group {
  display: flex;
  flex-direction: column;
}

.info-item {
  font-size: 14px;
  color: #333;
}

.info-label {
  font-weight: bold;
}

.info-value {
  margin-left: 10px;
}

.buttons {
  display: flex;
  gap: 15px;
}

button {
  padding: 12px 25px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.add-to-cart {
  background: #931818;
  color: white;
}

.ask-question {
  background: #faf7ec;
  color: #931818;
  border: 1px solid #931818;
}

.add-to-cart:disabled {
  background: #f5f5f5;
  color: #666;
  cursor: default;
  border: 1px solid #ddd;
}

.seller-info-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.seller-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.seller-box h3 {
  color: #146eb2;
  font-size: 20px;
  margin-bottom: 10px;
}

.seller-stats {
  color: #666;
  font-size: 16px;
}

.shipping-info {
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;
}

.shipping-prices {
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;
}

.free-shipping-info {
  color: #666;
  font-size: 16px;
}

.seller-links {
  display: flex;
  gap: 10px;
}

.seller-link {
  color: #146eb2;
  text-decoration: none;
}
</style> 