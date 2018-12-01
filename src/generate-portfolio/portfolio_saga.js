import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import ACTION from '../common/action_constants.js';
import { getDataWithToken, postDataWithToken } from '../../utils/ajax';
import Api from '../common/api_config';

function* getPortfolioData(action) {
    const data = yield call(getDataWithToken, Api.getUser);
    console.log(JSON.parse(data.body),"portfolio data.body");
    yield put({type:ACTION.HOME.LOADHOME});
    yield put({type: ACTION.HOME.STOREUSER, user: data});
}
function* setPortfolioData(action) {
    const userData = {
        "username": "Abhilash",
        "about": {
          "name": "Jack",
          "surname": "Reacher",
          "email": "abhilash@gmail.com",
          "phone": "408-867-5301"
        },
        "education": [
          {
            "name": "New York University",
            "startDate": {},
            "endDate": {}
          }
        ],
        "skills": [
          "JavaScript"
        ],
        "professional_exp": [
          {
            "company": "Google",
            "startDate": {},
            "endDate": {}
          }
        ],
        "projects": [
          {
            "title": "My personal website",
            "details": "I built my personal website using NodeJS",
            "date": {}
          }
        ],
        "more": "In my free time I like to go fishing"
      };
    const data = yield call(postDataWithToken, Api.setuser, JSON.stringify(userData));
    yield put({type:ACTION.HOME.LOADHOME});
    yield put({type: ACTION.HOME.STOREUSER, user: data});
}

export {
    getPortfolioData,
    setPortfolioData
};