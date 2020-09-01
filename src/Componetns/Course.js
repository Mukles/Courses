import React, { useEffect } from 'react';
import { getLoaderCourese } from './redux/action/CourseAction';
import { connect } from 'react-redux';

const Course = props => {
  useEffect(()=>{
    if(props.data.data){
      props.APICOURSE()
    }
  },[]);

    const matchData = props.data.data.find(item => item.name ===  props.match.params.slug);

  return(
    <section id='course-item'>
      <div className='container'>
      { matchData && <div className='container'>
        <div className='row'>
          <ul className='list-group'>
            <li className='list-group-item'></li>
          
          </ul>
        </div>
    </div>}
      </div>
    </section>
  )
}

const mapStateToProps = state => ({data: state.apiCourse})
const mapDispatchToProps = dispatch =>({ APICOURSE: () => dispatch(getLoaderCourese())})


export default connect(mapStateToProps, mapDispatchToProps)(Course);
