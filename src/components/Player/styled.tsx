import styled from 'styled-components'

export const Player = styled.div`
  width: 100%;
  padding: 10px;
`

export const Title = styled.h3`
  text-align: center;
`

export const WrapperList = styled.div`
  margin: 10px auto 0px;
  max-width: 500px;
  height: 220px;

  border: 1px solid ${(props) => props.theme.buttonPalette.info};
  border-radius: 4px;

  overflow: auto;
`

export const List = styled.ul`
  padding: 0px 10px;
  width: 100%;
  height: 100%;
`

export const Item = styled.li`
  padding: 10px 10px;
  margin-top: 4px;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.buttonPalette.info};
`

export const Verb = styled.p`
  color: ${(props) => props.theme.buttonPalette.success};
`

export const Amount = styled.p`
  color: white;
  font-weight: 600;
`
