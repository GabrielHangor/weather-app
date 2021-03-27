import './style.css';
import datactrl from './modules/datactrl';

datactrl.returnWeatherData('Moscow', 'Russia').then((data) => console.log(data));

