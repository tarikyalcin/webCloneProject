<template>
  <div v-if="book" class="page-container">
    <Header />
    
    <div class="book-detail-container">
      <div class="book-content">
        <div class="book-header">
          <div class="book-image">
            <img :src="book.image" :alt="book.name" />
          </div>
          <div class="book-info">
            <h1>{{ book.name }}</h1>
            <div class="author">{{ book.author }}</div>
            <div class="price">{{ book.price }}</div>
            <div class="product-info">
              <div class="info-item"><strong>Yayın Yeri:</strong> {{ book.publishPlace }}</div>
              <div class="info-item"><strong>Yayınevi:</strong> {{ book.publisher }}</div>
              <div class="info-item"><strong>Dili:</strong> {{ book.language }}</div>
              <div class="info-item"><strong>Cildi:</strong> {{ book.cover }}</div>
              <div class="info-item"><strong>ISBN:</strong> {{ book.isbn }}</div>
              <div class="info-item"><strong>Özellik:</strong> {{ book.feature }}</div>
              <div class="info-item"><strong>Durum:</strong> {{ book.condition }}</div>
              <div class="info-item"><strong>Kargo:</strong> {{ book.shipping }}</div>
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
    image: '/images/books/AvrasyadaŞamanlar.jpg',
    publishPlace: 'İSTANBUL',
    publisher: 'Yapı Kredi Yayınları, 2023',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789750848476',
    feature: 'Birinci Baskı',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  2: {
    id: 2,
    name: 'Bilişsel Davranış Terapisinde Bilinçli Uygulama',
    author: 'James F. Boswell',
    price: '459₺',
    image: '/images/books/BilişselDavranışlarTerapisindeBilinçliUygulama.jpg',
    publishPlace: 'ANKARA',
    publisher: 'Nobel Akademik, 2022',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9786257456982',
    feature: 'İkinci Baskı',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  3: {
    id: 3,
    name: "BİRİNCİ DÜNYA SAVAŞI'NDA İSTANBUL'A YAPILAN HAVA SALDIRILARI",
    author: 'EMİN KURT - MESUT GÜVENBAŞ',
    price: '64₺',
    image: '/images/books/BirinciDünyaSavaşındaİstanbulaYapılanHavaSaldırıları.jpg',
    publishPlace: 'İSTANBUL',
    publisher: 'Türk Tarih Kurumu, 2023',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789751636355',
    feature: 'Birinci Baskı',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  4: {
    id: 4,
    name: 'DENİZLER ALTINDA YİRMİ BİN FERSAH',
    author: 'Jules Verne',
    price: '70₺',
    image: '/images/books/DenizlerAltındaYirmiBinFersah.jpg',
    publishPlace: 'İSTANBUL',
    publisher: 'İş Bankası Kültür Yayınları, 2023',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789944884235',
    feature: 'Özel Baskı',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  5: {
    id: 5,
    name: 'GÖNÜL SOHBETLERİ GÜLDESTESİ IV',
    author: 'FEYZİ HALICI, H. YURDABAK, A. SATOĞLU',
    price: '5₺',
    image: '/images/books/GönülSohbetleri.jpg',
    publishPlace: 'KONYA',
    publisher: 'Selçuk Üniversitesi Yayınları, 2021',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789751638523',
    feature: 'Sınırlı Sayıda',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  6: {
    id: 6,
    name: 'Hükümdar ve Siyaset Kitabı',
    author: 'İbn Abdirabbih',
    price: '20₺',
    image: '/images/books/HükümdarVeSiyaset.jpg',
    publishPlace: 'İSTANBUL',
    publisher: 'Klasik Yayınları, 2022',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789759114862',
    feature: 'Çeviri Eser',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  7: {
    id: 7,
    name: 'SAKIN BÜYÜME ÇOCUK',
    author: 'MUHANMET RECEPARAR',
    price: '40₺',
    image: '/images/books/SakınBüyümeÇocuk.jpg',
    publishPlace: 'İSTANBUL',
    publisher: 'Can Yayınları, 2023',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789750738524',
    feature: 'İlk Baskı',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  },
  8: {
    id: 8,
    name: 'TARİHİ GERÇEKLER IŞIĞINDA BELGELERLE MUSTAFA KEMAL ATATÜRK',
    author: 'YUSUF KOÇ - ALİ KOÇ',
    price: '37₺',
    image: '/images/books/TarihiGerçeklerIşığındaMustafaKemalAtatürk.jpg',
    publishPlace: 'ANKARA',
    publisher: 'Türk Tarih Kurumu, 2022',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789751627420',
    feature: 'Belgesel Nitelikli',
    condition: 'Yeni',
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
    image: '/images/books/YazılarYazgılarGibidirSilinmez.jpg',
    publishPlace: 'İSTANBUL',
    publisher: 'Yapı Kredi Yayınları, 2023',
    language: 'Türkçe',
    cover: 'Karton Kapak',
    isbn: '9789750852459',
    feature: 'İmzalı Özel Baskı',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait'
  }
}

onMounted(() => {
  console.log('Route params:', route.params) // Debug için
  const bookId = route.params.id
  book.value = bookDetails[bookId]
  
  if (!book.value) {
    console.error('Book not found:', bookId) // Debug için
    router.push('/')
  }
})

const addToCart = () => {
  if (book.value) {
    cartStore.addItemToCart({
      title: book.value.name,
      price: book.value.price,
      seller: book.value.publisher || 'Belirtilmemiş',
      image: book.value.image
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
  border-radius: 8px;
  padding: 30px;
}

.book-header {
  display: flex;
  gap: 40px;
}

.book-image {
  flex: 0 0 300px;
}

.book-image img {
  width: 100%;
  height: auto;
  border: 1px solid #eee;
  padding: 10px;
}

.book-info {
  flex: 1;
}

.book-info h1 {
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

.product-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.info-item {
  font-size: 14px;
  color: #333;
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
</style> 