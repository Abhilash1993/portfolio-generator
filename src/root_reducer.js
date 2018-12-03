import { combineReducers } from 'redux';
import home from './home/home_reducer';
import portfolio from "./generate-portfolio/portfolio_reducer";

const rootReducers = combineReducers({
  home,
  portfolio
});

export default rootReducers;