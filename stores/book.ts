import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/plugins/firebase';

// defineStore ile yeni bir store oluşturuyoruz
// 'book' parametresi store'un benzersiz ID'si
export const useBookStore = defineStore('book', {
  // State: Uygulamanın durumunu tutan değişkenler
  // Reactive (tepkisel) olarak değişiklikleri izler
  state: () => ({
    // books: Kitap listesini tutan dizi
    // Array<{...}> ile dizinin içindeki nesnelerin yapısını tanımlıyoruz
    books: [] as Array<{ 
      id: string;      // Kitabın benzersiz ID'si
      name: string;    // Kitap adı
      author: string;  // Yazar
      price: string;   // Fiyat
      image: string;   // Resim URL'i
    }>,
  }),

  // Actions: Store'daki state'i değiştiren fonksiyonlar
  // Async/await kullanarak asenkron işlemleri yönetiyoruz
  actions: {
    // Firestore'dan kitapları çeken fonksiyon
    async fetchBooks() {
      try {
        // collection(): Firestore'daki koleksiyonu seçer
        // getDocs(): Seçilen koleksiyondaki tüm dökümanları getirir
        const querySnapshot = await getDocs(collection(db, 'books'));

        // querySnapshot.docs: Tüm dökümanları içeren dizi
        // map() ile her dökümanı istediğimiz formata dönüştürüyoruz
        const booksArray = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || '',
            author: data.author || '',
            price: data.price || '',
            // Resim URL'sini Firebase Storage'dan alınan formatta güncelle
            image: data.image ? `https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.appspot.com/o/${encodeURIComponent(data.image)}?alt=media` : '',
          };
        });

        // this.books ile state'i güncelliyoruz
        // Bu güncelleme reactive olduğu için,
        // bu store'u kullanan tüm componentler otomatik güncellenir
        this.books = booksArray;
      } catch (error) {
        // Hata durumunda konsola yazdır
        console.error("Error fetching books: ", error);
      }
    },
  },

  // Getters: State'den türetilen hesaplanmış değerler (computed values)
  // Örnek getter:
  getters: {
    // Toplam kitap sayısını döndüren getter
    totalBooks: (state) => state.books.length,
    
    // Belirli bir fiyatın üzerindeki kitapları filtreleme
    expensiveBooks: (state) => {
      return (minPrice: number) => state.books.filter(book => 
        parseFloat(book.price) > minPrice
      )
    }
  }
});

/*
PINIA KULLANIMI:
1. Store Oluşturma:
   - defineStore ile yeni store oluşturulur
   - Benzersiz bir ID ve store yapısı tanımlanır

2. State Yönetimi:
   - state() içinde store'un durumu tanımlanır
   - Reactive olarak değişiklikler izlenir

3. Actions:
   - State'i değiştiren fonksiyonlar
   - Asenkron işlemler yapılabilir
   - API çağrıları burada yapılır

4. Getters:
   - State'den türetilen hesaplanmış değerler
   - Computed properties gibi çalışır

FIREBASE KULLANIMI:
1. Veri Çekme:
   - collection() ile koleksiyon seçilir
   - getDocs() ile dökümanlar çekilir
   - doc.data() ile döküman verileri alınır

2. Veri İşleme:
   - Gelen verileri uygun formata dönüştürme
   - State'e kaydetme

3. Hata Yönetimi:
   - try/catch ile hataları yakalama
   - Uygun hata mesajları gösterme

COMPONENT'LERDE KULLANIM:
import { useBookStore } from '@/stores/book'

const bookStore = useBookStore()
// State'e erişim: bookStore.books
// Action çağırma: await bookStore.fetchBooks()
// Getter kullanımı: bookStore.totalBooks
*/
