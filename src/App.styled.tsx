import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${(props) => props.theme.main.bg};
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  color: ${(props) => props.theme.palette.primary};
`

export const GridBlock = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  @media ${(props) => props.theme.breakpoint.laptop} {
    grid-template-columns: 1fr 400px;
    grid-template-rows: 1fr;
  }

  @media ${(props) => props.theme.breakpoint.desktop} {
    grid-template-columns: 1fr 500px;
    grid-template-rows: 1fr;
  }
`

export const GamePlay = styled.div`
  background-color: #252833;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const SideBar = styled.div`
  background-color: #1e2029;
  padding: 20px;

  width: 100%;
  height: 100%;
`
