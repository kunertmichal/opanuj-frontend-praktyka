<script setup lang="ts">
import { inject } from 'vue';
import { scoreKey, ScoreKeyValues } from '../keys.ts';

const { goodGuess, badGuess } = inject(scoreKey) as ScoreKeyValues
</script>

<template>
  <div class="my-4">
    <p class="text-center">
      Good guesses: {{ goodGuess }}
    </p>
    <p class="text-center">
      Bad guesses: {{ badGuess }}
    </p>
  </div>
</template>
