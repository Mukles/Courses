import * as types from './actionTypes';

const createCourses = courses => ({ type: types.CREATE_COURSE, payload: courses});
const COURSE_SUCCESS = data => ({type: types.COURSE_SUCCESS, data: data});
const COURSE_ERROR = err => ({type: types.COURSE_ERROR, err});
const COURSE_LOADING = () => ({type: types.COURSE_LOADING});
//updating
export const COURSE_UPDATE = course => ({type: types.COURSE_UPDATE, data: course});

export const getLoaderCourese = () => {
  return (dispatch) =>{
    dispatch(COURSE_LOADING())
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(res => res.json())
      .then(data => dispatch(COURSE_SUCCESS(data)))
      .catch(err => dispatch(COURSE_ERROR(err.message)))
  }
}

export default createCourses;
