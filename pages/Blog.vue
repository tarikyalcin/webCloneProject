<template>
  <div class="page-container">
    <Header />
    
    <div class="blog-content">
      <BlogCard />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import BlogCard from '../components/BlogCard.vue'
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.blog-content {
  flex: 1;
  padding: 20px 50px;
  background: #f5f5f5;
}
</style> 