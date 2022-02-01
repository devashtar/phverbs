import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { storeHero } from '@store/Hero.store'
import { storeGame } from '@store/Game.store'

const prefix = process.env.PUBLIC_URL + process.env.REACT_APP_SPRITES_DIR

export const Hero: React.FC<{}> = observer(() => {
  return (
    <Styled.Hero
      imageUrl={prefix + storeHero.sprites[storeHero.indexSprite]}
      display={storeHero.coordsBusyHero === null ? 'block' : 'none'}
      rotation={storeHero.rotation}
      x={storeHero.x}
      y={storeHero.y}
      sizeCell={storeGame.settings.sizeCell}
      onClick={() => storeHero.setDisplay()}
    />
  )
})
