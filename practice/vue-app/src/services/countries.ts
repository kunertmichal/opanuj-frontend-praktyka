export const countriesService = {
  getCountries(category: 'currency' | 'language' | 'capital' | 'name', searchTerm: string) {
    return fetch(`https://restcountries.com/v3.1/${category}/${searchTerm}`)
      .then(res => res.json())
  }
}