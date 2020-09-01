import * as types from '../action/actionTypes';
import { produce } from 'immer';

const apiCourseReducer = (state ={
  loading: true,
  data: [],
  error: ''}, action) => {
  switch(action.type){
    case types.COURSE_LOADING:
      return {...state, loading: true}
    case types.COURSE_SUCCESS:
      return {...state, loading: false, data: action.data}
    case types.COURSE_ERROR:
      return {...state, loading: false, error: action.err}
    case types.COURSE_UPDATE:
      return state.data.find( item => item.id === action.data.postId ) ?  produce(state, drafState => {
                const index = drafState.data.indexOf(drafState.data.find( item => item.id === action.data.postId));
                  drafState.data[index].name = action.data.name;
                  drafState.data[index].email = action.data.email;
                }): {...state, data: [...state.data, { postId: 1, id: action.data.postId, name: action.data.name, email: action.data.email }]}

    default:
      return state
  }
}

export default apiCourseReducer
