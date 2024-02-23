<script setup lang="ts">
  import { ref } from 'vue';
  import CountryCatalog from './components/CountryCatalog.vue';
  import CountryGuessingGame from './components/CountryGuessingGame.vue';

  const selectedMode = ref<'country-catalog' | 'country-guessing-game'>('country-catalog');
</script>

<template>
  <div class="max-w-3xl mx-auto p-8 bg-white">
    <div class="mb-16">
      <div class="text-center">
        <h3 class="font-bold">Select mode</h3>
        <label>
          <input
            v-model="selectedMode"
            value="country-catalog"
            type="radio"
          />
          <span class="ml-1">Country catalog</span>
        </label>
        <label class="ml-4">
          <input
            v-model="selectedMode"
            value="country-guessing-game"
            type="radio"
          />
          <span class="ml-1">Country guessing game</span>
        </label>
      </div>
    </div>
    <CountryCatalog v-if="selectedMode === 'country-catalog'" />
    <CountryGuessingGame v-if="selectedMode === 'country-guessing-game'" />
  </div>
</template>
