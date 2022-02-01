const size = {
  mobile: '320px',
  mobileM: '375px',
  tablet: '768px',
  laptop: '1366px',
  desktop: '1440px',
  desktopM: '1920px'
}

const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileM: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopM: `(min-width: ${size.desktopM})`
}

export const baseTheme = {
  typography: {
    size: {
      xs: '12px',
      sm: '16px',
      md: '20px',
      lg: '28px',
      xl: '36px'
    }
  },
  palette: {
    primary: '#ededed',
    secondary: '#ace5ff',
    success: '#86ff68',
    info: '#dfdfdf',
    warning: '#fdb665',
    error: '#ff6b6b'
  },
  main: {
    bg: '#3e3e3e',
    font: '#ffffff'
  },
  buttonPalette: {
    primary: '#2e60ca',
    secondary: '#a843ca',
    success: '#4bab2c',
    info: '#517294',
    warning: '#da7c1b',
    error: '#cc3a2c'
  },
  breakpoint: device
}
