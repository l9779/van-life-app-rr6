import { NavLink, Outlet } from 'react-router-dom';

const HostLayout = () => {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <nav className='flex gap-1'>
        <NavLink
          className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          style={({ isActive }) => (isActive ? activeStyle : null)}
          end
          to='.'
        >
          Dashboard
        </NavLink>
        <NavLink
          className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='income'
        >
          Income
        </NavLink>
        <NavLink
          className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='vans'
        >
          Vans
        </NavLink>
        <NavLink
          className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to='reviews'
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
