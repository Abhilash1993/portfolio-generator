import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import ACTION from '../common/action_constants.js';
import { getDataWithToken, postDataWithToken } from '../../utils/ajax';
import Api from '../common/api_config';

function* getPortfolioData(action) {
    const data = yield call(getDataWithToken, Api.getUser+action.data);
    let tempData = JSON.parse(data.body);
    if(JSON.parse(data.statusCode) == 200){
        yield put({type: ACTION.PORTFOLIO.STORE_DATA, data: tempData});
    }
}
function* setPortfolioData(action) {
    const data = yield call(postDataWithToken, Api.setuser, JSON.stringify(action.data));
    let cname = "username", cvalue = action.data.username, exdays=10;
    setCookie(cname, cvalue, exdays);
    yield put({type:ACTION.PORTFOLIO.STATUS, data : true});
    yield put({type:ACTION.HOME.LOADHOME});
    yield put({type: ACTION.HOME.STOREUSER, user: data});
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}


export {
    getPortfolioData,
    setPortfolioData
};