import React from 'react'
import * as Styled from './styled'

import { Button } from '@components/Button'
import { observer } from 'mobx-react-lite'
import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

export const ChooseLanguage: React.FC<{}> = observer(() => {
  return (
    <Styled.Container>
      <Button
        disabled={storeGame.isStart}
        color='warning'
        variant='contained'
        size='medium'
        value='<'
        onClick={() => storeLanguage.chooseLanguage(false)}
      />
      <Styled.StageDesk>
        <Styled.CurStage>{storeLanguage.curLanguage}</Styled.CurStage>
      </Styled.StageDesk>
      <Button
        disabled={storeGame.isStart}
        color='warning'
        variant='contained'
        size='medium'
        value='>'
        onClick={() => storeLanguage.chooseLanguage(true)}
      />
    </Styled.Container>
  )
})
