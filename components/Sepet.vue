tamam boşver şimdi sana 9. ve 10. component i atacağım ve senden sadece bunları incele hiçbir şey yapma tamam mı az sonra bunlar için bir kaç şey isteyeceğim senden


<!-- ComponentNine.vue -->
<template>
  <div class="nine">
    <div class="baslik">Sepetim</div>

    <div v-if="cartItems.length === 0" class="sepet-box">
      <img src="/images/sepet.jpg" alt="sepet" />
      <p>Sepetiniz Boş</p>
      <button class="ana-sayfa" @click="goToHomePage">Ana Sayfaya Dön</button>
    </div>

    <div v-else class="sepet-listesi">
      <div class="sepet-item" v-for="(item, index) in cartItems" :key="index">
        <h3 class="item-title">{{ item.title }}</h3>
        <p class="item-price">{{ item.price }}</p>
        <p class="item-seller">Satıcı: {{ item.seller }}</p>
        <button class="remove-button" @click="removeFromCart(index)">Kaldır</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '@/stores/cart';

export default defineComponent({
  name: 'ComponentNine',
  setup() {
    const cartStore = useCartStore();

    const cartItems = cartStore.cartItems;

    const removeFromCart = (index: number) => {
      cartStore.removeItemFromCart(index);
    };

    const goToHomePage = () => {
      // Ana sayfaya yönlendirme işlemi
      window.location.href = '/';
    };

    return { cartItems, removeFromCart, goToHomePage };
  },
});
</script>

<style scoped>
.baslik {
  margin-left: 100px;
  font-size: 20px;
}

.nine .sepet-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.nine .ana-sayfa {
  padding: 10px 20px;
  background-color: #931818;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.nine .sepet-listesi {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.nine .sepet-item {
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.nine .item-title {
  font-size: 16px;
  font-weight: bold;
  color: #146eb2;
}

.nine .item-price {
  font-size: 14px;
  color: #333;
}

.nine .item-seller {
  font-size: 12px;
  color: #800000;
}

.nine .remove-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #931818;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>