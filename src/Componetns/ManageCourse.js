import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import TextInput from './TextInput';
import { getLoaderCourese } from './redux/action/CourseAction';
import { COURSE_UPDATE } from './redux/action/CourseAction';
import { Link } from 'react-router-dom'

const ManageCourse = props => {
  const { data:{ data} } = props
  const [course, setCourse] = useState({name: '', email: '', postId: ''});
  const onchange = (event) =>{
    const { name, value } = event.target
    setCourse({...course, [name]: name ==='postId' ? +value : value })
  }

  const onclick = event => {
    event.preventDefault();
    props.COURSE_UPDATE(course);
  }

  let matchData = data.find(item => item.name === props.course.match.params.slug);

  useEffect(() =>{
    if(data.length ===0){
      props.getLoaderCourese();
    }
    if(matchData){
      setCourse({...course, name: matchData.name, email: matchData.email, postId: matchData.postId})
    }
  },[matchData]);

  return (
    <section id='manage-course'>
      <div className='col-md-6 text-left mx-auto bg-light p-5 rounded mt-5'>
      {matchData ? <h1 className='text-center mb-5'>Edit Course</h1> : <h1 className='text-center mb-5'>Add New Course</h1>}
        <form onSubmit={onclick}>
          <TextInput heading={'Title'} type={'text'} name={'name'} onchange={onchange} course={course} value={course.name} />
          <TextInput heading={'Author'} type={'text'} name={'email'} onchange={onchange} course={course} value={course.email} />
          <TextInput heading={'Catagory'} type={'number'} name={'postId'} onchange={onchange } course={course} value={course.postId} />
          <Link onClick={props.history.location.mydata} to='/courses' type="submit" className="btn btn-success d-block mt-4" course={course} >{matchData ? 'Edited': 'Save'}</Link>
        </form>
      </div>
    </section>
  )
}

const mapStateToProps = (state, ownProps) => ({ data: state.apiCourse, course: ownProps })
const mapDispatchToProps = {
  getLoaderCourese,
  COURSE_UPDATE
}


export default  connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
