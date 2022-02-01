export interface ITheme {
  typography: {
    size: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
  palette: {
    primary: string
    secondary: string
    success: string
    info: string
    warning: string
    error: string
  }
  main: {
    bg: string
    font: string
  }
  buttonPalette: {
    primary: string
    secondary: string
    success: string
    info: string
    warning: string
    error: string
  }
  breakpoint: {
    mobile: string
    mobileM: string
    tablet: string
    laptop: string
    desktop: string
    desktopM: string
  }
}
