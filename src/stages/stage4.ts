import { ISprite } from '@types'
import { wall } from '@sprites/wall'
import { walt } from '@sprites/wall-t'
import { waCo } from '@sprites/wall-corner'
import { doIn } from '@sprites/door-inward'
import { dOut } from '@sprites/door-outward'
import { floo } from '@sprites/floor'
import { beds } from '@sprites/bed'
import { armc } from '@sprites/armchair'
import { wabe } from '@sprites/wardrobe'
import { elev } from '@sprites/elevator'
import { sink } from '@sprites/sink'
import { shwr } from '@sprites/shower'
import { strs } from '@sprites/stairs'
import { tabF } from '@sprites/table-flower'
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
  [co(waCo, 1), co(wall, 1), co(elev, 1), co(wall, 1), co(walt, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(walt, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(waCo, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(floo, 0), co(armc, 0), co(floo, 0), co(armc, 2), co(floo, 0), co(wall, 0), co(wabe, 1), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(dOut, 2), co(floo, 0), co(floo, 0), co(beds, 2), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(walt, 0), co(wall, 1), co(wall, 1), co(wall, 1), co(walt, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(wrDe, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(floo, 0), co(shwr, 1), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(tabF, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(dOut, 2), co(floo, 0), co(floo, 0), co(floo, 0), co(sink, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(walt, 0), co(wall, 3), co(dOut, 1), co(wall, 3), co(wall, 3), co(wall, 3), co(walt, 3), co(wall, 3), co(walt, 1), co(wall, 3), co(walt, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(dOut, 2), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(strs, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(walt, 0), co(wall, 1), co(dOut, 3), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(walt, 3), co(wall, 1), co(walt, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(waCo, 0), co(wall, 1), co(wall, 1), co(wall, 1), co(walt, 3), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(waCo, 3)],
]

const getTasks = () => {
  const lang = storeLanguage.getLang().stages.stage4.tasks

  return [
    {
      task: lang.task1,
      action: 'go to the bed',
      x: 13,
      y: 2,
      isDone: false
    },
    {
      task: lang.task2,
      action: 'make up',
      x: 13,
      y: 2,
      isDone: false
    },
    {
      task: lang.task3,
      action: 'have a shower',
      x: 12,
      y: 4,
      isDone: false
    },
    {
      task: lang.task4,
      action: 'turn the tap off',
      x: 12,
      y: 4,
      isDone: false
    },
    {
      task: lang.task5,
      action: 'brush your teeth',
      x: 14,
      y: 5,
      isDone: false
    },
    {
      task: lang.task6,
      action: 'turn the tap off',
      x: 14,
      y: 5,
      isDone: false
    },
    {
      task: lang.task7,
      action: 'put on',
      x: 11,
      y: 1,
      isDone: false
    },
    {
      task: lang.task8,
      action: 'close',
      x: 6,
      y: 6,
      isDone: false
    }
  ] as Array<{ task: string, action: string; x: number; y: number, isDone: boolean }>
}

const getMessage = () => {
  const lang = storeLanguage.getLang()
  return lang.stages.stage4.message
}

const startPositionHero = { y: 4, x: 6, rotation: 180 }

export const stage4 = { map, getTasks, getMessage, startPositionHero }
