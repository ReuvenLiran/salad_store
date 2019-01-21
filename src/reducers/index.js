import { combineReducers } from 'redux';
import salad from './salad';
import modal from './modal';
import checkout from './checkout';

export default combineReducers({
  salad,
  modal,
  checkout,
});
