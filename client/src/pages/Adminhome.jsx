import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHome.css';

const Adminhome = () => {
  return (
    <div className='admin-home-container'>
      <div className='c01'>
        <div className='c02'>
          <Link to='/admin/regflight' className='nav-link'>Register a Flight</Link>
        </div>
      </div>
      <div className='c01'>
        <div className='c02'>
          <Link to='/admin/removeflight' className='nav-link'>Remove a Flight</Link>
        </div>
      </div>
      <div className='c01'>
        <div className='c02'>
          <Link to='/admin/viewflights' className='nav-link'>View based on flight number and time</Link>
        </div>
      </div>
    </div>
  );
}

export default Adminhome;
