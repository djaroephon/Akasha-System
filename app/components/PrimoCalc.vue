<script setup>
import { ref, computed } from 'vue'

const currentPrimos = ref(0)
const currentFates = ref(0)
const daysLeft = ref(21)
const hasWelkin = ref(false)

const calculation = computed(() => {
  let dailyIncome = 60
  if (hasWelkin.value) dailyIncome += 90
  const totalFromDaily = dailyIncome * daysLeft.value

  const totalPrimos = (currentPrimos.value || 0) + totalFromDaily
  const pullsFromPrimos = Math.floor(totalPrimos / 160)
  const totalPulls = pullsFromPrimos + (currentFates.value || 0)
  
  const guaranteedChance = (totalPulls / 180) * 100 
  
  return {
    dailyTotal: totalFromDaily,
    grandTotalPrimos: totalPrimos,
    totalPulls: totalPulls,
    guaranteedPercent: Math.min(guaranteedChance, 100).toFixed(1)
  }
})
</script>

<template>
  <div class="animate-fade-in-up grid grid-cols-1 md:grid-cols-2 gap-6">
    
    <div class="bg-[#151720]/60 backdrop-blur-md border border-pink-500/20 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-pink-500/40 transition-colors duration-500">
        <div class="absolute top-0 right-0 w-40 h-40 bg-pink-500/5 rounded-bl-full blur-2xl pointer-events-none transition-all group-hover:bg-pink-500/10"></div>

        <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-xl">📝</div>
            <span>Resource Input</span>
        </h3>

        <div class="space-y-6">
            <div class="grid grid-cols-2 gap-5">
                <div>
                    <label class="block text-xs font-medium text-gray-400 mb-2 ml-1">Current Primos</label>
                    <div class="relative group/input">
                        <input v-model.number="currentPrimos" type="number" min="0" class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:bg-black/60 outline-none transition-all placeholder-gray-600" placeholder="0" />
                        <span class="absolute right-3 top-3 text-lg opacity-50 grayscale group-focus-within/input:grayscale-0 group-focus-within/input:opacity-100 transition-all">💎</span>
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-medium text-gray-400 mb-2 ml-1">Current Fates</label>
                    <div class="relative group/input">
                        <input v-model.number="currentFates" type="number" min="0" class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-pink-500 focus:bg-black/60 outline-none transition-all placeholder-gray-600" placeholder="0" />
                        <span class="absolute right-3 top-3 text-lg opacity-50 grayscale group-focus-within/input:grayscale-0 group-focus-within/input:opacity-100 transition-all">🔮</span>
                    </div>
                </div>
            </div>

            <div class="bg-white/5 rounded-xl p-4 border border-white/5">
                <div class="flex justify-between items-center mb-4">
                    <label class="text-xs font-medium text-gray-400">Saving Duration</label>
                    <div class="flex items-center gap-2">
                        <input v-model.number="daysLeft" type="number" min="0" class="bg-transparent border-b border-pink-500/50 text-pink-400 font-bold w-12 text-center outline-none focus:border-pink-500" />
                        <span class="text-xs text-gray-500">Days</span>
                    </div>
                </div>
                <input v-model.number="daysLeft" type="range" min="0" max="180" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:accent-pink-400 transition-all"/>
            </div>

            <div class="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/5 cursor-pointer hover:bg-pink-500/10 hover:border-pink-500/30 transition-all duration-300" @click="hasWelkin = !hasWelkin">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-xl shadow-inner shadow-purple-500/20">🌙</div>
                    <div>
                        <p class="font-bold text-gray-200 text-sm">Welkin Moon</p>
                        <p class="text-xs text-gray-500">+90 Primos/day</p>
                    </div>
                </div>
                <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300" 
                     :class="hasWelkin ? 'bg-pink-500 border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]' : 'border-gray-600 bg-transparent'">
                    <svg v-if="hasWelkin" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-gradient-to-br from-[#1a1c29] to-[#2d1b2e] border border-pink-500/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.1)]">
        
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-600/20 rounded-full blur-[80px]"></div>

        <div class="relative z-10">
            <h3 class="text-pink-400/80 text-xs font-bold tracking-widest uppercase mb-2">Estimated Savings</h3>
            <div class="flex items-baseline gap-2">
                <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight">
                    {{ calculation.grandTotalPrimos.toLocaleString() }}
                </h2>
                <span class="text-2xl animate-pulse">💎</span>
            </div>
            <p class="text-sm text-gray-400 mt-2 flex items-center gap-2">
                <span class="inline-block w-2 h-2 rounded-full bg-green-400 shadow-[0_0_5px_rgba(74,222,128,0.8)]"></span>
                <span>Includes <span class="text-white font-bold">+{{ calculation.dailyTotal.toLocaleString() }}</span> from daily routine</span>
            </p>
        </div>

        <div class="my-8 relative z-10">
            <div class="bg-black/40 rounded-2xl p-6 border border-white/10 backdrop-blur-md shadow-xl">
                <div class="flex justify-between items-end mb-3">
                    <span class="text-gray-400 text-sm font-medium">Total Wishes Available</span>
                    <span class="text-3xl font-bold text-pink-300 drop-shadow-md">{{ calculation.totalPulls }} <span class="text-sm text-white/50 font-normal">Fates</span></span>
                </div>
                
                <div class="relative w-full h-4 bg-gray-800/50 rounded-full overflow-hidden shadow-inner border border-white/5">
                    <div class="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-pink-600 via-pink-500 to-purple-500 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(236,72,153,0.5)]" 
                         :style="`width: ${Math.min((calculation.totalPulls / 180) * 100, 100)}%`">
                         <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                    </div>
                </div>
                
                <div class="flex justify-between mt-2 text-[10px] text-gray-500 font-mono tracking-wide">
                    <span>0</span>
                    <span class="text-gray-400">Soft Pity (~75)</span>
                    <span class="text-white">180 (Guaranteed)</span>
                </div>
            </div>
        </div>

        <div class="relative z-10 bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-colors">
            <div class="flex items-start gap-4">
                <div class="shrink-0 p-2 bg-[#a7f669]/10 rounded-lg border border-[#a7f669]/20">
                    <img 
                      src="../assets/images/akasha.png" 
                      alt="Akasha" 
                      class="w-8 h-8 object-contain"
                    >
                </div>
                
                <div class="text-sm text-gray-300 leading-relaxed">
                    <span class="text-[#a7f669] font-bold block mb-1 tracking-wide">AKASHA TERMINAL OUTPUT:</span>
                    Dengan <strong>{{ calculation.totalPulls }} pulls</strong>, probabilitas mendapatkan karakter bintang 5 spesifik adalah 
                    <span class="text-white font-bold">{{ calculation.guaranteedPercent }}%</span>.
                    
                    <div class="mt-2 font-medium">
                        <span v-if="calculation.totalPulls >= 160" class="text-green-400">Status: Sangat Aman (Guaranteed).</span>
                        <span v-else-if="calculation.totalPulls >= 80" class="text-yellow-400">Status: 50/50 Gamble.</span>
                        <span v-else class="text-red-400">Status: Perlu Farming Lebih Giat.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>