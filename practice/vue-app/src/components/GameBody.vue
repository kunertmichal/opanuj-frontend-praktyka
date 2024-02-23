<script setup lang="ts">
import Score from './Score.vue';
import Input from './Input.vue';
import Button from './Button.vue';
import { inject } from 'vue';
import { gameBodyKey, type GameBodyKeyValues } from '../keys.ts';

const {
  countryToGuess,
  userInput,
  check,
  drawAgain
} = inject(gameBodyKey) as GameBodyKeyValues
</script>

<template>
  <div v-if="countryToGuess" class="max-w-xs mx-auto space-y-4 text-center">
    <Score />
    <img :src="countryToGuess.flags.png" :alt="countryToGuess.name.common">
    <form class="flex gap-2" @submit.prevent="check">
      <Input v-model="userInput" placeholder="Guess the country" />
      <Button>Check</Button>
    </form>
    <p>or</p>
    <Button
      variant="danger"
      @click="drawAgain"
    >
      Draw again
    </Button>
  </div>
</template>
