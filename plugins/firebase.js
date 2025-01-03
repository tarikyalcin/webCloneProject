import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBun7LTRv29EaXgz2cMaSCj64OVyIxmzgE",
  authDomain: "webfinal-714a8.firebaseapp.com",
  projectId: "webfinal-714a8",
  storageBucket: "webfinal-714a8.appspot.com", // Düzeltildi
  messagingSenderId: "1079160509259",
  appId: "1:1079160509259:web:aca2d80847e070049acece",
  measurementId: "G-6L6LJVV6W8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Nuxt 3 plugin'i
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('db', db);
  console.log('Firebase bağlantısı başarıyla kuruldu');
});
