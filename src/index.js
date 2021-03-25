import './style.css';
import datactrl from './modules/datactrl';

const dataObj = datactrl.returnWeatherData('Moscow', 'Russia');

console.log(dataObj)