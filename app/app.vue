<script setup>
</script>

<template>
  <div class="min-h-screen bg-[#0c0f1d] text-[#e3e5e8] font-sans selection:bg-[#dcb67d] selection:text-black">
    
    <nav class="p-6 border-b border-white/5 flex justify-between items-center backdrop-blur-md fixed top-0 w-full z-50 bg-[#0c0f1d]/80">
      
      <div class="flex items-center gap-3">
        <img 
          src="./assets/images/akasha.png" 
          alt="Akasha System" 
          class="w-9 h-9 object-contain drop-shadow-[0_0_10px_rgba(167,246,105,0.5)] hover:scale-110 transition-transform duration-300"
        >
        
        <h1 class="text-xl font-bold tracking-widest uppercase text-white">
          Akasha
          <!-- <span class="text-[#a7f669]">.System</span> -->
        </h1>
      </div>

      </nav>

    <main class="pt-28 px-6 pb-32 container mx-auto">
      <NuxtPage /> 
    </main>

    <TheWaifu />
    
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0c0f1d;
}
::-webkit-scrollbar-thumb {
  background: #2a2e3b;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a7f669; 
}
</style>