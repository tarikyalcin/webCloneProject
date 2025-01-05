<template>
  <div class="blog-posts">
    <h3>✏️ Blog'dan Son Yazılar</h3>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <a href="#">
          <h4>{{ post.title }}</h4>
          <span class="date">{{ post.date }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const posts = ref([
  {
    title: "Türkiye'de en ucuz emek, entelektüel emek!",
    date: "Aralık 2024"
  },
  {
    title: "Biz Çalıkuşu Nesliyiz!",
    date: "Ekim 2024"
  },
  {
    title: "Kitap yok olduğunda insan da yok olacak!",
    date: "Eylül 2024"
  },
  {
    title: "Anadolu Kitabı Koruyamamıştır.",
    date: "Haziran 2024"
  },
  {
    title: "Mimarlık Daima Siyasaldır.",
    date: "Kasım 2023"
  }
]);
</script>

<style scoped>
.blog-posts {
  background: white;
  padding: 15px;
  border-radius: 4px;
}

.blog-posts h3 {
  color: #931818;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.blog-posts ul {
  list-style: none;
  padding: 0;
}

.blog-posts li {
  margin-bottom: 8px;
}

.blog-posts h4 {
  color: #146eb2;
  font-size: 14px;
  margin: 0 0 3px 0;
  line-height: 1.3;
}

.blog-posts .date {
  color: #666;
  font-size: 12px;
  font-style: italic;
}

.blog-posts a {
  text-decoration: none;
}

.blog-posts a:hover h4 {
  text-decoration: underline;
}
</style> 