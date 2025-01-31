import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBun7LTRv29EaXgz2cMaSCj64OVyIxmzgE",
  authDomain: "webfinal-714a8.firebaseapp.com",
  projectId: "webfinal-714a8",
  storageBucket: "webfinal-714a8.appspot.com",
  messagingSenderId: "1079160509259",
  appId: "1:1079160509259:web:aca2d80847e070049acece",
  measurementId: "G-6L6LJVV6W8",
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore ve Auth instance'larını oluştur
const db = getFirestore(app);
const auth = getAuth(app);

// Nuxt plugin olarak export et
export default defineNuxtPlugin((nuxtApp) => {
  // Provide ile global olarak erişilebilir yap
  nuxtApp.provide('firebase', {
    app,
    db,
    auth
  })

  // Konsola başarılı mesajı
  console.log('Firebase initialized successfully')
})

// Diğer dosyalarda kullanmak için doğrudan export
export { db, auth }
