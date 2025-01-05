<template>
  <div class="admin-container">
    <h1>Footer Düzenle</h1>
    <form @submit.prevent="saveFooter">
      <div v-for="(section, index) in footerData" :key="index">
        <h3>{{ section.title }}</h3>
        <div v-for="(link, linkIndex) in section.links" :key="linkIndex">
          <input v-model="link.text" placeholder="Link metni" />
          <input v-model="link.url" placeholder="URL" />
        </div>
      </div>
      <button type="submit">Kaydet</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFooterStore } from '@/stores/footer'

const footerStore = useFooterStore()
const footerData = ref(null)

onMounted(async () => {
  await footerStore.fetchFooterData()
  footerData.value = footerStore.footerData
})

const saveFooter = async () => {
  await footerStore.updateFooterData(footerData.value)
}
</script> 