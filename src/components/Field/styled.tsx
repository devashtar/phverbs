import styled from 'styled-components'

export const Field = styled.div<{
  cols: number
  rows: number
  imageUrl: string
  sizeCell: number
}>`
  background-color: transparent;
  background: url(${(props) => props.imageUrl}) repeat;
  background-size: ${(props) => props.sizeCell}px;

  position: relative;

  width: ${(props) => props.cols * props.sizeCell}px;
  height: ${(props) => props.cols * props.sizeCell}px;

  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  gap: 0;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
