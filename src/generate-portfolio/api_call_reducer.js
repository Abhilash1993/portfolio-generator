import ACTION from '../common/action_constants';

function apiCall(state = { status: false},action){
  const tempState = Object.assign({}, state);
  if(action.type === ACTION.PORTFOLIO.STATUS) {
    tempState.status = action.data;
    return tempState;
  } 
  return state;
}
export default apiCall;