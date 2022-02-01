import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'

import { storeLanguage } from '@store/Language.store'

export const Title: React.FC<{}> = observer(() => {
  return <Styled.Title>{storeLanguage.activeLang.titles.game}</Styled.Title>
})
