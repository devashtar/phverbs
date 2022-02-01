import { ISprite } from '@types'

import { storeGame } from '@store/Game.store'
import { storeHero } from '@store/Hero.store'
import { storeLanguage } from '@store/Language.store'

export const elev = {
  name: 'elevator',
  title: 'the elevator',
  mapSprites: new Map([
    ['close', 'elevator-close.svg'],
    ['open', 'elevator-open.svg']
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
  'come in': function () {
    if (!this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.elevator.prompts.prompt1
      })
      return false
    }

    this.isEmpty = false
    storeGame.updateSprite(this.y, this.x, { ...this })
    storeHero.setCoordsBusyHero({ y: this.y, x: this.x })
    storeGame.endStage()
    return 'get-in-the-elevator.gif'
  },
  'call the elevator': function () {
    if (-1 !== storeGame.listTasks.findIndex((task) => task.isDone === false)) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.elevator.prompts.prompt2
      })
      return false
    }

    if (this.isOpen) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.elevator.prompts.prompt3
      })
      return false
    }

    this.isOpen = true
    this.curSprite = 'open'
    storeGame.updateSprite(this.y, this.x, { ...this })
    storeHero.resetCoordsBusyHero()
    return 'call-the-elevator.gif'
  }
} as ISprite
