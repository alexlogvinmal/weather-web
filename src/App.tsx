import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { setupStore } from './store';
import Main from './components/Main';

function App() {
  const store = setupStore();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Main/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
