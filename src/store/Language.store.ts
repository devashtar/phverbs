import { makeAutoObservable } from 'mobx'

import { language } from '@language'

class Language {
  curLanguage: string
  languages: any
  activeLang: any

  constructor() {
    this.curLanguage = 'ru'
    this.languages = language
    this.activeLang = language.ru

    makeAutoObservable(this)
  }

  chooseLanguage(bool: boolean) {
    const langs = Object.keys(this.languages)
    const idx = langs.findIndex((name) => name === this.curLanguage)
    if (bool) {
      if (langs.length < idx + 2) return
      this.curLanguage = langs[idx + 1]
      this.activeLang = this.languages[this.curLanguage]
    } else {
      if (0 === idx) return
      this.curLanguage = langs[idx - 1]
      this.activeLang = this.languages[this.curLanguage]
    }
  }

  getLang() {
    return this.activeLang
  }
}

export const storeLanguage = new Language()
