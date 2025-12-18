<script setup>
import genshin from 'genshin-db'
import { ref, computed, onMounted } from 'vue'
import CharacterList from './CharacterList.vue'
import CharacterDetail from './CharacterDetail.vue'
import MyWaifu from './MyWaifu.vue'

const allChars = ref([])
const searchQuery = ref('')
const selectedElement = ref('All')
const activeTab = ref('all') 
const showModal = ref(false)
const selectedCharDetail = ref(null)
const elements = ['All', 'Pyro', 'Hydro', 'Anemo', 'Electro', 'Dendro', 'Cryo', 'Geo']

onMounted(() => {
  const names = genshin.characters('names', { matchCategories: true })
  allChars.value = names.map(name => {
    const data = genshin.characters(name)
    return {
      name: data.name,
      element: data.element,
      rarity: Number(data.rarity),
      weapon: data.weaponType,
      region: data.region,
      slug: data.name.toLowerCase().replace(/ /g, '_').replace(/'/g, '')
    }
  })
})

const filteredAllChars = computed(() => {
  return allChars.value.filter(char => {
    const matchName = char.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchElement = selectedElement.value === 'All' || char.element === selectedElement.value
    return matchName && matchElement
  })
})

const openDetail = (char) => {
  const fullData = genshin.characters(char.name)
  selectedCharDetail.value = { ...char, description: fullData.description, birthday: fullData.birthday, constellation: fullData.constellation, cv: fullData.cv, title: fullData.title }
  showModal.value = true
}
</script>

<template>
  <div class="animate-fade-in-up">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 bg-[#151720]/40 p-4 rounded-2xl border border-white/5">
        <div class="flex bg-black/40 p-1 rounded-xl">
          <button @click="activeTab = 'all'" class="px-4 py-2 rounded-lg text-sm transition-all" :class="activeTab === 'all' ? 'bg-[#a7f669] text-black font-bold' : 'text-gray-400 hover:text-white'">All Data</button>
          <button @click="activeTab = 'waifu'" class="px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2" :class="activeTab === 'waifu' ? 'bg-pink-500 text-white font-bold' : 'text-gray-400 hover:text-white'"><span>💖</span> Waifu</button>
        </div>

        <div class="flex gap-2 w-full md:w-auto">
            <select v-model="selectedElement" class="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-sm text-gray-300 outline-none focus:border-[#a7f669]"><option v-for="el in elements" :key="el" :value="el">{{ el }}</option></select>
            <input v-model="searchQuery" type="text" placeholder="Search..." class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-white outline-none focus:border-[#a7f669]" />
        </div>
    </div>

    <div v-if="activeTab === 'all'"><CharacterList :characters="filteredAllChars" @select-char="openDetail" /></div>
    <div v-else><MyWaifu :all-data="allChars" :search="searchQuery" :element-filter="selectedElement" @select-char="openDetail" /></div>

    <CharacterDetail :is-open="showModal" :char-data="selectedCharDetail" @close="showModal = false" />
  </div>
</template>