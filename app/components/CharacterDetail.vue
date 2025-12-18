<script setup>
import { computed } from 'vue'

const props = defineProps({
  charData: Object,
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const getElementGradient = (el) => {
  const gradients = {
    Pyro: 'from-red-900/80',
    Hydro: 'from-blue-900/80',
    Anemo: 'from-teal-900/80',
    Electro: 'from-purple-900/80',
    Dendro: 'from-green-900/80',
    Cryo: 'from-cyan-900/80',
    Geo: 'from-yellow-900/80'
  }
  return gradients[el] || 'from-gray-900/80'
}

const getElementColor = (el) => {
  const colors = {
    Pyro: 'text-red-400 border-red-400/30 bg-red-400/10',
    Hydro: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
    Anemo: 'text-teal-300 border-teal-300/30 bg-teal-300/10',
    Electro: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
    Dendro: 'text-[#a7f669] border-[#a7f669]/30 bg-[#a7f669]/10',
    Cryo: 'text-cyan-200 border-cyan-200/30 bg-cyan-200/10',
    Geo: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
  }
  return colors[el] || 'text-gray-400'
}
</script>

<template>
  <Transition name="modal">
    <div v-if="isOpen && charData" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="$emit('close')"></div>

      <div class="relative w-full max-w-4xl bg-[#1a1c29] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        <div class="w-full md:w-5/12 relative bg-gradient-to-b h-64 md:h-auto overflow-hidden" :class="[getElementGradient(charData.element), 'to-[#1a1c29]']">
           <img 
             :src="`https://paimon.moe/images/characters/${charData.slug}.png`" 
             class="absolute bottom-0 left-1/2 -translate-x-1/2 h-[120%] object-cover drop-shadow-2xl"
           />
           <div class="absolute top-4 left-4 flex gap-1">
              <span v-for="i in charData.rarity" :key="i" class="text-yellow-400 text-xl drop-shadow-md">★</span>
           </div>
        </div>

        <div class="w-full md:w-7/12 p-8 overflow-y-auto custom-scrollbar">
           <div class="flex justify-between items-start mb-2">
              <div>
                 <h2 class="text-4xl font-black text-white mb-1">{{ charData.name }}</h2>
                 <p class="text-[#a7f669] italic">{{ charData.title || 'No Title' }}</p>
              </div>
              <button @click="$emit('close')" class="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                ✕
              </button>
           </div>

           <div class="flex flex-wrap gap-2 my-4">
              <span class="px-3 py-1 rounded-lg bg-black/30 border border-white/10 text-xs text-gray-300">{{ charData.region }}</span>
              <span class="px-3 py-1 rounded-lg bg-black/30 border border-white/10 text-xs text-gray-300">{{ charData.weapon }}</span>
              <span class="px-3 py-1 rounded-lg border text-xs" :class="getElementColor(charData.element)">{{ charData.element }}</span>
           </div>

           <div class="h-px w-full bg-white/10 my-6"></div>

           <div class="space-y-4 text-gray-300 text-sm leading-relaxed">
             <div>
               <h4 class="text-white font-bold mb-1">Description</h4>
               <p class="opacity-80">{{ charData.description }}</p>
             </div>
             
             <div class="grid grid-cols-2 gap-4 mt-4">
               <div class="bg-white/5 p-3 rounded-xl">
                 <span class="block text-xs text-gray-500 mb-1">Birthday</span>
                 <span class="text-white">{{ charData.birthday || 'Unknown' }}</span>
               </div>
               <div class="bg-white/5 p-3 rounded-xl">
                 <span class="block text-xs text-gray-500 mb-1">Constellation</span>
                 <span class="text-white">{{ charData.constellation }}</span>
               </div>
             </div>
             
             <div class="mt-4" v-if="charData.cv">
               <h4 class="text-white font-bold mb-2">Voice Actors</h4>
               <div class="grid grid-cols-2 gap-2 text-xs">
                  <div v-if="charData.cv.english">🇺🇸 {{ charData.cv.english }}</div>
                  <div v-if="charData.cv.japanese">🇯🇵 {{ charData.cv.japanese }}</div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
</style>