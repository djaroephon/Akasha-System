<script setup>
import { ref } from 'vue'

// Import Component untuk setiap Tab
import Archives from '../components/Archives.vue'
import DailyResources from '../components/DailyResources.vue' 
import PrimoCalc from '~/components/PrimoCalc.vue' 
const activeTab = ref('daily') 
</script>

<template>
  <div class="min-h-screen bg-[#0e1015] p-4 md:p-8 text-white relative font-sans">
    
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#a7f669]/5 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]"></div>
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto space-y-8 pb-20">
      
      <div class="relative overflow-hidden rounded-[2.5rem] p-1 group">
        <div class="absolute inset-0 bg-gradient-to-br from-[#1c1f2b] via-[#1a2e22] to-[#0f1f15] rounded-[2.5rem] border border-[#a7f669]/10 group-hover:border-[#a7f669]/40 transition-all duration-500"></div>

        <div class="relative bg-[#151720]/40 backdrop-blur-xl rounded-[2.4rem] p-8 md:p-12 overflow-hidden">
            <svg class="absolute -right-12 -bottom-24 w-[300px] md:w-[500px] h-[300px] md:h-[500px] text-[#a7f669]/5 rotate-[15deg] group-hover:rotate-[5deg] group-hover:scale-105 transition-transform duration-1000 ease-in-out pointer-events-none z-0" viewBox="0 0 1024 1024" fill="currentColor">
                 <path d="M512.2 124.4c-130.7 8.7-246.5 77.5-311.1 178.3-13.3 20.8-24.6 42.6-33.9 65.4-6.6 16.2-12.6 32.7-17.9 49.6-21.3 67.5-26.6 140.4-13.3 212.8 2.9 16.1 6.6 31.9 11.1 47.4 21.9 74.8 64.2 142.2 121.1 194.9 23.5 21.8 49.4 40.9 77.4 56.9 5.3 3 10.7 5.9 16.1 8.7 28.1 14.4 57.7 25.9 88.4 34.2 10.4 2.8 20.9 5.3 31.5 7.4 19.7 4 39.7 6.8 59.7 8.4h2.5c1.8 0 3.6.1 5.3.1 100.4-2.3 195.7-32.4 274.9-83.7 79.1-51.2 141.6-123.7 177.6-210.6 15.7-37.8 27.2-77.7 34.2-118.9 1.7-9.9 3.1-19.8 4.2-29.8 5.3-48.8 3.3-98.3-6-146.7-9.2-48.4-27.4-94.7-53.2-136.5-49.3-79.7-120.5-143.1-203.9-181.3-36.8-16.9-75.8-29.3-116.1-37-10.1-1.9-20.2-3.5-30.4-5-50.9-6.9-102.3-7.8-153.1-4.1zM512 317.7c57.5-4.5 107.5 43.2 101.7 100.8 86.2 23.2 128.5 109.1 96.9 183.7-19.7 46.5-62.9 80.2-116 89.3 11.8 65.5-37 128.1-103.5 125.4-60.4-2.5-105.9-58.3-97.5-118.2-61.7-22.3-100.2-89.3-85.1-158.3 16.9-77.3 88.9-129.1 170.7-115.3 1.1-61.6 57.9-110.4 122.8-107.4v0z"/>
            </svg>
            
            <div class="relative z-20">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-4xl animate-pulse text-[#a7f669]">❖</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-white tracking-wide drop-shadow-md">
                        Dashboard <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#a7f669] to-[#dcb67d]">Akasha</span>
                    </h2>
                </div>
                
                <p class="text-gray-300 max-w-lg text-base md:text-lg leading-relaxed font-light mb-8">
                Akses pengetahuan Teyvat secara real-time. Kelola jadwal farming, hitung resin, dan optimalkan build karaktermu dengan kebijaksanaan <span class="text-[#dcb67d] font-semibold">Lesser Lord Kusanali</span>.
                </p>

                <button @click="activeTab = 'chars'" class="px-8 py-3 bg-gradient-to-r from-[#1c1f2b] to-[#1a2e22] border border-[#a7f669]/30 text-[#a7f669] font-bold rounded-xl hover:bg-[#a7f669]/10 hover:border-[#a7f669] hover:shadow-[0_0_30px_rgba(167,246,105,0.2)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group-btn relative overflow-hidden">
                    <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-btn-hover:animate-shimmer"></span>
                    <span>Buka Archives</span>
                </button>
            </div>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div @click="activeTab = 'daily'"
          class="group relative bg-[#151720]/60 backdrop-blur-md border p-6 rounded-[2rem] transition-all duration-300 cursor-pointer h-40 flex flex-col justify-center items-center gap-3 overflow-hidden hover:-translate-y-1"
          :class="activeTab === 'daily' ? 'border-[#a7f669] bg-[#a7f669]/10 shadow-[0_0_20px_rgba(167,246,105,0.2)]' : 'border-[#a7f669]/10 hover:border-[#a7f669]/50'"
        >
          <div class="text-3xl filter drop-shadow-lg group-hover:scale-110 transition">📅</div>
          <h3 class="font-bold text-sm md:text-base text-gray-200 group-hover:text-[#a7f669] transition-colors">Daily Farm</h3>
        </div>
        
        <div @click="activeTab = 'primo'"
          class="group relative bg-[#151720]/60 backdrop-blur-md border p-6 rounded-[2rem] transition-all duration-300 cursor-pointer h-40 flex flex-col justify-center items-center gap-3 overflow-hidden hover:-translate-y-1"
          :class="activeTab === 'primo' ? 'border-pink-500 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.2)]' : 'border-pink-500/10 hover:border-pink-500/50'"
        >
          <div class="text-3xl filter drop-shadow-lg group-hover:scale-110 transition">💎</div>
          <h3 class="font-bold text-sm md:text-base text-gray-200 group-hover:text-pink-400 transition-colors">Wishes Planner</h3>
        </div>

        <div @click="activeTab = 'chars'"
          class="group relative bg-[#151720]/60 backdrop-blur-md border p-6 rounded-[2rem] transition-all duration-300 cursor-pointer h-40 flex flex-col justify-center items-center gap-3 overflow-hidden hover:-translate-y-1"
          :class="activeTab === 'chars' ? 'border-blue-400 bg-blue-400/10 shadow-[0_0_20px_rgba(96,165,250,0.2)]' : 'border-blue-400/10 hover:border-blue-400/50'"
        >
          <div class="text-3xl filter drop-shadow-lg group-hover:scale-110 transition">📖</div>
          <h3 class="font-bold text-sm md:text-base text-gray-200 group-hover:text-blue-400 transition-colors">Archives</h3>
        </div>

        <div @click="activeTab = 'ai'"
          class="group relative bg-[#151720]/60 backdrop-blur-md border border-[#a7f669]/10 p-6 rounded-[2rem] transition-all duration-300 cursor-pointer h-40 flex flex-col justify-center items-center gap-3 overflow-hidden hover:-translate-y-1"
          :class="activeTab === 'ai' ? 'border-[#a7f669] bg-[#a7f669]/10 shadow-[0_0_20px_rgba(167,246,105,0.2)]' : 'hover:border-[#a7f669]/50 hover:bg-[#151720]/80'"
        >
          <div class="text-3xl filter drop-shadow-lg group-hover:scale-110 transition">🤖</div>
          <h3 class="font-bold text-sm md:text-base text-gray-200 group-hover:text-[#a7f669] transition-colors">AI Analyzer</h3>
        </div>

      </div>

      <div class="min-h-[300px] transition-all duration-500">
          
          <DailyResources v-if="activeTab === 'daily'" />

          
          <PrimoCalc v-if="activeTab === 'primo'" />
          <Archives v-if="activeTab === 'chars'" />

          <div v-if="activeTab === 'ai'" class="text-center p-12 bg-[#a7f669]/5 border border-[#a7f669]/20 rounded-[2rem] mt-8">
              <div class="text-4xl mb-4">🚧</div>
              <h3 class="text-xl font-bold text-[#a7f669] mb-2">Tunggu nahida Siap belajar dan cari data</h3>
              <p class="text-gray-400">Nahida sedang belajar Di Akademiya</p>
          </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer { 100% { transform: translateX(100%); } }
.group-btn:hover .group-btn-hover\:animate-shimmer { animation: shimmer 1s infinite; }

.v-enter-active, .v-leave-active { transition: opacity 0.3s ease; }
.v-enter-from, .v-leave-to { opacity: 0; }
</style>