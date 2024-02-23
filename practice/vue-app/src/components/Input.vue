<script setup lang="ts">
withDefaults(defineProps<{ placeholder: string }>(), {
  placeholder: '',
})

const model = defineModel()
</script>

<template>
  <input
    v-model="model"
    class="w-full px-4 h-10 border-2 border-black rounded-md"
    :placeholder="placeholder"
    type="text"
  />
</template>
