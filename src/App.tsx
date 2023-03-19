import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { setupStore } from './store';

function App() {

  const store = setupStore();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>

      </Provider>
    </ThemeProvider>
  );
}

export default App;
