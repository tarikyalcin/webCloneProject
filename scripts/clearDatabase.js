import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, deleteDoc } from 'firebase/firestore'

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

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const clearCollection = async (collectionName) => {
  try {
    console.log(`Fetching documents from ${collectionName}...`)
    const querySnapshot = await getDocs(collection(db, collectionName))
    console.log(`Found ${querySnapshot.size} documents in ${collectionName}`)
    
    for (const doc of querySnapshot.docs) {
      await deleteDoc(doc.ref)
      await delay(500) // Her silme işlemi arasında 500ms bekle
      console.log(`Deleted document ${doc.id} from ${collectionName}`)
    }
    
    console.log(`Cleared ${collectionName} collection`)
  } catch (error) {
    console.error(`Error clearing ${collectionName}:`, error)
    throw error
  }
}

const clearDatabase = async () => {
  try {
    console.log('Starting database clear...')
    await clearCollection('books')
    await delay(1000) // Koleksiyonlar arası 1 saniye bekle
    await clearCollection('magazines')
    console.log('Database cleared successfully!')
  } catch (error) {
    console.error('Error clearing database:', error)
  }
}

clearDatabase() 