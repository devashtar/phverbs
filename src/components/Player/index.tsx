import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'

export const Player: React.FC<{}> = observer(() => {
  return (
    <Styled.Player>
      <Styled.Title>{storeLanguage.activeLang.titles.playerStat}</Styled.Title>
      <Styled.WrapperList>
        <Styled.List>
          {storeGame.listUsedVerbsByPlayer.map((item, idx) => {
            return (
              <Styled.Item key={idx}>
                <Styled.Verb>{item.name}</Styled.Verb>
                <Styled.Amount>{item.amount}</Styled.Amount>
              </Styled.Item>
            )
          })}
        </Styled.List>
      </Styled.WrapperList>
    </Styled.Player>
  )
})
