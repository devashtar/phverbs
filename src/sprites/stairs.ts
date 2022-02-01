import { ISprite } from '@types'

import { storeGame } from '@store/Game.store'
import { storeHero } from '@store/Hero.store'

export const strs = {
  name: 'stair',
  title: 'a stair',
  mapSprites: new Map([['stair', 'stairs.svg']]),
  curSprite: 'stair',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: false,
  rotation: 0,
  x: 0,
  y: 0,
  'take the stairs up': function () {
    if (
      storeGame.checkBackToFacePosition(this) &&
      storeHero.moveFromBackToFacePosition(this)
    ) {
      return 'take-the-stairs-up.gif'
    }
  },
  'take the stairs down': function () {
    if (
      storeGame.checkFaceToFacePosition(this) &&
      storeHero.moveFromFaceToBackPosition(this)
    ) {
      return 'take-the-stairs-down.gif'
    }
  }
} as ISprite
