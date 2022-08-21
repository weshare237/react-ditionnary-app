interface IWord {
  word: string
  phonetic: string
  licence: ILicence
  meanings: IMeaning[]
  sourceUrls: string[]
  phonetics: IPhonetic[]
}

interface ILicence {
  name: string
  url: string
}

interface IMeaning {
  partOfSpeech: string
  antonyms: string[]
  synonyms: string[]
  definitions: IDefinition[]
}

interface IDefinition {
  antonyms: string[]
  definition: string
  synonyms: string[]
}

interface IPhonetic {
  audio: string
  licence: ILicence
  sourceUrl: string
  text: string
}

interface Language {
  value: string
  label: string
}
