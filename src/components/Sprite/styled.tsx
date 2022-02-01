import styled from 'styled-components'

interface ISpriteProps {
  display: string
  rotation: number
}

export const Sprite = styled.img<ISpriteProps>`
  display: ${(props) => props.display};

  transform: rotate(${(props) => props.rotation}deg);
`

export const WrapperSprite = styled.div`
  position: relative;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(46, 255, 46, 0.4);
    z-index: 1000;
  }

  @-webkit-keyframes animation {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: rgba(6, 223, 6, 0.3);
    }
    100.0% {
      background-color: transparent;
    }
  }

  @keyframes animation {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: rgba(6, 223, 6, 0.3);
    }
    100.0% {
      background-color: transparent;
    }
  }

  &.task:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;

    animation-name: animation;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }
`
