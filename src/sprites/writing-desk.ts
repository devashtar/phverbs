import { ISprite } from '@types'

import { storeGame } from '@store/Game.store'

export const wrDe = {
  name: 'writing desc',
  title: 'writing desc',
  mapSprites: new Map([['desc', 'writing-desc.svg']]),
  curSprite: 'desc',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: false,
  rotation: 0,
  x: 0,
  y: 0,
  isFullWaterTank: false,
  'read the message': function () {
    storeGame.displayMessage()
    return true
  },
  'read the message in the notebook': function () {
    storeGame.displayTasks()
    return true
  }
} as ISprite
