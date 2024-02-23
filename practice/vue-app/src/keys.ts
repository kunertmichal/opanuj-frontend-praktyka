import { type InjectionKey, type Ref } from 'vue';
import { type Category, type Country, type SortBy } from './types.ts';
import { type SelectOptions } from './components/Select.vue';

export type SearchFormKeyValues = {
  category: Ref<Category>,
  searchTerm: Ref<string>,
  sortBy: Ref<SortBy>,
  categories: SelectOptions,
  sortByOptions: SelectOptions,
  onReset: () => void,
  onSubmit: () => Promise<void>
}

export type ScoreKeyValues = {
  goodGuess: Ref<number>,
  badGuess: Ref<number>
}

export type GameBodyKeyValues = {
  countryToGuess: Ref<Country | null>,
  userInput: Ref<string>,
  check: () => void,
  drawAgain: () => void
}

export const searchFormKey = Symbol() as InjectionKey<SearchFormKeyValues>
export const searchResultKey = Symbol() as InjectionKey<Ref<Country[]>>
export const scoreKey = Symbol() as InjectionKey<ScoreKeyValues>
export const gameBodyKey = Symbol() as InjectionKey<GameBodyKeyValues>