import { ISprite } from '@types'

import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

export const tabF = {
  name: 'table-flower',
  title: 'the table with plant and watering can',
  mapSprites: new Map([
    ['empty', 'table-flower.svg'],
    ['fill', 'table-flower-fill.svg']
  ]),
  curSprite: 'empty',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: false,
  rotation: 0,
  x: 0,
  y: 0,
  isFullWater: false,
  'water the flowers': function () {
    if (!this.isFullWater) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.tableFlower.prompts.prompt1
      })
      return false
    }

    this.isFullWater = false
    this.curSprite = 'empty'
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'water-the-flower.gif'
  },
  'fill the watering can': function () {
    if (this.isFullWater) {
      storeGame.setPromptModal({
        prompt: storeLanguage.getLang().sprites.tableFlower.prompts.prompt2
      })
      return false
    }

    this.isFullWater = true
    this.curSprite = 'fill'
    storeGame.updateSprite(this.y, this.x, { ...this })
    return 'fill-the-watering-can.gif'
  }
} as ISprite
