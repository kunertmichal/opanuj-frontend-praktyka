import { type InjectionKey, type Ref } from 'vue';
import { type Country, type SearchBy, type SortBy } from './types.ts';
import { type SelectOptions } from './components/Select.vue';

export type SearchFormKeyValues = {
  searchBy: Ref<SearchBy>,
  searchTerm: Ref<string>,
  sortBy: Ref<SortBy>,
  searchByOptions: SelectOptions,
  sortByOptions: SelectOptions,
  onReset: () => void,
  onSubmit: () => Promise<void>
}

export const searchFormKey = Symbol() as InjectionKey<SearchFormKeyValues>
export const searchResultKey = Symbol() as InjectionKey<Ref<Country[]>>