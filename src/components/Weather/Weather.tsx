import {Button, Skeleton} from '@mui/material';
import {WeatherDays} from '../WeatherDays/WeatherDays';
import {WeatherHours} from '../WeatherHours/WeatherHours'
import { WeatherInfo } from '../WeatherInfo/WeatherInfo';
import {convertTemp} from '../helpers/convertTemp';
import { useActions, useAppSelector } from '../../redux/hook';
import {Cloud} from '@mui/icons-material';
import {generateIcon} from '../helpers/generateIcon'
import styles from './Weather.module.scss';

export const Weather = () => {

	const {data, isLoading, error} = useAppSelector(state => state.weatherReducer)
	const {unitTemp} = useAppSelector(state => state.unitReducer)
	const {toggleMenu} = useActions()
	const {temp, clouds} = {...data?.current};
	const WeatherContent = () => (
		<div className={styles.content}>
			<div className={styles.icontemp}>
			{generateIcon(data?.current.weather[0].icon)}
			<h2 className={styles.temp}>	
				{convertTemp(temp, unitTemp)}
				<sup>{unitTemp}</sup>
			</h2>	
			</div>
			<h3 className={styles.desc}>{data?.current.weather[0].description}</h3>
			<span className={styles.clouds}>
				<Cloud />
				{clouds}%
			</span>
			<WeatherDays />
			<Button
				className={styles.btn}
				variant='contained'
				onClick={() => toggleMenu()}
			>
				Прогноз на неделю
			</Button>
			<WeatherHours />
			<WeatherInfo />
		</div>
	)

	return (
		<div className={styles.container}>
			<div className={styles.weather}>
				{isLoading || error ? <Skeleton height={630} /> : <WeatherContent />}
			</div>
		</div>
	)
}