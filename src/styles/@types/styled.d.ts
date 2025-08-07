import 'styled-components';
import { defaultTheme } from '../themes/default';

import ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{}
}