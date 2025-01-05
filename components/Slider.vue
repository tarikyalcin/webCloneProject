<template>
  <div class="slider-section">
    <!-- Blog ve Yardım butonları -->
    <div class="top-actions">
      <div class="left-actions">
        <router-link to="/blog">Blog</router-link>
        <a href="/yardim">Yardım</a>
      </div>
      <div class="right-actions">
        <a href="/language">English</a>
        <a href="https://instagram.com" target="_blank">
          <img src="/images/footer/insta.png" alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src="/images/footer/x.png" alt="Twitter" />
        </a>
      </div>
    </div>

    <!-- Ana slider -->
    <div class="slider-container">
      <button class="slider-arrow left" @click="prevSlide">❮</button>
      
      <div class="slider-content" :style="sliderStyle">
        <div v-for="(image, index) in images" 
             :key="index" 
             class="slide"
             :class="{ active: currentIndex === index }">
          <img :src="image" :alt="`Slide ${index + 1}`" />
        </div>
      </div>
      
      <button class="slider-arrow right" @click="nextSlide">❯</button>

      <!-- Slider dots -->
      <div class="slider-dots">
        <button v-for="(_, index) in images" 
                :key="index"
                :class="{ active: currentIndex === index }"
                @click="goToSlide(index)">
        </button>
      </div>
    </div>

    <!-- Kampanya banner -->
    <div class="campaign-banner">
      <img src="/images/slider/kampanyalar.jpg" alt="Kampanyalar" />
    </div>
  </div>
</template>

<style scoped>
.slider-section {
  padding: 20px 50px;
  background: #f5f5f5;
}

.top-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.left-actions, .right-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

.top-actions a {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.top-actions img {
  height: 20px;
  width: 20px;
}

.slider-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
}

.slider-content {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
}

.slide img {
  width: 100%;
  height: auto;
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  z-index: 2;
}

.slider-arrow.left { left: 10px; }
.slider-arrow.right { right: 10px; }

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.slider-dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
}

.slider-dots button.active {
  background: white;
}

.campaign-banner {
  margin-top: 20px;
  text-align: center;
}

.campaign-banner img {
  max-width: 100%;
  border-radius: 8px;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = ref([
  '/images/slider/image1.jpg',
  '/images/slider/image2.jpg',
  '/images/slider/image3.jpg',
  '/images/slider/image4.jpg',
  '/images/slider/image5.jpg',
  '/images/slider/image6.jpg',
  '/images/slider/image7.jpg',
  '/images/slider/image8.jpg'
])

const currentIndex = ref(0)
let intervalId = null

const sliderStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`
}))

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
  