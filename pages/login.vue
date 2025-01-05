<template>
  <div class="login-container">
    <h1>Giriş Yap</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="E-posta" required />
      <input v-model="password" type="password" placeholder="Şifre" required />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Giriş yapılıyor...' : 'Giriş Yap' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    await authStore.login(email.value, password.value)
    // Başarılı girişte ana sayfaya yönlendir
    router.push('/')
  } catch (error) {
    console.error('Login error:', error)
  } finally {
    loading.value = false
  }
}
</script> 