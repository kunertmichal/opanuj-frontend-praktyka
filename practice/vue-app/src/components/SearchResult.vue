<script setup lang="ts">
import { inject, Ref } from 'vue';
import { searchResultKey } from '../keys.ts';
import { Country } from '../types.ts';

const foundCountries = inject(searchResultKey) as Ref<Country[]>;
</script>

<template>
  <div v-if="foundCountries.length === 0" class="text-center mt-8">
    <h2 class="font-bold">No results</h2>
    <p>Provide a valid search</p>
  </div>
  <ul v-else class="grid grid-cols-3 gap-4 mt-8">
    <li
      v-for="country in foundCountries"
      :key="country.name.common"
      class="p-2 border-2 border-black rounded-md"
    >
      <h3>{{ country.name.common }}</h3>
      <img :src="country.flags.png" :alt="country.name.common">
    </li>
  </ul>
</template>
