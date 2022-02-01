import styled from 'styled-components'

export const Menu = styled.div`
  padding: 10px 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WrapperBtn = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0px 10px;
  }
`

export const Line = styled.div`
  margin: 20px 0px 0px;
  width: 100%;
  height: 2px;
  background-color: #273348;
`
