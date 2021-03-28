import './style.css';
import datactrl from './modules/datactrl';

datactrl.getData().then((data) => console.log(data));
