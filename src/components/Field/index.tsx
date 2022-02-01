import React, { useEffect } from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { storeGame } from '@store/Game.store'

import { Hero } from '@components/Hero'
import { Sprite } from '@components/Sprite'

const prefix = process.env.PUBLIC_URL + process.env.REACT_APP_SPRITES_DIR

export const Field: React.FC<{}> = observer(() => {
  return (
    <Styled.Field
      imageUrl={prefix + 'floor.svg'}
      sizeCell={storeGame.settings.sizeCell}
      cols={storeGame.curMap.length}
      rows={storeGame.curMap[0].length}
    >
      {storeGame.curMap.map((array, indexY) =>
        array.map((obj, indexX) => (
          <Sprite
            key={indexY * 10 + indexX}
            obj={obj}
            indexY={indexY}
            indexX={indexX}
          />
        ))
      )}
      <Hero />
    </Styled.Field>
  )
})
