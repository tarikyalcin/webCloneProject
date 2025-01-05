import { defineStore } from 'pinia';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '~/plugins/firebase';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    userId: null
  }),

  actions: {
    addItemToCart(item) {
      const newItem = {
        ...item,
        quantity: 1
      }
      this.items.push(newItem)
      this.syncWithFirebase()
    },

    updateItemQuantity(item) {
      const index = this.items.findIndex(i => i.id === item.id)
      if (index !== -1) {
        this.items[index].quantity = item.quantity
        this.syncWithFirebase()
      }
    },

    removeItemFromCart(index) {
      this.items.splice(index, 1)
      this.syncWithFirebase()
    },

    async syncWithFirebase() {
      if (this.userId) {
        try {
          await setDoc(doc(db, 'users', this.userId, 'cart', 'current'), {
            items: this.items
          })
        } catch (error) {
          console.error('Cart sync error:', error)
        }
      }
    }
  },

  persist: true
})
