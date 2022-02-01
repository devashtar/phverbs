import styled from 'styled-components'

interface IPropsBtn {
  size?: 'small' | 'medium' | 'big' | 'large'
  variant?: 'contained' | 'filled'
  colorBtn?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'
}

const sizeFont = {
  small: '14px',
  medium: '18p',
  big: '22px',
  large: '28px'
}

const sizePadding = {
  small: '6px 12px',
  medium: '8px 14px',
  big: '10px 16px',
  large: '12px 20px'
}

const weightFont = {
  small: 500,
  medium: 500,
  big: 600,
  large: 600
}

export const Btn = styled.button<IPropsBtn>`
  background-color: ${(props) =>
    props.variant === 'filled'
      ? props.colorBtn
        ? props.theme.buttonPalette[props.colorBtn]
        : props.theme.buttonPalette.primary
      : props.variant === 'contained'
      ? 'transparent'
      : props.colorBtn
      ? props.theme.buttonPalette[props.colorBtn]
      : props.theme.buttonPalette.primary};

  padding: ${(props) => sizePadding[props.size || 'medium']};

  font-family: inherit;
  font-size: ${(props) => sizeFont[props.size || 'medium']};
  font-weight: ${(props) => weightFont[props.size || 'medium']};

  border: 1px solid
    ${(props) =>
      props.colorBtn
        ? props.theme.buttonPalette[props.colorBtn]
        : props.theme.buttonPalette.primary};

  border-radius: 6px;

  color: ${(props) =>
    props.variant === 'contained'
      ? props.colorBtn
        ? props.theme.buttonPalette[props.colorBtn]
        : props.theme.buttonPalette.primary
      : 'white'};

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(255, 255, 255, 0.1);
  }

  &:disabled {
    opacity: 0.4;
    cursor: initial;
    box-shadow: none;
  }
`
