<script setup lang="ts">
import { provide, ref } from 'vue';
import { Country } from '../types.ts';
import { countriesService } from '../services/countries.ts';
import { gameBodyKey, scoreKey } from '../keys.ts';
import GameBody from './GameBody.vue';

const countryToGuess = ref<Country | null>(null)
const userInput = ref('')
const goodGuess = ref(0)
const badGuess = ref(0)

async function init() {
  const response = await countriesService.getAll()
  countryToGuess.value = response[Math.floor(Math.random() * response.length)]
}

async function check() {
  if (userInput.value.toLowerCase() === countryToGuess.value?.name.common.toLocaleLowerCase()) {
    goodGuess.value++
    void drawAgain()
  } else {
    alert('Wrong answer')
    badGuess.value++
    userInput.value = ''
  }
}

async function drawAgain() {
  userInput.value = ''
  countryToGuess.value = null
  init()
}

void init();

provide(scoreKey, {
  goodGuess,
  badGuess
})
provide(gameBodyKey, {
  countryToGuess,
  userInput,
  check,
  drawAgain,
})
</script>

<template>
  <div>
    <h1 class="text-2xl text-center font-bold">
      Country guessing game
    </h1>
    <GameBody v-if="countryToGuess" />
    <p v-else class="text-center">Loading...</p>
  </div>
</template>
