import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: { title: ''}
    }
  }


  onChange = (event) => {
    const courses = {...this.state.courses, title: event.target.value}
      this.setState({courses})
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.state.courses.title){
      this.setState({courses: this.state.courses}, () => this.props.createCourses(this.state.courses))
    }
  };

  render(){
    return (
      <>
        <section id='Home'>
          <div className='container'>
            <h1>Courses</h1>
            <h3>Add Courses</h3>
            <form onSubmit={this.onSubmit}>
              <input type='text' value={this.state.courses.title} onChange={this.onChange} />
              <input type='submit'className='border-0 py-1' value ='Save' />
            </form>
          </div>
        </section>
        <section id='courses-list'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 mx-auto bg-dark p-5 mt-3 rounded'>
              <ul className='list-group'>

              </ul>
              </div>
            </div>
          </div>
        </section>
    </>
    )
  }
}

export default Home;
