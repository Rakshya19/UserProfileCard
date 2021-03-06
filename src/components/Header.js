import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <Link className='header__title' to='/'>
            <i className='fas fa-home' style={{ fontSize: '35px' }}></i>
          </Link>
          <Link to='/user/create'>
            <button className='button__click button--link'>Create Profile</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
