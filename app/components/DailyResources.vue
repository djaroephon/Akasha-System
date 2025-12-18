<script setup>
// 1. DATA JADWAL (Sama seperti sebelumnya)
const schedule = {
  1: { // Senin
    day: "Senin",
    talents: ["Freedom", "Prosperity", "Transience", "Admonition", "Ingenuity", "Equity"],
    weapons: ["Decarabian", "Guyun", "Distant Sea", "Forest Dew", "Oasis Garden", "Chord"]
  },
  2: { // Selasa
    day: "Selasa",
    talents: ["Resistance", "Diligence", "Elegance", "Ingenuity", "Praxis", "Justice"],
    weapons: ["Boreal Wolf", "Mist Veiled", "Narukami", "Oasis Garden", "Remnant Glow", "Pure Sacred"]
  },
  3: { // Rabu
    day: "Rabu",
    talents: ["Ballad", "Gold", "Light", "Praxis", "Admonition", "Order"],
    weapons: ["Dandelion", "Aerosiderite", "Mask", "Scorching Might", "Forest Dew", "Sacre"]
  },
  4: { // Kamis -> Sama dengan Senin
    day: "Kamis",
    talents: ["Freedom", "Prosperity", "Transience", "Admonition", "Ingenuity", "Equity"],
    weapons: ["Decarabian", "Guyun", "Distant Sea", "Forest Dew", "Oasis Garden", "Chord"]
  },
  5: { // Jumat -> Sama dengan Selasa
    day: "Jumat",
    talents: ["Resistance", "Diligence", "Elegance", "Ingenuity", "Praxis", "Justice"],
    weapons: ["Boreal Wolf", "Mist Veiled", "Narukami", "Oasis Garden", "Remnant Glow", "Pure Sacred"]
  },
  6: { // Sabtu -> Sama dengan Rabu
    day: "Sabtu",
    talents: ["Ballad", "Gold", "Light", "Praxis", "Admonition", "Order"],
    weapons: ["Dandelion", "Aerosiderite", "Mask", "Scorching Might", "Forest Dew", "Sacre"]
  },
  0: { // Minggu
    day: "Minggu",
    isSunday: true,
    desc: "Hari Minggu semua domain terbuka! Pilih material yang paling kamu butuhkan."
  }
}

// 2. KAMUS GAMBAR (Mapping Nama -> URL CDN Paimon.moe)
// Ini trik biar kita gak usah download gambar satu-satu
const imageMap = {
  // Talents
  "Freedom": "teachings_of_freedom",
  "Resistance": "teachings_of_resistance",
  "Ballad": "teachings_of_ballad",
  "Prosperity": "teachings_of_prosperity",
  "Diligence": "teachings_of_diligence",
  "Gold": "teachings_of_gold",
  "Transience": "teachings_of_transience",
  "Elegance": "teachings_of_elegance",
  "Light": "teachings_of_light",
  "Admonition": "teachings_of_admonition",
  "Ingenuity": "teachings_of_ingenuity",
  "Praxis": "teachings_of_praxis",
  "Equity": "teachings_of_equity",
  "Justice": "teachings_of_justice",
  "Order": "teachings_of_order",
  
  // Weapons
  "Decarabian": "tile_of_decarabians_tower",
  "Boreal Wolf": "boreal_wolfs_milk_tooth",
  "Dandelion": "fetters_of_the_dandelion_gladiator",
  "Guyun": "luminous_sands_from_guyun",
  "Mist Veiled": "mist_veiled_lead_elixir",
  "Aerosiderite": "grain_of_aerosiderite",
  "Distant Sea": "coral_branch_of_a_distant_sea",
  "Narukami": "narukamis_wisdom",
  "Mask": "mask_of_the_wicked_lieutenant",
  "Forest Dew": "copper_talisman_of_the_forest_dew",
  "Oasis Garden": "oasis_gardens_reminiscence",
  "Scorching Might": "echo_of_scorching_might",
  "Remnant Glow": "broken_goblet_of_the_pristine_sea",
  "Pure Sacred": "teachings_of_the_pure_sacred_dewdrop", // Nama file kadang beda, perlu cek manual
  "Chord": "fragment_of_an_ancient_chord",
  "Sacre": "teachings_of_the_pure_sacred_dewdrop" 
}

// Helper Function: Bikin URL lengkap
const getIconUrl = (name) => {
  const slug = imageMap[name]
  if (!slug) return '/images/unknown.png' // Fallback kalau gambar gak ada
  // Kita pinjam CDN dari paimon.moe (semoga gak diblokir, kalau diblokir nanti kita download manual)
  return `https://paimon.moe/images/items/${slug}.png`
}

// Logic Hari
const todayIndex = new Date().getDay()
// const todayIndex = 1 // Debug: Paksa hari Senin
const todayData = schedule[todayIndex]
</script>

<template>
  <div class="mt-8 animate-fade-in-up">
    
    <div class="flex items-center gap-3 mb-6">
      <div class="h-8 w-1 bg-[#a7f669] rounded-full shadow-[0_0_10px_#a7f669]"></div>
      <h3 class="text-2xl font-bold text-white">
        Jadwal Domain: <span class="text-[#a7f669]">{{ todayData.day }}</span>
      </h3>
      <span v-if="todayData.isSunday" class="text-xs px-2 py-1 bg-[#dcb67d] text-[#1c1f2b] rounded font-bold ml-2">ALL OPEN</span>
    </div>

    <div v-if="todayData.isSunday" class="p-8 bg-[#dcb67d]/10 border border-[#dcb67d]/30 rounded-[2rem] text-center backdrop-blur-sm">
      <p class="text-[#dcb67d] text-xl font-bold">✨ {{ todayData.desc }} ✨</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div class="bg-[#151720]/60 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group hover:border-[#a7f669]/50 transition-all backdrop-blur-md">
        <h4 class="text-gray-400 text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-2 flex justify-between">
          <span>Talent Books</span>
          <span class="opacity-50 text-xs">Character Upgrade</span>
        </h4>
        
        <div class="grid grid-cols-3 sm:grid-cols-4 gap-4">
          <div v-for="item in todayData.talents" :key="item" class="flex flex-col items-center gap-2 group/item">
            
            <div class="relative w-16 h-16 rounded-xl bg-[#1c1f2b] border border-white/10 flex items-center justify-center overflow-hidden transition-all group-hover/item:border-[#a7f669] group-hover/item:shadow-[0_0_15px_rgba(167,246,105,0.3)]">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#3c4b68] opacity-60"></div>
              
              <img 
                :src="getIconUrl(item)" 
                :alt="item"
                class="w-12 h-12 object-contain relative z-10 group-hover/item:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            
            <span class="text-xs text-gray-400 group-hover/item:text-white text-center leading-tight">{{ item }}</span>
          </div>
        </div>
      </div>

      <div class="bg-[#151720]/60 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group hover:border-[#dcb67d]/50 transition-all backdrop-blur-md">
        <h4 class="text-gray-400 text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-2 flex justify-between">
          <span>Weapon Materials</span>
          <span class="opacity-50 text-xs">Weapon Ascension</span>
        </h4>
        
        <div class="grid grid-cols-3 sm:grid-cols-4 gap-4">
          <div v-for="item in todayData.weapons" :key="item" class="flex flex-col items-center gap-2 group/item">
            
            <div class="relative w-16 h-16 rounded-xl bg-[#1c1f2b] border border-white/10 flex items-center justify-center overflow-hidden transition-all group-hover/item:border-[#dcb67d] group-hover/item:shadow-[0_0_15px_rgba(220,182,125,0.3)]">
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#594836] opacity-60"></div>
              
              <img 
                :src="getIconUrl(item)" 
                :alt="item"
                class="w-12 h-12 object-contain relative z-10 group-hover/item:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            
            <span class="text-xs text-gray-400 group-hover/item:text-white text-center leading-tight">{{ item }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style> 