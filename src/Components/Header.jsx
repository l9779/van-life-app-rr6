import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import { UserIcon, LogoutIcon } from './icons';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('loggedIn')
  );

  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <header className='h-28 px-4 sm:px-16 lg:px-28 flex gap-2 justify-between items-center bg-orange-50'>
      <Link to='/'>
        <img className='w-44' src='/img/logo.png' alt='vanlife logo' />
      </Link>
      <nav className='flex sm:text-lg gap-1 sm:gap-4 text-center'>
        <NavLink
          className='w-12 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='host'
        >
          Host
        </NavLink>
        <NavLink
          className='w-12 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='about'
        >
          About
        </NavLink>
        <NavLink
          className='w-12 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='vans'
        >
          Vans
        </NavLink>
        {isLoggedIn ? (
          <NavLink
            onClick={() => {
              localStorage.clear();
              setIsLoggedIn(false);
            }}
          >
            <LogoutIcon />
          </NavLink>
        ) : (
          <NavLink to='login'>
            <UserIcon />
          </NavLink>
        )}
      </nav>
    </header>
  );
};
export default Header;
