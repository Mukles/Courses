import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componetns/Navbar';
import Home from './Componetns/Home';
import About from './Componetns/About';
import Courses from './Componetns/Courses';
import Course from './Componetns/Course';
import ManageCourse from './Componetns/ManageCourse';
import { Route, Switch } from 'react-router-dom';

function App(props) {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/courses' component={Courses} />
        <Route path='/course/:slug' component={ManageCourse}/>
        <Route path='/course/' component={ManageCourse}/>
      </Switch>
    </div>
  );
}


export default App;
