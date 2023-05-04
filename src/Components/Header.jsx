import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-28 px-4 lg:px-10 flex justify-between items-center'>
      <Link to='/'>
        <img className='w-44' src='/img/logo.png' alt='vanlife logo' />
      </Link>
      <nav className='flex gap-2 text-center'>
        <Link
          className='w-12 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          to='/host'
        >
          Host
        </Link>
        <Link
          className='w-12 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          to='/about'
        >
          About
        </Link>
        <Link
          className='w-12 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          to='/vans'
        >
          Vans
        </Link>
      </nav>
    </header>
  );
};
export default Header;
