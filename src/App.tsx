import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { setupStore } from './store';
import { usePosition } from 'use-position';
import { useEffect } from 'react';
import { fetchWeather } from './services/fetchWeather';
import { useAppDispatch } from '../src/redux/hook';

function App() {
  const store = setupStore();

  // const { latitude, longitude } = usePosition(false);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (latitude && longitude) dispatch(fetchWeather({ lat: latitude, lon: longitude }))
  // }, [latitude, longitude])



  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <h1>Hello</h1>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
