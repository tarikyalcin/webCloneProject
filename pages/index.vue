<template>
  <div class="home-container">
    <Header />
    <div class="main-content">
      <div class="top-section">
        <ComponentThree class="left-menu" />
        <Slider class="slider-section" />
      </div>
      <div class="bottom-content">
        <div class="center-content">
          <ComponentFour />
        </div>
        <div class="right-menu">
          <BlogPosts />
          <IslemRehberi />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ComponentThree from '~/components/ComponentThree.vue'
import ComponentFour from '~/components/ComponentFour.vue'
import Slider from '~/components/Slider.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import IslemRehberi from '~/components/IslemRehberi.vue'
</script> 