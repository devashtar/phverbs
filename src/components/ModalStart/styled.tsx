import styled from 'styled-components'

export const Modal = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  overflow: auto;
  z-index: 1000000;
`
