import { ISprite } from '@types'

import { storeHero } from '@store/Hero.store'
import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

export const beds = {
  name: 'bed',
  title: 'a bed',
  mapSprites: new Map([
    ['made', 'bed-made.svg'],
    ['unmade', 'bed-unmade.svg'],
    ['asleep', 'bed-with-hero-asleep.svg'],
    ['wake-up', 'bed-with-hero-wake-up.svg']
  ]),
  curSprite: 'made',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: false,
  rotation: 0,
  x: 0,
  y: 0,
  made: true,
  isHeroAsleep: false,
  isHeroWakeUp: false,
  'go to the bed': function () {
    if (this.isHeroAsleep || this.isHeroWakeUp) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.bed.prompts.prompt1
      })
      return false
    }

    this.made = false
    this.isHeroAsleep = true
    this.isHeroWakeUp = false
    this.curSprite = 'asleep'

    storeHero.takeOff()
    storeGame.updateSprite(this.y, this.x, { ...this })
    storeHero.setCoordsBusyHero({ y: this.y, x: this.x })
    return 'go-to-the-bed.gif'
  },
  'go back to sleep': function () {
    if (!this.isHeroWakeUp) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.bed.prompts.prompt2
      })
      return false
    }

    this.curSprite = 'asleep'
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'go-back-to-sleep.gif'
  },
  'make up': function () {
    if (this.isHeroAsleep || this.isHeroWakeUp) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.bed.prompts.prompt3
      })
      return false
    }

    this.curSprite = 'made'
    this.made = true
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'make-the-bed.gif'
  },
  // 'turn down': function () {
  //   if (this.isHeroAsleep || this.isHeroWakeUp) {
  //     storeGame.setPromptModal({
  //       prompt: storeLanguage.getLang().sprites.bed.prompts.prompt3
  //     })
  //     return false
  //   }

  //   this.curSprite = 'unmade'
  //   storeGame.updateSprite(this.y, this.x, { ...this })
  //   return true
  // },
  'wake up': function () {
    if (!this.isHeroAsleep) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.bed.prompts.prompt4
      })
      return false
    }

    this.curSprite = 'wake-up'
    this.isHeroWakeUp = true
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'wake-up.gif'
  },
  'get up': function () {
    if (!this.isHeroWakeUp) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.bed.prompts.prompt5
      })
      return false
    }

    this.isHeroAsleep = false
    this.isHeroWakeUp = false
    this.curSprite = 'unmade'
    storeGame.updateSprite(this.y, this.x, { ...this })
    storeHero.resetCoordsBusyHero()
    return 'get-up.gif'
  }
} as ISprite
