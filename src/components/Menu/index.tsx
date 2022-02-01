import React, { ReactChild, ReactChildren } from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

import { ChooseStage } from '@components/ChooseStage'
import { ChooseLanguage } from '@components/ChooseLanguage'
import { Button } from '@components/Button'

export const Menu: React.FC<{}> = observer(() => {
  return (
    <Styled.Menu>
      <Styled.Line />
      <Styled.WrapperBtn>
        <Button
          color='warning'
          variant='contained'
          size='medium'
          value={storeLanguage.activeLang.buttons.zoomIn}
          onClick={() => storeGame.zoomIn()}
        />
        <Button
          color='warning'
          variant='contained'
          size='medium'
          value={storeLanguage.activeLang.buttons.zoomOut}
          onClick={() => storeGame.zoomOut()}
        />
      </Styled.WrapperBtn>

      <Styled.WrapperBtn>
        <Button
          color='warning'
          variant='contained'
          size='medium'
          value={storeLanguage.activeLang.buttons.restartTheGame}
          onClick={() => storeGame.restartGame()}
        />
      </Styled.WrapperBtn>

      <Styled.WrapperBtn>
        <ChooseStage />
      </Styled.WrapperBtn>

      <Styled.WrapperBtn>
        <ChooseLanguage />
      </Styled.WrapperBtn>

      <Styled.Line />

      <Styled.WrapperBtn>
        <Button
          disabled={!storeGame.isStart}
          color='secondary'
          variant='contained'
          size='medium'
          value={storeLanguage.activeLang.buttons.showHiddenTask}
          onClick={() => storeGame.lightTasks()}
        />
      </Styled.WrapperBtn>

      <Styled.WrapperBtn>
        <Button
          disabled={!storeGame.isStart}
          color='secondary'
          variant='contained'
          size='medium'
          value={storeLanguage.activeLang.buttons.showHiddenGif}
          onClick={() => storeGame.displayGif()}
        />
      </Styled.WrapperBtn>

      <Styled.Line />
    </Styled.Menu>
  )
})
