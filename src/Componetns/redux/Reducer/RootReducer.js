import { combineReducers } from 'redux';
import  coursesReducer  from './coursesReducer';
import apiCourseReducer from './apiCourseReducer';

const RootReducer = combineReducers({
  courses: coursesReducer,
  apiCourse: apiCourseReducer
});

export default RootReducer;
