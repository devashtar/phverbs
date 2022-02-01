import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.theme.buttonPalette.warning};
  border-radius: 8px;
`

export const StageDesk = styled.div`
  width: 80px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CurStage = styled.h3`
  color: ${(props) => props.theme.palette.primary};
`
