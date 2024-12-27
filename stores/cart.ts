import { defineStore } from 'pinia';

// Sepet mağazasını tanımlıyoruz
export const useCartStore = defineStore('cart', {
  // State: Sepet verilerini burada tutuyoruz
  state: () => ({
    cartItems: [] as Array<{ title: string; price: string; seller: string }>, // Sepet öğelerini tutan liste
  }),

  // Actions: Sepete ekleme ve çıkarma işlemleri
  actions: {
    // Sepete öğe eklemek için fonksiyon
    addItemToCart(item: { title: string; price: string; seller: string }) {
      this.cartItems.push(item); // Yeni öğeyi sepete ekle
    },

    // Sepetten öğe kaldırmak için fonksiyon
    removeItemFromCart(index: number) {
      this.cartItems.splice(index, 1); // Belirtilen indisteki öğeyi çıkar
    },
  },
});
