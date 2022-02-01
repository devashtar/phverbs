import { ISprite } from '@types'
import { wall } from '@sprites/wall'
import { waCo } from '@sprites/wall-corner'
import { floo } from '@sprites/floor'
import { elev } from '@sprites/elevator'
import { wrDe } from '@sprites/writing-desk'

import { storeLanguage } from '@store/Language.store'

//     0       ^
// 270 | 90    |-> face
//    180      |

const co = (obj: ISprite, rotation: 0 | 1 | 2 | 3) => {
  const direction = rotation * 90 as  0 | 90 | 180 | 270
  const cloneObj = {...obj}
  cloneObj.rotation = direction
  return cloneObj
}

const map = [
  [co(waCo, 1), co(elev, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(waCo, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(wrDe, 1), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(waCo, 0), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(waCo, 3)],
]

const getTasks = () => {
  const lang = storeLanguage.getLang().stages.stage1.tasks

  return [
    {
      task: lang.task1,
      action: 'read the message',
      x: 2,
      y: 7,
      isDone: false
    },
    {
      task: lang.task2,
      action: 'go to',
      x: 1,
      y: 1,
      isDone: false
    }
  ] as Array<{ task: string, action: string; x: number; y: number, isDone: boolean }>
}

const getMessage = () => {
  const lang = storeLanguage.getLang()
  return lang.stages.stage1.message
}

const startPositionHero = { y: 7, x: 1, rotation: 0 }

export const stage1 = { map, getTasks, getMessage, startPositionHero }
