import React, { useMemo } from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeGame } from '@store/Game.store'
import { storeHero } from '@store/Hero.store'

import { Field } from '@components/Field'
import { Modal } from '@components/Modal'
import { ModalHeroVerbs } from '@components/ModalHeroVerbs'
import { ModalVerbs } from '@components/ModalVerbs'
import { ModalTasks } from '@components/ModalTasks'
import { ModalStage } from '@components/ModalStage'
import { ModalStart } from '@components/ModalStart'
import { GifBlock } from '@components/GifBlock'

const Modals = observer(() => (
  <>
    {(storeGame.promptModal.prompt ||
      storeGame.promptModal.message ||
      storeGame.promptModal.doneAction) && <Modal />}
    {storeHero.displayActions && <ModalHeroVerbs />}
    {storeGame.coordsActiveSprite !== null && (
      <ModalVerbs coordsActiveSprite={storeGame.coordsActiveSprite} />
    )}
    {storeGame.displayTasksList && <ModalTasks />}
    {storeGame.displayLevelSelection && <ModalStage />}
    {!storeGame.isStart && <ModalStart />}
    {storeGame.settings.isPlayGif && storeGame.activeGif && <GifBlock />}
  </>
))

export const Game: React.FC<{}> = observer(() => {
  return (
    <Styled.WrapperBlock>
      <Styled.Game>
        {storeGame.isPlay ? (
          <Field />
        ) : (
          <Styled.EmptyBlock
            sizeCell={storeGame.settings.sizeCell}
            cols={storeGame.curMap.length}
            rows={storeGame.curMap[0].length}
          />
        )}
      </Styled.Game>
      <Modals />
    </Styled.WrapperBlock>
  )
})
