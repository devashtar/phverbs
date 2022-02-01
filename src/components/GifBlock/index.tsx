import React, { useEffect } from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeGame } from '@store/Game.store'

const prefix = process.env.PUBLIC_URL + process.env.REACT_APP_GIFS_DIR

export const GifBlock: React.FC<{}> = observer(() => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      storeGame.setGif('')
    }, storeGame.settings.timePlayGif)

    return () => clearTimeout(timerId)
  }, [storeGame.activeGif])

  return (
    <Styled.Wrapper onClick={() => storeGame.setGif('')}>
      <Styled.Gif src={prefix + storeGame.activeGif} alt='animation image' />
    </Styled.Wrapper>
  )
})
