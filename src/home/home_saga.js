import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import ACTION from '../common/action_constants.js';
import { getDataWithToken } from '../../utils/ajax';
import Api from '../common/api_config';
function* home(action) {
    const data1 = yield call(getDataWithToken, Api.getUser+action.data);
    let user = JSON.parse(data1.body);
    let data = [];
    data.push(user);
    console.log(data);
    yield put({type:ACTION.HOME.LOADHOME});
    yield put({type: ACTION.HOME.STOREUSER, user: data});
}

export {
    home
};