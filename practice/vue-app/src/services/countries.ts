export const countriesService = {
  async searchCountryDataBy(category: 'currency' | 'language' | 'capital' | 'name', searchTerm: string) {
    return fetch(`https://restcountries.com/v3.1/${category}/${searchTerm}`)
      .then(res => res.json())
  },
  async getAll() {
    return fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
  }
}
