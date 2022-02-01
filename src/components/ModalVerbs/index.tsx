import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeGame } from '@store/Game.store'
import { storeHero } from '@store/Hero.store'
import { storeLanguage } from '@store/Language.store'

import { Button } from '@components/Button'
import { ISprite } from '@types'

interface IProps {
  coordsActiveSprite: {
    y: number
    x: number
  }
}

export const ModalVerbs: React.FC<IProps> = observer(
  ({ coordsActiveSprite }) => {
    const { y, x } = coordsActiveSprite

    const verbsArray = Object.entries(storeGame.curMap[y][x])
      .filter(([_, value]) => typeof value === 'function')
      .map(([key, _]) => key)

    const handlerClick = (str: string) => {
      if (
        storeHero.coordsBusyHero !== null &&
        (storeHero.coordsBusyHero.y !== y || storeHero.coordsBusyHero.x !== x)
      ) {
        storeGame.setPromptModal({
          prompt: storeLanguage.activeLang.commonPrompts.prompt1
        })
        return storeGame.resetCoordsActiveSprite()
      }

      const spriteObj = storeGame.curMap[y][x] as ISprite

      const checkInFrontOf = () => {
        if (spriteObj.checkInFrontOf) {
          if (!storeGame.checkFaceToFacePosition(spriteObj)) {
            storeGame.setPromptModal({
              prompt: storeLanguage.activeLang.commonPrompts.prompt2
            })
          } else {
            const data = spriteObj[str]() as string | boolean
            if (data) {
              storeGame.checkCompleteTask({ y: y, x: x, action: str })
              if (typeof data === 'string') {
                storeGame.setGif(data)
              }
            }
          }
        } else {
          const data = spriteObj[str]() as string | boolean
          if (data) {
            storeGame.checkCompleteTask({ y: y, x: x, action: str })
            if (typeof data === 'string') {
              storeGame.setGif(data)
            }
          }
        }
      }

      const checkCloseAction = () => {
        if (spriteObj.isCloseAction) {
          if (!storeGame.checkIfHeroIsNearby(spriteObj)) {
            storeGame.setPromptModal({
              prompt: storeLanguage.activeLang.commonPrompts.prompt3
            })
          } else {
            checkInFrontOf()
          }
        } else {
          checkInFrontOf()
        }
      }

      if (spriteObj.checkDirection) {
        if (!storeHero.checkFacedToPoint(spriteObj)) {
          storeGame.setPromptModal({
            prompt: storeLanguage.activeLang.commonPrompts.prompt4
          })
        } else {
          checkCloseAction()
        }
      } else {
        checkCloseAction()
      }

      storeGame.resetCoordsActiveSprite()
      storeGame.addVerbToListStatistics(str)
    }

    return (
      <Styled.Modal>
        <Styled.WrapperContent>
          <Styled.Title>
            {storeLanguage.activeLang.titles.objectVerbs}
          </Styled.Title>
          {verbsArray.map((name, idx) => {
            return (
              <Styled.VerbBtn key={idx}>
                <Button
                  value={name}
                  variant='filled'
                  size='medium'
                  color='secondary'
                  onClick={() => handlerClick(name)}
                />
              </Styled.VerbBtn>
            )
          })}
          <Styled.WrapperCancel>
            <Button
              value='cancel'
              variant='filled'
              size='small'
              color='primary'
              onClick={() => storeGame.resetCoordsActiveSprite()}
            />
          </Styled.WrapperCancel>
        </Styled.WrapperContent>
      </Styled.Modal>
    )
  }
)
