import { takeEvery } from 'redux-saga/effects';
import ACTION from './common/action_constants';
import {about} from './about/about_saga';
import {getPortfolioData, setPortfolioData} from "./generate-portfolio/portfolio_saga";
import {home} from "./home/home_saga";

export default () => [
  takeEvery(ACTION.PORTFOLIO.GET_DATA, getPortfolioData),
  takeEvery(ACTION.PORTFOLIO.SEND_DATA, setPortfolioData),
  takeEvery(ACTION.HOME.GETHOME, home)
];