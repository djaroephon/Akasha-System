<script setup>
import { computed } from 'vue'
import CharacterList from './CharacterList.vue'

const props = defineProps({
  allData: { type: Array, default: () => [] },
  search: { type: String, default: '' },
  elementFilter: { type: String, default: 'All' }
})

const emit = defineEmits(['select-char'])

const myWaifuList = [
  'Kamisato Ayaka', 'Raiden Shogun', 'Ganyu', 'Nilou', 'Hu Tao', 'Keqing', 'Furina', 'Navia', 'Citlali', 'Sangonomiya Kokomi', 'Mona', 'Eula', 
]

const filteredWaifu = computed(() => {
  let waifus = props.allData.filter(char => myWaifuList.includes(char.name))
  return waifus.filter(char => {
    const matchName = char.name.toLowerCase().includes(props.search.toLowerCase())
    const matchElement = props.elementFilter === 'All' || char.element === props.elementFilter
    return matchName && matchElement
  })
})
</script>

<template>
  <div class="animate-slide-up">
    <div class="relative overflow-hidden rounded-3xl mb-8 p-8 border border-pink-500/20 bg-gradient-to-r from-pink-900/20 to-purple-900/20 backdrop-blur-sm">
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"></div>

        <div class="relative z-10 flex items-center gap-4">
            <div class="p-3 bg-pink-500/10 rounded-2xl border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                <span class="text-3xl">💖</span>
            </div>
            <div>
                <h2 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
                    My Istri
                </h2>
                <p class="text-sm text-pink-200/60 mt-1 max-w-md">
                    Istri banya tapi hidup damai 
                </p>
            </div>
        </div>
    </div>

    <CharacterList 
      :characters="filteredWaifu" 
      @select-char="(char) => $emit('select-char', char)" 
    />
  </div>
</template>

<style scoped>
.animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>