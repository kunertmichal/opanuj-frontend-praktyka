<script setup lang="ts">
export type SelectOptions = Array<{ value: string; label: string }>

defineProps<{
  options: SelectOptions
}>()

const model = defineModel()
</script>

<template>
  <select v-model="model" class="h-10 px-4 border-2 border-black rounded-md">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
