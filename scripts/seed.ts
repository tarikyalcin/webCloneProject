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
    image: "/images/books/AvrasyadaŞamanlar.jpg",
    seller: "Yapı Kredi Yayınları",
    description: "Şamanizm üzerine kapsamlı bir araştırma",
    publishPlace: "İSTANBUL",
    publisher: "Yapı Kredi Yayınları",
    language: "Türkçe",
    cover: "Karton Kapak",
    isbn: "9789750852459",
    feature: "1. Baskı",
    condition: "Yeni",
    shipping: "Ücretsiz Kargo",
    category: "Tarih",
    stock: 50
  },
  {
    name: "BİRİNCİ DÜNYA SAVAŞI'NDA İSTANBUL'A YAPILAN HAVA SALDIRILARI",
    author: "EMİN KURT - MESUT GÜVENBAŞ",
    price: "64.00",
    image: "/images/books/BirinciDünyaSavaşındaİstanbulaYapılanHavaSaldırıları.jpg",
    seller: "Akdoğan Yayınevi",
    description: "Birinci Dünya Savaşı döneminde İstanbul'a yapılan hava saldırılarını anlatan detaylı bir araştırma",
    publishPlace: "İSTANBUL",
    publisher: "Akdoğan Yayınevi",
    language: "Türkçe",
    cover: "Karton Kapak",
    isbn: "9789750852463",
    feature: "1. Baskı",
    condition: "Yeni",
    shipping: "Alıcıya Ait",
    category: "Tarih",
    stock: 30
  },
  {
    name: "DENİZLER ALTINDA YİRMİ BİN FERSAH",
    author: "Jules Verne",
    price: "70.00",
    image: "/images/books/DenizlerAltındaYirmiBinFersah.jpg",
    seller: "İş Bankası Kültür Yayınları",
    description: "Jules Verne'in ünlü denizaltı macerası",
    publishPlace: "İSTANBUL",
    publisher: "İş Bankası Kültür Yayınları",
    language: "Türkçe",
    cover: "Karton Kapak",
    isbn: "9789750852464",
    feature: "Özel Baskı",
    condition: "Yeni",
    shipping: "Ücretsiz Kargo",
    category: "Roman",
    stock: 45
  },
  {
    name: "TARİHİ GERÇEKLER IŞIĞINDA BELGELERLE MUSTAFA KEMAL ATATÜRK",
    author: "YUSUF KOÇ - ALİ KOÇ",
    price: "37.00",
    image: "/images/books/TarihiGerçeklerIşığındaMustafaKemalAtatürk.jpg",
    seller: "Akdoğan Yayınevi",
    description: "Atatürk'ün hayatını belgelerle anlatan kapsamlı bir çalışma",
    publishPlace: "İSTANBUL",
    publisher: "Akdoğan Yayınevi",
    language: "Türkçe",
    cover: "Karton Kapak",
    isbn: "9789750852465",
    feature: "1. Baskı",
    condition: "Yeni",
    shipping: "Alıcıya Ait",
    category: "Tarih",
    stock: 60
  },
  {
    name: "THE ICE ROSE",
    author: "EUROPE AFS",
    price: "14.00",
    image: "/images/books/TheIceRose.jpg",
    seller: "Europe Publishing",
    description: "A thrilling mystery novel set in the Arctic",
    publishPlace: "LONDON",
    publisher: "Europe Publishing",
    language: "English",
    cover: "Paperback",
    isbn: "9789750852466",
    feature: "First Edition",
    condition: "New",
    shipping: "Free Shipping",
    category: "Fiction",
    stock: 25
  }
]

const magazines = [
  {
    title: "Cüneyne KSE Dergisi, Sayı 11",
    image: "/images/cüneyne11.jpg",
    seller: "Akdoğan Yayınevi ✓",
    publisher: "Akdoğan Yayınevi, 2023",
    condition: "★★★★ Yeni",
    price: "150.00",
    stock: 5,
    description: "Kültür, sanat ve edebiyat dergisi",
    language: "Türkçe",
    shipping: "Alıcıya Ait",
    category: "Dergi"
  },
  {
    title: "Cüneyne KSE Dergisi, Sayı 12",
    image: "/images/cüneyne12.jpg",
    seller: "Akdoğan Yayınevi ✓",
    publisher: "Akdoğan Yayınevi, 2024",
    condition: "★★★★ Yeni",
    price: "150.00",
    stock: 5,
    description: "Kültür, sanat ve edebiyat dergisi - Yeni sayı",
    language: "Türkçe",
    shipping: "Alıcıya Ait",
    category: "Dergi"
  }
]

const seedDatabase = async () => {
  try {
    // Kitapları ekle
    for (const book of books) {
      await addDoc(collection(db, 'books'), book)
      console.log(`Added book: ${book.name}`)
    }
    
    // Dergileri ekle
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