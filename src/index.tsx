import {createRoot} from 'react-dom/client'
import  App  from './App'
import {usePosition} from 'use-position';
import { useEffect } from 'react';
import { fetchWeather } from './services/fetchWeather';
import { useAppDispatch } from '../src/redux/hook';

const root = createRoot(document.getElementById('root') as HTMLElement)

const {latitude, longitude} = usePosition(false);
const dispatch = useAppDispatch();

useEffect(() => {
    if(latitude && longitude) dispatch(fetchWeather({lat: latitude, lon: longitude}))
}, [latitude, longitude])

root.render(<App />)