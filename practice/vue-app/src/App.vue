<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import { countriesService } from './services/countries';
import { type Country, type SearchBy, type SortBy } from './types.ts';
import { type SelectOptions } from './components/Select.vue';
import SearchResult from './components/SearchResult.vue';
import SearchForm from './components/SearchForm.vue';
import { searchFormKey, searchResultKey } from './keys.ts';
import { sortCountries } from './utils.ts';

const foundCountries = ref<Country[]>([]);
const searchBy = ref<SearchBy>('name');
const searchTerm = ref('');
const sortBy = ref<SortBy>('name:asc');

const searchByOptions: SelectOptions = [
  { value: 'name', label: 'Name' },
  { value: 'lang', label: 'Language' },
  { value: 'capital', label: 'Capital' },
  { value: 'currency', label: 'Currency' },
]

const sortByOptions: SelectOptions = [
  { value: 'name:asc', label: 'Name (asc)' },
  { value: 'name:desc', label: 'Name (desc)' },
  { value: 'population:asc', label: 'Population (asc)' },
  { value: 'population:desc', label: 'Population (desc)' },
]

async function onSubmit() {
  const response = await countriesService.getCountries(searchBy.value, searchTerm.value);
  foundCountries.value = sortCountries(response, sortBy.value);
}

watch([sortBy], () => {
  foundCountries.value = sortCountries(foundCountries.value, sortBy.value);
})

provide(searchFormKey, {
  searchBy,
  searchByOptions,
  searchTerm,
  sortBy,
  sortByOptions,
  onReset: () => foundCountries.value = [],
  onSubmit
});
provide(searchResultKey, foundCountries);
</script>

<template>
  <div class="max-w-3xl mx-auto p-8 bg-white">
    <h1 class="text-2xl text-center font-bold mb-8">REST Countries</h1>
    <SearchForm />
    <div v-if="foundCountries.length === 0" class="text-center mt-8">
      <h2 class="font-bold">No results</h2>
      <p>Provide a valid search</p>
    </div>
    <SearchResult v-else class="mt-8" />
  </div>
</template>
