<!-- ComponentTen.vue -->
<template>
  <div class="ten">
    <div class="search-bar">
      <input type="text" placeholder="Dergiler kategorisinde ara" class="search-input"/>
      <button class="search-button">ARA</button>
    </div>

    <div class="filters">
      <span>Dergiler kategorisindeki dergiler (Son 48 saat)</span>
      <div class="siralama">
        <h4>Sıralama Şekli</h4>
        <div class="seciniz">
          Seçiniz
          <button>Yeni Gelenler</button>
        </div>
      </div>
    </div>

    <div class="dergi-listesi">
      <div class="dergi-box" v-for="(book, index) in books" :key="index">
        <img :src="book.image" :alt="book.title" class="dergi-img" />
        <div class="bilgiler">
          <h3 class="baslik">{{ book.title }}</h3>
          <p class="satici">Satıcı: <span class="red">{{ book.seller }}</span></p>
          <p class="yayinevi">Yayınevi: {{ book.publisher }}</p>
          <p class="kondisyon">
            Kondisyon: <span class="stars">{{ book.condition }}</span>
          </p>
        </div>
        <div class="fiyat-kismi">
          <span class="fiyat">{{ book.price }}</span>
          <button class="sepete-ekle" @click="addToCart(book)">Sepete Ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/cart';

export default defineComponent({
  name: 'ComponentTen',
  setup() {
    const cartStore = useCartStore();

    const books = [
      {
        title: 'Gelenek Kitap Dizisi sayı 19 Temmuz 1988',
        image: '/images/dergiler/gelenek.jpg',
        seller: 'Sahaf Standı',
        publisher: 'Gelenek Yayınları, 1988',
        condition: '★★★★  Çok İyi',
        price: '62,00 TL',
      },
      {
        title: 'Bonhams Magazine Winter 2005 john lennon art of sone cethedra',
        image: '/images/dergiler/bonhams.jpg',
        seller: 'Sahaf Standı',
        publisher: 'Bonhams, 2005',
        condition: '★★★★ Çok İyi',
        price: '25,00 TL',
      },
    ];

    const addToCart = (book: { title: string; price: string; seller: string }) => {
      cartStore.addItemToCart(book);
    };

    return { books, addToCart };
  },
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.search-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}
.search-button {
  padding: 10px 20px;
  background-color: #800000;
  color: white;
  border: none;
  cursor: pointer;
}
.filters {
  margin-bottom: 20px;
}
.siralama {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  border: 1px solid #dddddd;
  margin-top: 10px;
}
.seciniz {
  padding-top: 10px;
  font-size: 15px;
}
button {
  border-radius: 2px;
  border-color: #dadada;
  border-bottom: 3px solid #dadada;
  color: #931818;
  background-color: #ffffff;
}
.dergi-listesi {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.dergi-box {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
}
.dergi-img {
  width: 80px;
  height: auto;
  object-fit: cover;
  padding: 5px 20px;
  border: 1px solid #ddd;
}
.bilgiler {
  flex: 1;
  margin-left: 15px;
}
.ten .baslik {
  font-size: 16px;
  font-weight: bold;
  color: #146eb2;
}
.satici,
.yayinevi,
.kondisyon {
  margin: 5px 0;
  font-size: 14px;
  color: #333;
}
.fiyat-kismi {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
.fiyat {
  font-size: 18px;
  font-weight: bold;
  color: #146eb2;
}
.sepete-ekle {
  padding: 5px 10px;
  background-color: #faf7ec;
  color: #800000;
  border: none;
  cursor: pointer;
}
.stars {
  color: #d2bd7a;
}
.red {
  color: #800000;
}
</style>
