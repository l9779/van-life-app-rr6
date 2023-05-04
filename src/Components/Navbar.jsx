import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='h-28 px-4 lg:px-10 flex justify-between items-center'>
      <Link to='/'>
        <h1 className='uppercase text-4xl font-bold'>#vanlife</h1>
      </Link>
      <nav className='flex gap-8'>
        <Link to='/about'>About</Link>
        <Link to='/'>Vans</Link>
      </nav>
    </header>
  );
};
export default Navbar;
