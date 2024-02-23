<script setup lang="ts">
import Input from './Input.vue';
import Button from './Button.vue';
import Select from './Select.vue';
import { inject } from 'vue';
import { searchFormKey, SearchFormKeyValues } from '../keys.ts';

const {
  searchBy,
  searchTerm,
  searchByOptions,
  sortByOptions,
  sortBy,
  onSubmit,
  onReset
} = inject(searchFormKey) as SearchFormKeyValues
</script>

<template>
  <form @submit.prevent="onSubmit" class="flex gap-2">
    <Select v-model="searchBy" :options="searchByOptions" />
    <Input v-model="searchTerm" type="text" placeholder="Search..." />
    <Select v-model="sortBy" :options="sortByOptions" />
    <Button type="submit">
      Search
    </Button>
    <Button variant="danger" type="reset" @click="onReset">
      Reset
    </Button>
  </form>
</template>
