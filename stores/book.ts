import { defineStore } from 'pinia';
import { db } from '../plugins/firebase'; // firebase.js dosyasını import ettik
import { collection, getDocs } from 'firebase/firestore';

// Kitap mağazasını tanımlıyoruz
export const useBookStore = defineStore('book', {
  state: () => ({
    books: [] as Array<{ id: string; name: string; author: string; price: string; image: string }>, // Kitap verilerini tutan liste
  }),

  actions: {
    async fetchBooks() {
      try {
        const querySnapshot = await getDocs(collection(db, 'books')); // Firestore'daki books koleksiyonundan verileri çekiyoruz
        const booksArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.books = booksArray; // Kitap verilerini state'e atıyoruz
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    },
  },
});
