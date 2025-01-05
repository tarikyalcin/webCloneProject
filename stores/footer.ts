import { defineStore } from 'pinia'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/plugins/firebase'

export const useFooterStore = defineStore('footer', {
  state: () => ({
    footerData: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchFooterData() {
      this.loading = true
      try {
        const docRef = doc(db, 'settings', 'footer')
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          this.footerData = docSnap.data()
        }
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async updateFooterData(newData) {
      try {
        const docRef = doc(db, 'settings', 'footer')
        await updateDoc(docRef, newData)
        this.footerData = newData
      } catch (error) {
        this.error = error.message
      }
    }
  }
}) 