import styled from 'styled-components'

export const Modal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  z-index: 1000000;
`

export const WrapperContent = styled.div`
  position: relative;
  background-color: #373f4e;
  padding: 8px;

  min-height: 200px;
  max-height: 90%;

  border: none;
  border-radius: 4px;

  @media ${(props) => props.theme.breakpoint.mobile} {
    width: 90%;
  }

  @media ${(props) => props.theme.breakpoint.tablet} {
    width: 80%;
  }

  overflow: auto;
`

export const Title = styled.h2`
  text-align: center;

  font-size: 22px;
  font-weight: bold;
  line-height: 28px;
  color: ${(props) => props.theme.palette.primary};

  padding-bottom: 20px;
  border-bottom: 2px solid #55585d;
`

export const VerbBtn = styled.div`
  background-color: transparent;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3px 5px;
`

export const WrapperCancel = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`
