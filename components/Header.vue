<template>
  <div class="header-container">
    <div class="top-banner">
      Aradığınız Kitabın Adresi 📚 İndirimler ve Kampanyalar 👍 18 Yıldır Güvenle
    </div>
    
    <div class="main-header">
      <div class="logo">
        <NuxtLink to="/">
          📚 Nadir Kitap
        </NuxtLink>
      </div>
      
      <div class="search-container">
        <input 
          type="text" 
          placeholder="Satışta olan 11.240.649 kitap içinde" 
          class="search-input"
        />
        <button class="search-button">
          <i class="search-icon">🔍</i>
        </button>
      </div>

      <div class="user-actions">
        <a href="/yardim">Yardım</a>
        <a href="/kategoriler">Kategoriler</a>
        <NuxtLink to="/cart" class="cart-icon">
          🛒
        </NuxtLink>
      </div>
    </div>

    <nav class="nav-container">
      <div class="nav-content">
        <NuxtLink to="/detayli-ara">Detaylı Ara</NuxtLink>
        <NuxtLink to="/kitaplar">Kitaplar</NuxtLink>
        <NuxtLink to="/dergiler">Dergiler</NuxtLink>
        <NuxtLink to="/sanat-koleksiyon">Sanat & Koleksiyon</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/kitap-saticilari">Kitap Satıcıları</NuxtLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.header-container {
  width: 100%;
}

.top-banner {
  background: #c4a264;
  color: white;
  text-align: center;
  padding: 8px;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
}

.logo a {
  font-size: 24px;
  text-decoration: none;
  color: #931818;
  font-weight: bold;
}

.search-container {
  display: flex;
  flex: 1;
  max-width: 600px;
  margin: 0 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.search-button {
  padding: 10px 20px;
  background: #931818;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.user-actions {
  display: flex;
  gap: 20px;
  align-items: center;
}

.user-actions a {
  text-decoration: none;
  color: #333;
}

.cart-icon {
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
}

.nav-container {
  background-color: #931818;
  padding: 10px 0;
  width: 100%;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 40px;
}

.nav-content a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 5px 10px;
  transition: color 0.3s;
}

.nav-content a:hover {
  color: #faf7ec;
}
</style>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()
const cartItemCount = computed(() => cartStore.totalItems)
</script>
  