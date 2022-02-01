import { ISprite } from '@types'

import { storeGame } from '@store/Game.store'
import { storeHero } from '@store/Hero.store'
import { storeLanguage } from '@store/Language.store'

export const shwr = {
  name: 'shower',
  title: 'a shower',
  mapSprites: new Map([
    ['empty', 'shower.svg'],
    ['with-hero', 'shower-with-hero.svg'],
    ['active-with-hero', 'shower-active-with-hero.svg']
  ]),
  curSprite: 'empty',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: true,
  rotation: 0,
  x: 0,
  y: 0,
  isActive: false,
  isThereHero: false,
  'come in': function () {
    if (!storeHero.isNaked) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.shower.prompts.prompt1
      })
      return false
    }

    if (this.isThereHero) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.shower.prompts.prompt2
      })
      return false
    }

    this.isThereHero = true
    this.curSprite = 'with-hero'
    storeGame.updateSprite(this.y, this.x, { ...this })
    storeHero.setCoordsBusyHero({ y: this.y, x: this.x })
    return true
  },
  'get out': function () {
    if (!this.isThereHero) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.shower.prompts.prompt3
      })
      return false
    }

    this.isThereHero = false
    this.curSprite = 'empty'
    storeGame.updateSprite(this.y, this.x, { ...this })
    storeHero.resetCoordsBusyHero()
    return true
  },
  'turn the tap on': function () {
    if (!this.isThereHero) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.shower.prompts.prompt4
      })
      return false
    }

    if (this.isActive) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.shower.prompts.prompt5
      })
      return false
    }

    this.isActive = true
    this.curSprite = 'active-with-hero'
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'turn-the-faucet.on.gif'
  },
  'turn the tap off': function () {
    if (!this.isThereHero) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.shower.prompts.prompt4
      })
      return false
    }

    if (!this.isActive) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.shower.prompts.prompt6
      })
      return false
    }

    this.isActive = false
    this.curSprite = 'with-hero'
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'turn-the-faucet-off.gif'
  },
  'have a shower': function () {
    if (!this.isThereHero) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.shower.prompts.prompt4
      })
      return false
    }

    if (!this.isActive) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.shower.prompts.prompt7
      })
      return 'have-a-shower.gif'
    }
  }
} as ISprite
