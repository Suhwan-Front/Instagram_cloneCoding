import {ThemeProvider} from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/Main';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme} />
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
