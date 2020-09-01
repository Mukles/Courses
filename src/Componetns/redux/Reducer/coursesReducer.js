import * as types from '../action/actionTypes';
export default  function coursesReducer (state = [], action) {
  switch (action.type) {
    case (types.CREATE_COURSE):
     return [action.payload, ...state]
     default:
      return state
  }
}
