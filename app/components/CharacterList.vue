<script setup>
const props = defineProps({
  characters: { type: Array, default: () => [] }
})
const emit = defineEmits(['select-char'])

const getElementColor = (el) => {
  const colors = {
    Pyro: 'text-red-400 bg-red-500/10 border-red-500/20',
    Hydro: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    Anemo: 'text-teal-300 bg-teal-500/10 border-teal-500/20',
    Electro: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    Dendro: 'text-[#a7f669] bg-[#a7f669]/10 border-[#a7f669]/20',
    Cryo: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
    Geo: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
  }
  return colors[el] || 'text-gray-400 border-gray-700'
}
</script>

<template>
  <div v-if="characters.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
    
    <div 
      v-for="char in characters" 
      :key="char.name"
      @click="$emit('select-char', char)"
      class="group relative bg-[#1a1c29]/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:border-white/20"
    >
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-white/5"></div>
      
      <div class="absolute top-2 right-2 z-10 flex gap-0.5">
         <div v-if="char.rarity === 5" class="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#FBBF24]"></div>
         <div v-else class="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#A78BFA]"></div>
      </div>

      <div class="aspect-[3/4] w-full relative overflow-hidden bg-gradient-to-b from-transparent to-black/20">
         <div class="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            :class="char.rarity === 5 ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/40 to-transparent' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/40 to-transparent'">
         </div>

         <img 
          :src="`https://paimon.moe/images/characters/${char.slug}.png`" 
          :alt="char.name"
          loading="lazy"
          class="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-500 ease-in-out"
          @error="$event.target.style.display='none'" 
         />
      </div>

      <div class="absolute bottom-0 w-full p-3 pt-8 bg-gradient-to-t from-[#0e1015] via-[#0e1015]/90 to-transparent">
        <h4 class="text-center text-sm font-bold text-gray-200 truncate group-hover:text-white transition-colors tracking-wide">
          {{ char.name }}
        </h4>
        
        <div class="flex justify-center items-center mt-2 gap-2">
           <span class="text-[10px] px-2 py-0.5 rounded-md border font-medium uppercase tracking-wider shadow-sm" :class="getElementColor(char.element)">
             {{ char.element }}
           </span>
        </div>
      </div>

      <div class="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#a7f669]/30 transition-colors pointer-events-none"></div>
    </div>
  </div>

  <div v-else class="flex flex-col items-center justify-center py-20 text-gray-600 animate-pulse">
    <div class="text-4xl mb-4">👾</div>
    <p class="text-lg font-medium">Data Not Found</p>
    <p class="text-sm">Try adjusting your filters.</p>
  </div>
</template>