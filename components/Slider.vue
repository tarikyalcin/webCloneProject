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
      <img src="https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/slider%2Fkampanyalar.jpg?alt=media&token=0104ee52-7b3e-4163-b68b-80b804425e75" alt="Kampanyalar" />
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
  'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/slider%2Fimage1.jpg?alt=media&token=e20a5291-e7af-4b0a-9859-1ce7bfb6c296',
  'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/slider%2Fimage2.jpg?alt=media&token=baa0c231-0cf3-4c96-93ef-1e6eb905ea7f',
  'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/slider%2Fimage3.jpg?alt=media&token=f4f5ded9-bcc3-428b-9cc9-e94f6e51fa5a',
  'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/slider%2Fimage4.jpg?alt=media&token=9dbe649a-46e7-4562-95f4-321f0731c983',
  'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/slider%2Fimage5.jpg?alt=media&token=cf900a4d-1537-42a1-bdda-d1278d473494',
  'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/slider%2Fimage6.jpg?alt=media&token=7940e9b4-26fc-48d9-b87a-5372784eea91',
  'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/slider%2Fimage7.jpg?alt=media&token=53739a04-43cd-4274-854b-b1264e7d8e47',
  'https://firebasestorage.googleapis.com/v0/b/webfinal-714a8.firebasestorage.app/o/slider%2Fimage8.jpg?alt=media&token=82b75e77-23f5-4b05-9cf7-283139227634'
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
  