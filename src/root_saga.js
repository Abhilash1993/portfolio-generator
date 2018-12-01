import { takeEvery } from 'redux-saga/effects';
import ACTION from './common/action_constants';
import {home} from './home/home_saga';
import {about} from './about/about_saga';
import {getPortfolioData, setPortfolioData, storePortfolioData} from "./generate-portfolio/portfolio_saga";

export default () => [
  takeEvery(ACTION.PORTFOLIO.GET_DATA, getPortfolioData),
  takeEvery(ACTION.PORTFOLIO.SEND_DATA, setPortfolioData)
];