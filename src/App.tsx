import React from 'react'
import * as Styled from './App.styled'

import { Title } from '@components/Title'
import { Game } from '@components/Game'
import { Menu } from '@components/Menu'
import { Player } from '@components/Player'

export const App: React.FC<{}> = () => {
  return (
    <Styled.Main>
      <Styled.GridBlock>
        <Styled.GamePlay>
          <Game />
        </Styled.GamePlay>

        <Styled.SideBar>
          <Title />
          <Menu />
          <Player />
        </Styled.SideBar>
      </Styled.GridBlock>
    </Styled.Main>
  )
}
