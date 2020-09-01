import React, { useEffect, useState } from 'react';
import Alert from './Alert'
import { getLoaderCourese } from './redux/action/CourseAction';
import CourseAction  from '../Componetns/redux/action/CourseAction';
import CourseList from './CourseList';
import { connect } from 'react-redux';
import { Dots } from 'react-preloaders';
import { Link } from 'react-router-dom';
import { Provider } from './Context'

const Courses = (props) => {
  const { data: {data, loading, error} } = props;
  //alert state management
  const [alert, setAlert] = useState({ show: false })

  const alertHandler = () =>{
    setAlert({show: true});
  }

  const linkToprops = () =>{
    props.history.push({
      pathname: '/course',
      search: '?query=abc',
      mydata: alertHandler
    })
  }

  useEffect(()=>{
    if(props.data.data.length ===0){
      props.APICOURSE()
    }
  return  () =>{
      setAlert({show: false})
    }
  }, [])

  return(
    <>
      {loading ? <Dots color={'red'} customLoading={loading} /> :
      <section id='Courses'>
        <div className='container'>
          <button onClick={linkToprops} className= {`${error ? 'd-none': 'btn btn-success mr-auto d-block mt-4 mb-3'}`}>Add Course</button>
          <Alert />
          <div className= {`${error ? 'col-12 d-none' : 'col-12 d-none d-md-block' }`} style={{dispaly: 'non'}}>
            <div className='row py-3 border mt-3 '>
              <div className='col-8'>
                <h6 className='text-left'>Title</h6>
              </div>
              <div className='col-md-2'>
                <h6>Author</h6>
              </div>
              <div className='col-md-2'>
                <h6>Catagory</h6>
              </div>
            </div>
          </div>
          { data.length > 0 ? data.map((item, index) => <CourseList key={index} {...item} />) : <h1 className='mt-5'>{error}</h1> }
        </div>
      </section>
    }
    </>
  )
}
const mapStateToProps = state => ({data: state.apiCourse})
const mapDispatchToProps = dispatch =>({ APICOURSE: () => dispatch(getLoaderCourese())})

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
