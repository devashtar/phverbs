import styled from 'styled-components'

export const Game = styled.div`
  --border-width: 3px;

  box-sizing: border-box;
  max-width: 320px;
  max-height: 100vh;

  @media ${(props) => props.theme.breakpoint.mobileM} {
    max-width: 375px;
  }

  @media ${(props) => props.theme.breakpoint.tablet} {
    max-width: 768px;
  }

  @media ${(props) => props.theme.breakpoint.laptop} {
    max-width: 800px;
  }

  @media ${(props) => props.theme.breakpoint.desktop} {
    max-width: 900px;
  }

  @media ${(props) => props.theme.breakpoint.desktopM} {
    max-width: 1380px;
  }

  border: var(--border-width) solid
    ${(props) => props.theme.buttonPalette.secondary};

  overflow: auto;
`

export const WrapperBlock = styled.div`
  display: inline-block;
  height: inherit;
  position: relative;
`

export const EmptyBlock = styled.div<{
  sizeCell: number
  cols: number
  rows: number
}>`
  background: transparent;
  width: ${(props) => props.sizeCell * props.cols}px;
  height: ${(props) => props.sizeCell * props.rows}px;
`
