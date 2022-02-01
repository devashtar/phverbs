import { ISprite } from '@types'

import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

export const sink = {
  name: 'sink',
  title: 'a sink',
  mapSprites: new Map([
    ['close', 'sink.svg'],
    ['open', 'sink-active.svg']
  ]),
  curSprite: 'close',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: false,
  rotation: 0,
  x: 0,
  y: 0,
  isActive: false,
  'turn the tap on': function () {
    if (this.isActive) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.sink.prompts.prompt1
      })
      return false
    }

    this.isActive = true
    this.curSprite = 'open'
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'turn-the-faucet-on.gif'
  },
  'turn the tap off': function () {
    if (!this.isActive) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.sink.prompts.prompt2
      })
      return false
    }

    this.isActive = false
    this.curSprite = 'close'
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'turn-the-faucet-off.gif'
  },
  'get cleaned up': function () {
    if (!this.isActive) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.sink.prompts.prompt3
      })
      return false
    }
    return true
  },
  'wash a make-up off': function () {
    if (!this.isActive) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.sink.prompts.prompt3
      })
      return false
    }
    return 'wash-a-make-up-off.gif'
  },
  'brush your teeth': function () {
    if (!this.isActive) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.sink.prompts.prompt3
      })
      return false
    }

    return 'brush-teeth.gif'
  },
  'wash your hands': function () {
    if (!this.isActive) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.sink.prompts.prompt3
      })
      return false
    }

    return 'wash-hands.gif'
  }
} as ISprite
