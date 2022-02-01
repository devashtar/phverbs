import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeGame } from '@store/Game.store'

import { Button } from '@components/Button'

export const ModalTasks: React.FC<{}> = observer(() => {
  return (
    <Styled.Modal>
      <Styled.WrapperContent>
        <Styled.WrapperList>
          {storeGame.listTasks.map(({ task, isDone }, idx) => {
            return (
              <Styled.Item key={idx} isDone={isDone}>
                {task}
              </Styled.Item>
            )
          })}
          <Styled.FloatBtn>
            <Button
              value='ok'
              onClick={() => storeGame.displayTasks()}
              variant='contained'
              size='small'
              color='warning'
            />
          </Styled.FloatBtn>
        </Styled.WrapperList>
      </Styled.WrapperContent>
    </Styled.Modal>
  )
})
