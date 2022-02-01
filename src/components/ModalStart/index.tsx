import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

import { Button } from '@components/Button'

export const ModalStart: React.FC<{}> = observer(() => {
  return (
    <Styled.Modal>
      <Button
        color='primary'
        variant='contained'
        size='large'
        value={storeLanguage.activeLang.buttons.pressStart}
        onClick={() => storeGame.pushStart()}
      />
    </Styled.Modal>
  )
})
