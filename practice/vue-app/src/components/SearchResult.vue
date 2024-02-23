<script setup lang="ts">
import { inject } from 'vue';
import { searchResultKey } from '../keys.ts';

const foundCountries = inject(searchResultKey)
</script>

<template>
  <ul class="grid grid-cols-3 gap-4">
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
