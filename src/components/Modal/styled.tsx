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

export const WrapperContent = styled.div`
  background-color: #373f4e;
  padding: 16px 8px 8px 8px;

  min-height: 120px;

  border: none;
  border-radius: 4px;

  @media ${(props) => props.theme.breakpoint.mobile} {
    width: 90%;
  }

  @media ${(props) => props.theme.breakpoint.tablet} {
    width: 80%;
  }

  @media ${(props) => props.theme.breakpoint.laptop} {
    width: 60%;
  }
`

export const Message = styled.p`
  text-align: left;

  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: ${(props) => props.theme.palette.primary};
`

export const FloatBtn = styled.div`
  background-color: transparent;
  padding-top: 6px;
  padding-left: 6px;
  float: right;
`
