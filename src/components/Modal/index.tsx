import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeGame } from '@store/Game.store'

import { Button } from '@components/Button'

export const Modal: React.FC<{}> = observer(() => {
  return (
    <Styled.Modal>
      <Styled.WrapperContent>
        <Styled.Message>
          {storeGame.promptModal.prompt ||
            storeGame.promptModal.message ||
            storeGame.promptModal.doneAction}
          <Styled.FloatBtn>
            <Button
              value='ok'
              onClick={() => storeGame.clearPromptModal()}
              variant='contained'
              size='small'
              color='warning'
            />
          </Styled.FloatBtn>
        </Styled.Message>
      </Styled.WrapperContent>
    </Styled.Modal>
  )
})
