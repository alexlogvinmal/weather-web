import { usePosition } from 'use-position';
import { useEffect } from 'react';
import { fetchWeather } from '../services/fetchWeather';
import { useAppDispatch } from '../redux/hook';
import { Header } from './Header/Header';
import { Weather } from './Weather/Weather';
import { Menu } from './Menu/Menu';
import { Modal } from './Modal/Modal';
import styles from './Main.module.scss'

function Main() {

    const { latitude, longitude } = usePosition(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (latitude && longitude) dispatch(fetchWeather({ lat: latitude, lon: longitude }))
    }, [latitude, longitude])


    return ( 
        <div className={styles.container}>
            <Header />
            <Weather />
            <Menu />
            <Modal />    
        </div>
    );
}

export default Main;
