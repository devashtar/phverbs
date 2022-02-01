import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeGame } from '@store/Game.store'

import { Button } from '@components/Button'

export const ModalStage: React.FC<{}> = observer(() => {
  return (
    <Styled.Modal>
      <Styled.WrapperContent>
        <Styled.FloatBtn>
          <Button
            value='restart'
            onClick={() => storeGame.restartStage()}
            variant='filled'
            size='medium'
            color='primary'
          />
          <Button
            value='next stage'
            onClick={() => storeGame.nextStage()}
            variant='filled'
            size='medium'
            color='primary'
          />
        </Styled.FloatBtn>
      </Styled.WrapperContent>
    </Styled.Modal>
  )
})
