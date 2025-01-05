<template>
  <div class="home-container">
    <!-- Header -->
    <Header />

    <!-- Ana içerik bölümü -->
    <div class="main-content">
      <!-- Sol menü ve Slider yan yana -->
      <div class="top-section">
        <ComponentThree class="left-menu" />
        <Slider class="slider-section" />
      </div>

      <!-- Alt içerik -->
      <div class="bottom-content">
        <!-- Orta içerik -->
        <div class="center-content">
          <ComponentFour />
        </div>

        <!-- Sağ menü -->
        <div class="right-menu">
          <BlogPosts />
          <IslemRehberi />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ComponentThree from '@/components/ComponentThree.vue'
import ComponentFour from '@/components/ComponentFour.vue'
import Slider from '@/components/Slider.vue'
import BlogPosts from '@/components/BlogPosts.vue'
import IslemRehberi from '@/components/IslemRehberi.vue'
</script>

<style scoped>
/* Mevcut stiller buraya taşınacak */
</style> 