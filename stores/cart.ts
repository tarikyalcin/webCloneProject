import { defineStore } from 'pinia';

interface CartItem {
  id: number;
  title: string;
  price: string;
  seller: string;
  image: string;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),

  actions: {
    addItemToCart(item: CartItem) {
      const existingItem = this.items.find(i => i.id === item.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...item, quantity: 1 })
      }
    },

    removeItemFromCart(itemId: number) {
      const index = this.items.findIndex(item => item.id === itemId)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },

    updateItemQuantity(itemId: number, quantity: number) {
      const item = this.items.find(i => i.id === itemId)
      if (item) {
        item.quantity = quantity
      }
    },

    clearCart() {
      this.items = []
    }
  },

  getters: {
    totalItems: (state) => state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₺', '').replace(',', '.'))
      return total + (price * item.quantity)
    }, 0)
  },

  persist: true // Sepet verilerini localStorage'da sakla
})
