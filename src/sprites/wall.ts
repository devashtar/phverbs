import { ISprite } from '@types'

import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

export const wall = {
  name: 'wall',
  title: 'wall',
  mapSprites: new Map([['wall', 'wall.svg']]),
  curSprite: 'wall',
  display: 'block',
  checkDirection: true,
  isCloseAction: true,
  checkInFrontOf: false,
  rotation: 0,
  x: 0,
  y: 0,
  'knock knock': () => {
    storeGame.setPromptModal({
      prompt: storeLanguage.getLang().sprites.wall.prompts.prompt1
    })
    return true
  },
  'kick out': () => {
    storeGame.setPromptModal({
      prompt: storeLanguage.getLang().sprites.wall.prompts.prompt2
    })
    return true
  }
} as ISprite
