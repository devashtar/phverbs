import React from 'react'
import * as Styled from './styled'

import { Button } from '@components/Button'
import { observer } from 'mobx-react-lite'
import { storeGame } from '@store/Game.store'

export const ChooseStage: React.FC<{}> = observer(() => {
  return (
    <Styled.Container>
      <Button
        disabled={storeGame.isStart}
        color='warning'
        variant='contained'
        size='medium'
        value='<'
        onClick={() => storeGame.chooseStage(false)}
      />
      <Styled.StageDesk>
        <Styled.CurStage>{storeGame.curStage + 1}</Styled.CurStage>
      </Styled.StageDesk>
      <Button
        disabled={storeGame.isStart}
        color='warning'
        variant='contained'
        size='medium'
        value='>'
        onClick={() => storeGame.chooseStage(true)}
      />
    </Styled.Container>
  )
})
