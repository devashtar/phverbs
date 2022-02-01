import { ISprite } from '@types'

import { storeHero } from '@store/Hero.store'
import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

export const doIn = {
  name: 'door',
  title: ' a door',
  mapSprites: new Map([
    ['close', 'door-inward.svg'],
    ['open', 'door-open-inward.svg']
  ]),
  curSprite: 'close',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: false,
  rotation: 0,
  x: 0,
  y: 0,
  isOpen: false,
  isLocked: false,
  openingInwards: true,
  'push in': function () {
    if (this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.doorInward.prompts.prompt1
      })
      return false
    }

    if (this.openingInwards) {
      if (!storeGame.checkBackToFacePosition(this)) {
        storeGame.setPromptModal({
          prompt: storeLanguage.getLang().sprites.doorInward.prompts.prompt2
        })
        return false
      }
    }

    this.curSprite = 'open'
    this.isOpen = true

    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'push-in.gif'
  },
  'come in': function () {
    if (!this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.doorInward.prompts.prompt3
      })
      return false
    }

    storeGame.checkFaceToFacePosition(this) &&
      storeHero.moveFromFaceToBackPosition(this)
    return 'get-in.gif'
  },
  'get out': function () {
    if (!this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.doorInward.prompts.prompt3
      })
      return false
    }

    storeGame.checkBackToFacePosition(this) &&
      storeHero.moveFromBackToFacePosition(this)
    return 'get-out.gif'
  },
  'pull in': function () {
    if (this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.doorInward.prompts.prompt1
      })
      return false
    }

    if (this.openingInwards) {
      if (!storeGame.checkFaceToFacePosition(this)) {
        storeGame.setPromptModal({
          prompt: storeLanguage.getLang().sprites.doorInward.prompts.prompt4
        })
        return false
      }
    }

    this.curSprite = 'open'
    this.isOpen = true

    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'pull-in.gif'
  },
  close: function () {
    if (!this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.doorInward.prompts.prompt5
      })
      return false
    }

    this.curSprite = 'close'
    this.isOpen = false

    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'close-door.gif'
  }
} as ISprite
