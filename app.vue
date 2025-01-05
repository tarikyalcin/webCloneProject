<template>
  <div class="app-container">
    <!-- Router view ekleyelim -->
    <router-view></router-view>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.top-section {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.left-menu {
  flex: 0 0 250px;
  background: white;
  border-radius: 4px;
  padding: 15px;
  height: fit-content;
}

.slider-section {
  flex: 1;
}

.bottom-content {
  display: flex;
  gap: 20px;
}

.center-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.right-menu {
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Global stiller */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f5f5f5;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
}
</style>