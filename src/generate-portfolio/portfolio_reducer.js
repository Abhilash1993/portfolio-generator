import ACTION from '../common/action_constants';

function portfolio(state = {},action){
  let tempState = Object.assign({}, state);
  if(action.type === ACTION.PORTFOLIO.STORE_DATA) {
    tempState = Object.assign({},state,action.data);
    console.log(tempState);
    return tempState;
  }else if(action.type === ACTION.PORTFOLIO.STORE_URLS){
    tempState.about["URLs"] = action.data;
    return tempState;
  }
  return state;
}
export default portfolio;
