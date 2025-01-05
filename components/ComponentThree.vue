<template>
    <div class="menu-container">
      <ul class="main-menu">
        <li>
          <a href="#">Kitaplar</a>
          <ul class="sub-menu">
            <li><a href="#">Bilim ve Teknik</a></li>
            <li><a href="#">Çizgi Roman</a></li>
            <li><a href="#">Çocuk Kitapları</a></li>
            <li><a href="#">Din</a></li>
            <li><a href="#">Edebiyat</a></li>
            <li><a href="#">Ekonomi & İş Dünyası</a></li>
            <li><a href="#">Felsefe & Düşünce</a></li>
            <li><a href="#">Referans & Başvuru</a></li>
            <li><a href="#">Sağlık</a></li>
            <li><a href="#">Sanat</a></li>
            <li><a href="#">Tarih</a></li>
            <li><a href="#">Diğer & Çeşitli</a></li>
          </ul>
        </li>
        <li><a href="#">Dergiler</a></li>
        <li><a href="#">Sanat&Koleksiyon</a></li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ComponentThree',
  });
  </script>
  
  <style scoped>
  .menu-container {
    background-color: #faf7ec;
    padding: 20px;
    width: 250px;
  }
  
  .main-menu {
    list-style: none;
    padding: 0;
  }
  
  .main-menu > li {
    color: #931818;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .main-menu a {
    color: #931818;
    text-decoration: none;
    display: block;
  }
  
  .main-menu a:hover {
    text-decoration: underline;
  }
  
  .sub-menu {
    list-style: none;
    padding-left: 7px;
  }
  
  .sub-menu > li {
    color: #606060;
    font-size: 0.9em;
    font-weight: normal;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  
  .sub-menu > li::before {
    content: ">";
    margin-right: 8px;
    color: #931818;
    font-weight: bold; 
  }
  
  .sub-menu > li a {
    color: #606060; 
      text-decoration: none;
  }
  
  .sub-menu > li a:hover {
    text-decoration: underline;
  }
  
  .kitaplar-menu {
    background: white;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  .kitaplar-menu h2 {
    color: #931818;
    font-size: 18px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  
  .menu-item {
    padding: 8px 0;
    color: #333;
    text-decoration: none;
    display: block;
    font-size: 14px;
    border-bottom: 1px solid #f5f5f5;
  }
  
  .menu-item:hover {
    color: #931818;
    background: #f9f9f9;
  }
  </style>
  