import 'styled-components'

import { ITheme } from './styled'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
