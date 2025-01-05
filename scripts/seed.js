import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBun7LTRv29EaXgz2cMaSCj64OVyIxmzgE",
  authDomain: "webfinal-714a8.firebaseapp.com",
  projectId: "webfinal-714a8",
  storageBucket: "webfinal-714a8.appspot.com",
  messagingSenderId: "1079160509259",
  appId: "1:1079160509259:web:aca2d80847e070049acece",
  measurementId: "G-6L6LJVV6W8",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const books = [
  {
    name: "Avrasyada Şamanlar",
    author: "MIHALY HOPPAL",
    price: "215.00",
    // ... tüm kitap verileri
  },
  // ... diğer kitaplar
]

const magazines = [
  {
    title: "Cüneyne KSE Dergisi, Sayı 11",
    // ... dergi verileri
  },
  // ... diğer dergiler
]

const seedDatabase = async () => {
  try {
    for (const book of books) {
      await addDoc(collection(db, 'books'), book)
      console.log(`Added book: ${book.name}`)
    }
    
    for (const magazine of magazines) {
      await addDoc(collection(db, 'magazines'), magazine)
      console.log(`Added magazine: ${magazine.title}`)
    }
    
    console.log('Database seeding completed!')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}

seedDatabase() 