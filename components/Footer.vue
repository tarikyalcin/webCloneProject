<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-brand">
          <h2>NadirKitap</h2>
        </div>
        <div class="footer-columns">
          <div class="footer-column">
            <ul>
              <li><a href="#">Anasayfa</a></li>
              <li><a href="#">Bana Özel</a></li>
              <li><a href="#">Yardım</a></li>
            </ul>
            <hr class="footer-divider" />
            <div class="app-links">
              <div class="app-link">
                <img src="https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/footer%2Fapple.png?alt=media&token=5f2d0259-87fa-4cca-a675-e272fb980f52" alt="Apple Logo" />
              </div>
              <div class="app-link">
                <img src="https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/footer%2Fgoogle.png?alt=media&token=79246a1a-4c1d-480d-b250-3ec03acb9612" alt="Google Play Logo" />
              </div>
              <div class="app-link">
                <img src="https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/footer%2Fhuawei.jpg?alt=media&token=0eb1aa88-4414-4dff-93fc-11938475da07" alt="Huawei Logo" />
              </div>
            </div>
          </div>
          <div class="footer-column">
            <ul>
              <li><a href="#">Kategoriler</a></li>
              <li><a href="#">Sahaflar</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <hr class="footer-divider" />
            
          </div>
          <div class="footer-column">
            <ul>
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Detaylı Arama</a></li>
              <li><a href="#">Site Haritası</a></li>
            </ul>
            <hr class="footer-divider" />
          </div>
          <div class="footer-column">
            <ul>
              <li><a href="#">Kullanıcı Sözleşmesi</a></li>
              <li><a href="#">Gizlilik Politikası</a></li>
              <li><a href="#">Bize Ulaşın</a></li>
            </ul>
            <hr class="footer-divider" />
            <div class="social-links">
              
                    <span>🌍 EN</span>    
              
              <div class="social-icons">
                <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/footer%2Fx.png?alt=media&token=cfc23e3a-f623-440a-80ec-9eee919beb44" alt="Twitter Logo" /></a>
                <a href="#"><img src="https://console.firebase.google.com/u/0/project/webfinal-714a8/storage/webfinal-714a8.firebasestorage.app/files/~2Ffooter" alt="Instagram " /></a>
                <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/footer%2Fface.png?alt=media&token=b8e7bf48-d851-42ba-a0f2-add7d3238f09" alt="Facebook Logo" /></a>
              </div>
              <div class="small-image">
                <img src="https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/footer%2Ffooter_logo_troy.png?alt=media&token=211ca6d5-20f6-4db2-ad90-c299eb2b2cf0" alt="Küçük Görsel" />
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-additional-text">
          <p>Copyright 2007-2024 Nadirkitap Bilişim ve Reklamcılık A.Ş. Tüm Hakları Saklıdır.</p>
          <p>Bu siteye üye olanlar Kullanıcı Sözleşmesini okumuş ve kabul etmiş sayılırlar.</p>
          <p>Bilgilendirme! Çerezler NadirKitap.com deneyiminizi iyileştirmek için kullanılmaktadır.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #981515;
    color: white;
    padding: 40px 0;
  }
  .footer .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-brand {
    margin-bottom: 20px;
    text-align: center;
  }
  .footer-columns {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .footer-column {
    flex: 1;
    padding: 0 10px;
    text-align: center;
  }
  .footer-column ul {
    list-style: none;
    padding: 0;
  }
  .footer-column ul li {
    margin-bottom: 10px;
  }
  .footer-column ul li a {
    text-decoration: none;
    color: white;
  }
  .app-links {
    margin-top: 30px;
  margin-left: 20px;
  }
  .app-link {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 50px;
  }
  .app-link img {
    width: 120px;
    height: 40px;
    margin-right: 0px;
  }
  .footer-text {
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
  }
  .social-links {
    
    margin-top: 20px;
  }
  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .social-icons a {
    margin: 0 5px;
  }
  .social-icons img {
    width: 24px;
    height: 24px;
  }
  .small-image {
    margin-top: 10px;
  }
  .small-image img {
    width: 150px;
    height: 90px;
  }
  .footer-divider {
    width: 100%;
    border: 1px solid white;
    margin-top: 20px;
  }
  .footer-additional-text {
    margin-top: -100px;
    width: 80%; 
    text-align: center;
    font-size: 10px;
  }
  </style>