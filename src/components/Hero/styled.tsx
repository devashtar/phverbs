import styled from 'styled-components'

interface IPropsHero {
  sizeCell: number
  imageUrl: string
  display: 'block' | 'none'
  rotation: number
  x: number
  y: number
}

export const Hero = styled.div<IPropsHero>`
  background-color: transparent;
  background: url(${(props) => props.imageUrl}) center / contain no-repeat;

  position: absolute;
  left: ${(props) => props.x * props.sizeCell}px;
  top: ${(props) => props.y * props.sizeCell}px;

  display: ${(props) => props.display};
  width: ${(props) => props.sizeCell}px;
  height: ${(props) => props.sizeCell}px;

  transform: rotate(${(props) => props.rotation}deg);
  z-index: 10000;

  transition: all ease-in-out 1s;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(252, 255, 46, 0.4);
  }
`
