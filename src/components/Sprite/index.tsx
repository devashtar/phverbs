import React, { useEffect } from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { storeGame } from '@store/Game.store'

import { ISprite } from '@types'

const prefix = process.env.PUBLIC_URL + process.env.REACT_APP_SPRITES_DIR

interface IPropsSprite {
  obj: ISprite
  indexX: number
  indexY: number
}

export const Sprite: React.FC<IPropsSprite> = observer(
  ({ obj, indexX, indexY }) => {
    const { title, mapSprites, curSprite, display, rotation } = obj

    const handlerClick = () => {
      storeGame.setCoordsActiveSprite({ y: indexY, x: indexX })
    }

    useEffect(() => {
      obj.y = indexY
      obj.x = indexX
      storeGame.updateSprite(indexY, indexX, { ...obj })
    }, [])

    const isTaskTarget =
      storeGame.listTasks.findIndex(
        ({ y, x, isDone }) => y === indexY && x === indexX && !isDone
      ) !== -1

    return (
      <Styled.WrapperSprite
        className={isTaskTarget && storeGame.lightTaskTarget ? 'task' : ''}
      >
        <Styled.Sprite
          title={title}
          src={prefix + mapSprites.get(curSprite)}
          width={storeGame.settings.sizeCell}
          height={storeGame.settings.sizeCell}
          display={display}
          rotation={rotation}
          onClick={handlerClick}
          alt='sprite'
        />
      </Styled.WrapperSprite>
    )
  }
)
