import { ISprite } from '@types'
import { wall } from '@sprites/wall'
import { walt } from '@sprites/wall-t'
import { waCo } from '@sprites/wall-corner'
import { doIn } from '@sprites/door-inward'
import { dOut } from '@sprites/door-outward'
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
  [co(waCo, 1), co(elev, 1), co(walt, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(waCo, 2)],
  [co(wall, 0), co(floo, 0), co(wall, 2), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(wall, 2), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(wall, 2), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(walt, 0), co(dOut, 1), co(walt, 2), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(wall, 2), co(wrDe, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(wall, 2), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(walt, 0), co(doIn, 1), co(waCo, 3), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(waCo, 0), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(waCo, 3)],
]

const getTasks = () => {
  const lang = storeLanguage.getLang().stages.stage2.tasks

  return [
    {
      task: lang.task1,
      action: 'read the message',
      x: 3,
      y: 5,
      isDone: false
    },
    {
      task: lang.task2,
      action: 'push in',
      x: 1,
      y: 4,
      isDone: false
    },
    {
      task: lang.task3,
      action: 'pull in',
      x: 1,
      y: 7,
      isDone: false
    }
  ] as Array<{ task: string, action: string; x: number; y: number, isDone: boolean }>
}

const getMessage = () => {
  const lang = storeLanguage.getLang()
  return lang.stages.stage2.message
}

const startPositionHero = { y: 5, x: 4, rotation: 180 }

export const stage2 = { map, getTasks, getMessage, startPositionHero }
