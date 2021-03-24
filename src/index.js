import './style.css';
import datactrl from './modules/datactrl';

const responseData = datactrl.getWeatherData('Moscow', 'Russia');
responseData.then((data) => console.log(data));

