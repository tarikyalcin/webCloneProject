<script setup>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';

const books = ref([]);
const loading = ref(true);

onMounted(async () => {
  try {
    console.log('Veri alımı başlatıldı');
    // Firestore'dan veriyi alıyoruz
    const querySnapshot = await getDocs(collection(useNuxtApp().$db, 'books'));
    books.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log("Kitaplar başarıyla alındı:", books.value); // Kitapları konsola yazdırıyoruz
  } catch (error) {
    console.error("Veri alınırken hata oluştu:", error); // Hata mesajını burada yazdırıyoruz
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading">Kitaplar yükleniyor...</div>
  <div v-else>
    <ul>
      <li v-for="book in books" :key="book.id">
        <h3>{{ book.name }}</h3>
        <p>{{ book.author }}</p>
        <p>{{ book.price }}</p>
        <img :src="book.image" alt="Book image" />
      </li>
    </ul>
  </div>
</template>
