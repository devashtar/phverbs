import { ISprite } from '@types'

import { storeGame } from '@store/Game.store'
import { storeHero } from '@store/Hero.store'
import { storeLanguage } from '@store/Language.store'

export const armc = {
  name: 'armchair',
  title: 'a armchair',
  mapSprites: new Map([
    ['empty', 'armchair.svg'],
    ['with-hero', 'armchair-with-hero.svg']
  ]),
  curSprite: 'empty',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: false,
  rotation: 0,
  x: 0,
  y: 0,
  isEmpty: true,
  'sit down': function () {
    if (!this.isEmpty) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.armChair.prompts.prompt1
      })
      return false
    }

    this.isEmpty = false
    this.curSprite = 'with-hero'
    storeGame.updateSprite(this.y, this.x, { ...this })
    storeHero.setCoordsBusyHero({ y: this.y, x: this.x })
    return 'sit-down.gif'
  },
  'stand up': function () {
    if (this.isEmpty) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.armChair.prompts.prompt2
      })
      return false
    }

    this.isEmpty = true
    this.curSprite = 'empty'
    storeGame.updateSprite(this.y, this.x, { ...this })
    storeHero.resetCoordsBusyHero()
    return 'stand-up.gif'
  }
} as ISprite
