import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeHero } from '@store/Hero.store'
import { storeGame } from '@store/Game.store'

import { Button } from '@components/Button'
import { storeLanguage } from '@store/Language.store'

export const ModalHeroVerbs: React.FC<{}> = observer(() => {
  const chooseAction = (name: string) => {
    const verb = toCamelCase(name) as 'setDisplay'
    storeHero[verb]()
    storeHero.setDisplay()
    storeGame.addVerbToListStatistics(name)
  }

  return (
    <Styled.Modal>
      <Styled.WrapperContent>
        <Styled.Title>{storeLanguage.activeLang.titles.heroVerbs}</Styled.Title>

        {storeHero.actions.map((item, idx) => {
          return (
            <Styled.VerbBtn key={idx}>
              <Button
                value={item}
                onClick={() => chooseAction(item)}
                variant='filled'
                size='medium'
                color='primary'
              />
            </Styled.VerbBtn>
          )
        })}
        <Styled.WrapperCancel>
          <Button
            value='cancel'
            onClick={() => storeHero.setDisplay()}
            variant='filled'
            size='medium'
            color='error'
          />
        </Styled.WrapperCancel>
      </Styled.WrapperContent>
    </Styled.Modal>
  )
})

const toCamelCase = (str: string) => {
  const arr = str.split(' ')
  return arr
    .map((name, idx) => {
      let word = name
      if (idx !== 0) {
        word = name[0].toUpperCase() + name.slice(1, name.length)
      }
      return word
    })
    .join('')
}
