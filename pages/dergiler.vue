<template>
  <div>
    <Header />
    
    <div class="main-container">
      <!-- Sol Sidebar -->
      <div class="sidebar">
        <div class="categories">
          <h3>Dergiler</h3>
          <ul>
            <li><a href="#"><span class="category-arrow">></span> Bilgisayar</a></li>
            <li><a href="#"><span class="category-arrow">></span> Bilim, Teknik</a></li>
            <li><a href="#"><span class="category-arrow">></span> Çocuk</a></li>
            <li><a href="#"><span class="category-arrow">></span> Din, Felsefe</a></li>
            <li><a href="#"><span class="category-arrow">></span> Edebiyat</a></li>
            <li><a href="#"><span class="category-arrow">></span> Ekonomi, İktisat</a></li>
            <li><a href="#"><span class="category-arrow">></span> Gezi, Coğrafya</a></li>
            <li><a href="#"><span class="category-arrow">></span> Hukuk</a></li>
            <li><a href="#"><span class="category-arrow">></span> Kadın Dergileri</a></li>
            <li><a href="#"><span class="category-arrow">></span> Magazin, Moda</a></li>
            <li><a href="#"><span class="category-arrow">></span> Mimarlık, Dekorasyon</a></li>
            <li><a href="#"><span class="category-arrow">></span> Mizah, Karikatür</a></li>
            <li><a href="#"><span class="category-arrow">></span> Otomobil</a></li>
            <li><a href="#"><span class="category-arrow">></span> Sağlık, Yaşam</a></li>
            <li><a href="#"><span class="category-arrow">></span> Sanat</a></li>
            <li><a href="#"><span class="category-arrow">></span> Spor</a></li>
            <li><a href="#"><span class="category-arrow">></span> Tarih</a></li>
            <li><a href="#"><span class="category-arrow">></span> Toplum & Siyaset</a></li>
            <li><a href="#"><span class="category-arrow">></span> Yeme, İçme</a></li>
            <li><a href="#"><span class="category-arrow">></span> Diğer</a></li>
          </ul>
        </div>

        <BlogPosts />
        <IslemRehberi />
      </div>

      <!-- Ana İçerik -->
      <div class="main-content">
        <div class="search-section">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Dergiler kategorisinde ara" 
            class="search-input"
          />
          <button class="search-button" @click="search">ARA</button>
        </div>

        <div class="filter-section">
          <p>Dergiler kategorisindeki dergiler (Son 48 saat)</p>
          <div class="sort-section">
            <span>Sıralama Şekli</span>
            <select v-model="sortType">
              <option value="new">Yeni Gelenler</option>
              <option value="price-low">Fiyat (Düşükten Yükseğe)</option>
              <option value="price-high">Fiyat (Yüksekten Düşüğe)</option>
            </select>
          </div>
        </div>

        <div class="magazines-grid">
          <div v-for="magazine in sortedMagazines" 
               :key="magazine.id" 
               class="magazine-item">
            <div class="magazine-image">
              <img :src="magazine.image" 
                   :alt="magazine.title"
                   @error="handleImageError" />
            </div>
            <div class="magazine-info">
              <h3>{{ magazine.title }}</h3>
              <p class="editor">Editör: {{ magazine.editor }}</p>
              <div class="details">
                <p class="seller">
                  Satıcı: {{ magazine.seller }} 
                  <span class="rating">⭐⭐⭐⭐⭐</span>
                </p>
                <p class="publisher">
                  Yayınevi: {{ magazine.publisher }}, {{ magazine.year }}
                </p>
                <p class="condition">Kondisyon: {{ magazine.condition }}</p>
              </div>
              <div class="shipping">{{ magazine.shipping }}</div>
              <div class="price-section">
                <span class="price">{{ magazine.price }} TL</span>
                <button 
                  class="add-to-cart" 
                  @click="addToCart(magazine)"
                  :disabled="isInCart(magazine.id)"
                >
                  {{ isInCart(magazine.id) ? 'Sepete Eklendi' : 'Sepete Ekle' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer class="full-width-footer" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import BlogPosts from '~/components/BlogPosts.vue'
import IslemRehberi from '~/components/IslemRehberi.vue'

const cartStore = useCartStore()
const sortType = ref('new')
const searchQuery = ref('')

const categories = ref([
  { name: 'Bilgisayar', slug: 'bilgisayar' },
  { name: 'Bilim, Teknik', slug: 'bilim-teknik' },
  { name: 'Çocuk', slug: 'cocuk' },
  // ... diğer kategoriler
])

const magazines = ref([
  {
    id: 1,
    title: 'Değerler Eğitimi Dergisi Ded :Cilt 15/ Aralık- 2017 Sayı 34',
    editor: 'Prof.Dr.Recep Kaymakcan',
    seller: 'Hs Kitabevi',
    publisher: 'Ensar Yayınları',
    year: '2017',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait',
    price: '39,00',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/cüneyne11.jpg?alt=media&token=6d249105-9b8c-4bbe-8431-91e3df5ffe43'
  },
  {
    id: 2,
    title: 'Değerler Eğitimi Dergisi / Journal of Values Education 42 Cilt/Volume XIX December/Aralık 2021',
    editor: 'Prof.Dr.Recep Kaymakcan',
    seller: 'Hs Kitabevi',
    publisher: 'Ensar Neşriyat',
    year: '2021',
    condition: 'Yeni',
    shipping: 'Alıcıya Ait',
    price: '39,00',
    image: 'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/cüneyne12.jpg?alt=media&token=823a6875-3d11-436d-a8bc-99b21b538517'
  }
])

const sortedMagazines = computed(() => {
  let sorted = [...magazines.value]
  if (sortType.value === 'price-low') {
    sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
  } else if (sortType.value === 'price-high') {
    sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  }
  return sorted
})

const addToCart = (magazine) => {
  cartStore.addItemToCart({
    id: magazine.id,
    title: magazine.title,
    price: magazine.price,
    seller: magazine.seller,
    image: magazine.image,
    quantity: 1
  })
}

const isInCart = (id) => {
  return cartStore.items.some(item => item.id === id)
}

const handleImageError = (e) => {
  e.target.src = '/images/default-magazine.jpg'
}

const search = () => {
  // Arama fonksiyonu implementasyonu
  console.log('Searching for:', searchQuery.value)
}
</script>

<style scoped>
.full-width-header {
  width: 100%;
  background-color: #931818;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav a {
  color: white;
  text-decoration: none;
  padding: 8px 15px;
  margin: 0 5px;
  border-radius: 4px;
}

.header-nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.main-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  background-color: #fff;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
}

.categories {
  background-color: #faf7ec;
  padding: 15px;
  border-radius: 4px;
}

.categories h3 {
  color: #931818;
  margin-bottom: 15px;
  font-size: 18px;
}

.categories ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categories li {
  margin-bottom: 8px;
}

.categories a {
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px 0;
  font-size: 14px;
}

.categories a:hover {
  color: #931818;
}

.blog-section {
  margin-bottom: 20px;
}

.blog-section h3 {
  color: #931818;
  margin-bottom: 10px;
}

.blog-preview img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.islem-rehberi {
  background-color: #faf7ec;
  padding: 15px;
}

.islem-rehberi h3 {
  color: #931818;
  margin-bottom: 10px;
}

.islem-rehberi ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.islem-rehberi li {
  margin-bottom: 8px;
}

.islem-rehberi a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.main-content {
  flex: 1;
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
  background-color: #931818;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.sort-section select {
  padding: 5px;
  margin-left: 10px;
}

.magazines-grid {
  display: grid;
  gap: 20px;
}

.magazine-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid #eee;
  background-color: white;
}

.magazine-image img {
  width: 200px;
  height: auto;
}

.magazine-info {
  flex: 1;
}

.magazine-info h3 {
  color: #146eb2;
  margin-bottom: 10px;
}

.editor {
  color: #666;
  margin-bottom: 10px;
}

.details {
  margin: 15px 0;
}

.seller .rating {
  color: #ffd700;
  margin-left: 10px;
}

.shipping {
  color: #666;
  margin: 10px 0;
}

.price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.price {
  font-size: 24px;
  color: #931818;
  font-weight: bold;
}

.add-to-cart {
  padding: 10px 20px;
  background-color: #931818;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #7a1414;
}

.category-arrow {
  color: #931818;
  margin-right: 5px;
  font-weight: bold;
}
</style> 