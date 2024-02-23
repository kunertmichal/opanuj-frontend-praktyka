export type SearchBy = 'name' | 'currency' | 'language' | 'capital';
export type SortBy = 'name:asc' | 'name:desc' | 'population:asc' | 'population:desc';

export interface Country {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  translations: {
    [key: string]: {
      official: string
      common: string
    }
  }
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  flag: string
  maps: Maps
  population: number
  fifa: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode: PostalCode
}

export interface Name {
  common: string
  official: string
  nativeName: any
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface CoatOfArms {
  png: string
  svg: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface PostalCode {
  format: string
  regex: string
}
