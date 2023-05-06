import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <header className='h-28 px-4 lg:px-10 flex justify-between items-center bg-orange-50'>
      <Link to='/'>
        <img className='w-44' src='/img/logo.png' alt='vanlife logo' />
      </Link>
      <nav className='flex gap-2 text-center'>
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
      </nav>
    </header>
  );
};
export default Header;
