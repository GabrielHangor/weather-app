import './style.css';
import datactrl from './modules/datactrl';


datactrl.returnWeatherData().then((data) => console.log(data));


