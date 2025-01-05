import { defineStore } from 'pinia'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '@/plugins/firebase'

export const useProductStore = defineStore('products', {
  state: () => ({
    books: [],
    magazines: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchBooks() {
      this.loading = true
      try {
        const querySnapshot = await getDocs(collection(db, 'books'))
        this.books = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async fetchMagazines() {
      this.loading = true
      try {
        const querySnapshot = await getDocs(collection(db, 'magazines'))
        this.magazines = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async getBookById(id) {
      try {
        const docRef = doc(db, 'books', id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() }
        }
        return null
      } catch (error) {
        this.error = error.message
        return null
      }
    }
  }
}) 