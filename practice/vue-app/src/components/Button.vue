<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'primary' | 'danger' }>(), {
  variant: 'primary',
})
</script>

<template>
  <button
    :class="{ 'bg-green-500 text-white': variant === 'primary', 'bg-red-500 text-white': variant === 'danger' }"
    class="px-4 rounded-md h-10"
  >
    <slot />
  </button>
</template>
