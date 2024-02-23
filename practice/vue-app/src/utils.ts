import type { Country, SortBy } from './types.ts';

export function sortCountries(countries: Country[], option: SortBy) {
  const [sortOption, sortOrder] = option.split(':');
  switch (sortOption) {
    case 'name':
      if (sortOrder === 'asc') {
        return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      }
      return countries.sort((a, b) => b.name.common.localeCompare(a.name.common));
    case 'population':
      if (sortOrder === 'asc') {
        return countries.sort((a, b) => a.population - b.population);
      }
      return countries.sort((a, b) => b.population - a.population);
    default:
      return countries;
  }
}