import { combineReducers } from 'redux';
import home from './home/home_reducer';
import portfolio from "./generate-portfolio/portfolio_reducer";
import apiCall from "./generate-portfolio/api_call_reducer";
const rootReducers = combineReducers({
  home,
  portfolio,
  apiCall
});

export default rootReducers;