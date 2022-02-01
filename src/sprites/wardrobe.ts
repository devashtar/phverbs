import { ISprite } from '@types'

import { storeHero } from '@store/Hero.store'
import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

export const wabe = {
  name: 'wardrobe',
  title: 'a wardrobe',
  mapSprites: new Map([
    ['open', 'wardrobe-open.svg'],
    ['close', 'wardrobe-close.svg']
  ]),
  curSprite: 'close',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: true,
  rotation: 0,
  x: 0,
  y: 0,
  isOpen: false,
  open: function () {
    if (this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.wardrobe.prompts.prompt1
      })
      return false
    }

    this.isOpen = true
    this.curSprite = 'open'
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'open-wardrobe.gif'
  },
  close: function () {
    if (!this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.wardrobe.prompts.prompt2
      })
      return false
    }

    this.isOpen = false
    this.curSprite = 'close'
    storeGame.updateSprite(this.y, this.x, { ...this })
    return true
  },
  'put on': function () {
    if (!this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.wardrobe.prompts.prompt3
      })
      return false
    }

    if (!storeHero.isNaked) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.wardrobe.prompts.prompt4
      })
      return false
    }

    storeHero.putOn()
    return 'get-dressed.gif'
  },
  'take off': function () {
    if (!this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.wardrobe.prompts.prompt3
      })
      return false
    }

    if (storeHero.isNaked) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.wardrobe.prompts.prompt5
      })
      return false
    }

    storeHero.takeOff()
    return 'take-off-a-shirt.gif'
  }
} as ISprite
