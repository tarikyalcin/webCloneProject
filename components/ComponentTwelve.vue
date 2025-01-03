<template>
    <div class="book-container">
      <div class="book-item">
        <!-- Fotoğraf (1/4) -->
        <div class="book-image">
          <img :src="book.image" alt="Book Image" />
        </div>
  
        <!-- Kitap Bilgileri, Sosyal Medya, Ürün Bilgileri ve Butonlar (orta sütun) -->
        <div class="book-info">
          <h3>{{ book.name }}</h3>
          <p class="author">{{ book.author }}</p>
          <p class="price">
            {{ book.price }}
            <span class="social-media">
              <a href="#" class="facebook">Facebook</a>
              <a href="#" class="twitter">Twitter</a>
            </span>
          </p>
  
          <!-- Ürün Bilgileri -->
          <div class="product-details">
            <div class="separator"></div>
            <div class="product-info">
              <div class="info-item"><strong>Ürün Kodu:</strong> 39766505</div>
              <div class="info-item"><strong>Stokta:</strong> 1 adet var</div>
              <div class="info-item"><strong>Çeviren:</strong> </div>
              <div class="info-item"><strong>Hazırlayan:</strong> Yayınevi: Sola Unitas</div>
              <div class="info-item"><strong>Yayın Yeri:</strong> </div>
              <div class="info-item"><strong>Dili:</strong> Türkçe</div>
              <div class="info-item"><strong>Cildi:</strong> Karton Kapaklı</div>
              <div class="info-item"><strong>ISBN NO:</strong> -</div>
              <div class="info-item"><strong>Özellik:</strong> Birinci Baskı</div>
              <div class="info-item"><strong>Durum:</strong> Yeni</div>
              <div class="info-item"><strong>Kondisyon:</strong> </div>
              <div class="info-item"><strong>Kargo:</strong> Alıcıya Ait</div>
            </div>
          </div>
  
          <!-- Sepete Ekle ve Soru Sor Butonları -->
          <div class="buttons">
            <button class="add-to-cart">Sepete Ekle</button>
            <button class="ask-question">Soru Sor</button>
          </div>
        </div>
  
        <!-- Blog ve Diğer Linkler -->
        <div class="book-blog">
          <div class="separator"></div>
          <p><strong>Heimat Kitap</strong><br />3898 işlemde %99 başarı</p>
          <div class="separator"></div>
          <p>Heimat Kitap tüm Türkiye'ye Kolay Gelsin Kargo & NadirKitap anlaşması ile gönderim yapmaktadır;</p>
          <p>Tek kitap kargo ücreti: 119.00 TL(KDV dahil)</p>
          <p>2 ve daha fazla kitap: 129.00 TL (Adet limiti olmaksızın, KDV dahil)</p>
          <p><a href="#">Daha fazla bilgi</a></p>
          <div class="separator"></div>
          <p>📚 <a href="#">Tüm Kitaplarına Gözat</a></p>
          <div class="separator"></div>
          <p>📰 <a href="#">Sanat & Koleksiyon</a></p>
          <div class="separator"></div>
          <p>💬 <a href="#">Hakkındaki Yorumlar</a></p>
          <div class="separator"></div>
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
  
  const book = ref<Book>({
    id: 2,
    name: 'Bilişsel Davranış Terapisinde Bilinçli Uygulama',
    author: 'James F. Boswell',
    price: '439₺',
    image: '/images/books/BilişselDavranışlarTerapisindeBilinçliUygulama.jpg',
  })
  </script>
  
  <style scoped>
  .book-container {
    display: flex;
    justify-content: center;
    padding: 0 5rem;
    background-color: white;
  }
  
  .book-item {
    display: flex;
    width: 100%;
    max-width: 1200px;
  }
  
  .book-image img {
    width: 100%;
    max-width: 1500px; /* Fotoğraf boyutunu 4-5 kat daha büyük yapmak için genişliği artırdım */
    height: auto;
  }
  
  .book-info {
    margin-left: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .book-info h3 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0.3rem 0;
  }
  
  .author {
    font-size: 0.8rem;
    font-weight: normal;
    margin: 0.2rem 0;
  }
  
  .price {
    color: #0099b5;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0;
  }
  
  .social-media a {
    margin-left: 0.3rem;
    text-decoration: none;
  }
  
  .product-details {
    margin-top: 0.5rem;
  }
  
  .product-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 6'lı sütun düzeni */
    gap: 1rem; /* Hücreler arası boşluk */
  }
  
  .info-item {
    font-size: 0.8rem;
    margin: 0.2rem 0;
  }
  
  .separator {
    border-top: 1px solid #000;
    margin: 0.5rem 0;
  }
  
  .buttons {
    display: flex;
    gap: 0.8rem;
    margin-top: 0.8rem;
  }
  
  .add-to-cart,
  .ask-question {
    padding: 0.4rem 1.5rem;
    font-size: 0.9rem;
    border: none;
    cursor: pointer;
  }
  
  .add-to-cart {
    background-color: #931818;
    color: white;
  }
  
  .ask-question {
    background-color: #f9f9f9;
    border: 1px solid #ccc;
  }
  
  .book-blog {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    max-width: 400px;
  }
  
  .book-blog p {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }
  
  .book-blog a {
    color: #931818;
  }
  </style>
  