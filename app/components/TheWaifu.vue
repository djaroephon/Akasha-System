<script setup>
const message = ref("Selamat datang, Traveler. Akasha siap digunakan.")
const isHovered = ref(false)

const talk = () => {
  const quotes = [
    "Jangan lupa cek resinmu hari ini!",
    "Perlu bantuan analisa artefak?",
    "Data Ley Line hari ini sudah diperbarui.",
    "Dunia ini penuh dengan teka-teki...",
    "Pengetahuan adalah hal yang berharga.",
    "KYAAAA YAMETEE",
  ]
  message.value = quotes[Math.floor(Math.random() * quotes.length)]
}
</script>

<template>
  <div class="fixed bottom-0 right-4 z-50 flex flex-col items-end pointer-events-none">
    
    <div class="pointer-events-auto mb-4 mr-8 relative max-w-[280px] animate-bounce-slow group">
      
      <div class="absolute -top-4 -left-4 z-20 filter drop-shadow-[0_0_8px_rgba(167,246,105,0.6)]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#a7f669]">
          <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177 7.547 7.547 0 01-1.705-1.715.75.75 0 00-1.152-.082A9.735 9.735 0 002.25 14.882a9.735 9.735 0 003.375 7.007.75.75 0 001.122-.978 7.538 7.538 0 01-1.033-2.697 9.763 9.763 0 004.303.578.75.75 0 00.617-.998a7.538 7.538 0 01-.357-2.653 9.737 9.737 0 004.963-3.605.75.75 0 00-.218-1.134 7.554 7.554 0 01-2.694-1.069 9.743 9.743 0 00.634-4.665zm-5.4 16.295a9.752 9.752 0 001.854-3.068 9.746 9.746 0 001.963-4.324 9.755 9.755 0 003.307.498 9.755 9.755 0 002.859-2.358 9.754 9.754 0 00-3.787 3.228 9.75 9.75 0 00-4.648 2.075 9.75 9.75 0 00-1.548 3.949z" clip-rule="evenodd" />
        </svg>
      </div>
      
      <div class="relative bg-[#f8fcf4]/95 text-gray-800 px-6 py-4 rounded-3xl rounded-br-sm shadow-[0_4px_20px_rgba(40,90,20,0.2)] border-2 border-[#c7d48b] overflow-hidden">
        
        <svg class="absolute -bottom-6 -right-6 w-32 h-32 text-green-800/10 rotate-12 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm197.6-470.4c-56.6-17.2-115.2-26.2-174.4-26.8 26.4-32 47.4-68.6 61.8-108.2 6.4-17.6-22.2-29-30.8-12.4-15.4 30-34.8 58.4-57.6 84.4-33.4-23.6-69-42.6-105.8-55.8-19.2-6.8-29.4 22.2-10.8 30.2 48 20.6 92.4 48.6 130.8 82.6-47.2 24.4-91.6 54.6-131.8 90.4-15.8 14 7.2 37 23 23 43.2-38.2 91.2-70.6 142.4-96 29.4 38 53.8 80.6 71.8 126.6 6.8 17.4 33.6 9.4 30-9.2-14.6-75.8-50.8-145.4-103.6-200.6 47.2 2.6 93.4 12.2 137.6 28.6 19.6 7.2 30.4-21.6 11-30.2z"/>
        </svg>

        <p class=" relative z-10 text-sm font-medium leading-relaxed font-serif tracking-wide">
          {{ message }}
        </p>
      </div>
    </div>

    <img 
      src="/images/nahida_balek.png" 
      alt="Assistant"
      class="h-[250px] w-auto object-contain drop-shadow-2xl transition-all duration-300 pointer-events-auto cursor-pointer hover:scale-105 origin-bottom"
      :class="{ 'brightness-110': isHovered }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @click="talk"
    />
    
  </div>
</template>

<style scoped>
.animate-bounce-slow {
  animation: float 4s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
</style>         