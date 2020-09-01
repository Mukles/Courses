import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const links =
    [
      {
        id: 1,
        to: '/',
        link: 'Home'
      },
      {
        id: 2,
        to: '/courses',
        link: 'Courses'
      },
      {
        id: 3,
        to: '/about',
        link: 'About'
      }
    ]


  return(
    <section id='Navbar'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <nav className="navbar navbar-expand-lg navbar-light navbar-light bg-light mt-3 rounded">
              <NavLink to='/' activeClassName='active' className='navbar-brand' >Navbar</NavLink>
              <button className='navbar-toggler border-0'><span><i className="fas fa-bars"></i></span></button>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                  {
                    links.map((link, index) => <li  key= {index} className='nav-link' activeclassname="active"><NavLink className='nav-link font-weight-bold' exact to={link.to}>{link.link}</NavLink></li>)
                  }
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar;
