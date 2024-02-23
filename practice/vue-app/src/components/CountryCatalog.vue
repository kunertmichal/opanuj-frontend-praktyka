<script setup lang="ts">
import { provide, ref, watch } from 'vue';
import { countriesService } from '../services/countries';
import { type Country, type Category, type SortBy } from '../types.ts';
import { type SelectOptions } from './Select.vue';
import SearchResult from './SearchResult.vue';
import SearchForm from './SearchForm.vue';
import { searchFormKey, searchResultKey } from '../keys.ts';
import { sortCountries } from '../utils.ts';

const foundCountries = ref<Country[]>([]);
const category = ref<Category>('name');
const searchTerm = ref('');
const sortBy = ref<SortBy>('name:asc');

const categories: SelectOptions = [
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
  try {
    const response = await countriesService.searchCountryDataBy(category.value, searchTerm.value);
    foundCountries.value = sortCountries(response, sortBy.value);
  } catch (e) {
    foundCountries.value = [];
  }
}

watch([sortBy], () => {
  foundCountries.value = sortCountries(foundCountries.value, sortBy.value);
})

provide(searchFormKey, {
  category,
  categories,
  searchTerm,
  sortBy,
  sortByOptions,
  onReset: () => foundCountries.value = [],
  onSubmit
});
provide(searchResultKey, foundCountries);
</script>

<template>
  <div>
    <h1 class="text-2xl text-center font-bold mb-8">REST Countries</h1>
    <SearchForm />
    <SearchResult />
  </div>
</template>
