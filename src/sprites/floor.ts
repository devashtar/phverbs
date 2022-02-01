import { ISprite } from '@types'
import { storeHero } from '@store/Hero.store'

export const floo = {
  name: 'floor',
  title: '',
  mapSprites: new Map([['temp', 'temp.png']]),
  curSprite: 'temp',
  display: 'block',
  checkDirection: true,
  isCloseAction: false,
  checkInFrontOf: false,
  rotation: 0,
  x: 0,
  y: 0,
  'go to': function () {
    return storeHero.goTo(this)
  }
} as ISprite
