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
  [co(waCo, 1), co(elev, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(wall, 1), co(waCo, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
  [co(wall, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(floo, 0), co(wall, 2)],
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

const startPositionHero = { y: 7, x: 1, rotation: 270 }

export const stage1 = { map, getTasks, getMessage, startPositionHero }
