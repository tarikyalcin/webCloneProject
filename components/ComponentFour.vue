<template>
  <div class="container">
    <h1 class="title">📚 Son Eklenenler</h1>
    <div class="book-grid">
      <div v-for="book in books" :key="book.id" class="book-item">
        <NuxtLink :to="`/book/${book.id}`">
          <img :src="book.image" alt="Book Image" class="book-image" />
          <div class="book-info">
            <h3>{{ truncatedTitle(book.name) }}</h3> 
            <p class="author-price">
              <span class="author">{{ truncatedAuthor(book.author) }}</span> - <span class="price">{{ book.price }}</span>
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Book {
  id: number;
  name: string;
  author: string;
  price: string;
  image: string;
}

const books = ref<Book[]>([
  { id: 1, name: 'Avrasyada Şamanlar', author: 'MIHALY HOPPAL', price: '90,00 ₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FAvrasyadaŞamanlar.jpg?alt=media&token=0b3998f4-1960-4020-85df-a744f1d899c6' },
  { id: 2, name: 'Bilişsel Davranış Terapisinde Bilinçli Uygulama', author: 'James F. Boswell', price: '459₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FBilişselDavranışlarTerapisindeBilinçliUygulama.jpg?alt=media&token=e8952a31-7223-416e-9d2c-7650ca20e4ac' },
  { id: 3, name: "BİRİNCİ DÜNYA SAVAŞI'NDA İSTANBUL'A YAPILAN HAVA SALDIRILARI", author: 'EMİN KURT - MESUT GÜVENBAŞ', price: '64₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FBirinciDünyaSavaşındaİstanbulaYapılanHavaSaldırıları.jpg?alt=media&token=7ab943d6-e322-4d8e-86b6-6f9f9bafa012' },
  { id: 4, name: 'DENİZLER ALTINDA YİRMİ BİN FERSAH', author: 'Jules Verne', price: '70₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FDenizlerAltındaYirmiBinFersah.jpg?alt=media&token=79394dce-68e8-4e44-8dfa-89fef9552dd4' },
  { id: 5, name: 'GÖNÜL SOHBETLERİ GÜLDESTESİ IV', author: 'FEYZİ HALICI, H. YURDABAK, A. SATOĞLU', price: '5₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FGönülSohbetleri.jpg?alt=media&token=5405b291-8104-4453-ba30-8986bbea29c6' },
  { id: 6, name: 'Hükümdar ve Siyaset Kitabı', author: 'İbn Abdirabbih', price: '20₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FHükümdarVeSiyaset.jpg?alt=media&token=34e177a0-485e-4519-8ae8-a50ddb6974db' },
  { id: 7, name: 'SAKIN BÜYÜME ÇOCUK', author: 'MUHANMET RECEPARAR', price: '40₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FSakınBüyümeÇocuk.jpg?alt=media&token=b0a4c968-8301-4868-8a95-de5aec1fd8fa' },
  { id: 8, name: 'TARİHİ GERÇEKLER IŞIĞINDA BELGELERLE MUSTAFA KEMAL ATATÜRK', author: 'YUSUF KOÇ - ALİ KOÇ', price: '37₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FTarihiGerçeklerIşığındaMustafaKemalAtatürk.jpg?alt=media&token=4acb074e-94e5-432a-9fd4-09708e34be14' },
  { id: 9, name: 'THE ICE ROSE', author: 'EUROPE AFS', price: '14₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FTheIceRose.jpg?alt=media&token=52a97a54-3451-4e8d-8536-a0c5b7d5a583' },
  { id: 10, name: 'TÜRKİYE TÜRKÇESİ GRAMERİ ŞEKİL BİLGİSİ ', author: 'ZEYNEP KORKMAZ', price: '65₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FTürkiyeTürkçesiGrameriŞekilBilgisi.jpg?alt=media&token=57ba31c0-0e98-4cc9-84f4-2bae1a54e8a7' },
  { id: 11, name: 'Yalnız Adamın Hayalleri', author: 'J.J RUSSEAU', price: '15₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FYalnızAdamınHayalleri.jpg?alt=media&token=66cbd1c3-d6bc-427b-80b9-4b2c72679526' },
  { id: 12, name: 'YAZILAR YAZGILAR GİBİDİR SİLİNMEZ', author: 'TÜRKER GÖKSEL', price: '4,50₺', image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/books%2FYazılarYazgılarGibidirSilinmez.jpg?alt=media&token=f705acfd-5639-4f24-a634-aa77a549522b' }
])

const truncatedTitle = (title: string) => {
  return title.length > 20 ? title.slice(0, 20) + '...' : title;
}

const truncatedAuthor = (author: string) => {
  return author.length > 13 ? author.slice(0, 13) + '...' : author;
}
</script>

<style scoped>
.container {
  margin-top: -30px;
  background-color: #faf7ec;
  padding: 10px;
  border-radius: 8px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.title {
  color: #931818;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.book-item {
  text-align: center;
}

.book-image {
  width: 50%;
  height: auto;
  margin-bottom: 5px;
}

.book-info h3 {
  margin: 3px 0;
  font-size: 1rem;
  color: #23528e;
  white-space: nowrap; /* Tek satırda kalmasını içim */
  overflow: hidden;
  text-overflow: ellipsis; /* Uzun başlıkları kısmak için ... olarak */
}

.book-info p {
  margin: 0;
  font-size: 0.9rem;
}

.author-price {
  display: flex;
  justify-content: center;
  align-items: center;
}

.author {
  color: #acaaa3;
}

.price {
  color: black; 
}

.book-item a {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>
