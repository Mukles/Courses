import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = props => {
  const { name, email, postId } = props;
  return(
    <div className='course-list border py-2 mt-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-md-8 text-left'>
                <button className='btn btn-light mr-2'>Watch</button>
                <Link to={`course/${name}`} className='h6 text-left d-inline-block'>{name}</Link>
              </div>
              <div className='col-md-2'>
                <h6> { email } </h6>
              </div>
              <div className='col-md-2'>
                <h6> { postId } </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseList;
