import { ThemeProvider } from 'styled-components';

import { InitStyled } from '~styles/init';
import { defaultTheme } from '~styles/theme';
import Typing from './pages/typing';

type Theme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <InitStyled />

      <Typing />
    </ThemeProvider>
  );
}

export default App;
