import { Link, Outlet } from 'react-router-dom';

const HostLayout = () => {
  return (
    <main className='min-h-screen p-6 bg-orange-50'>
      <nav className='flex gap-1'>
        <Link
          className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          to='/host'
        >
          Dashboard
        </Link>
        <Link
          className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          to='/host/income'
        >
          Income
        </Link>
        <Link
          className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
          to='/host/reviews'
        >
          Reviews
        </Link>
      </nav>
      <Outlet />
    </main>
  );
};
export default HostLayout;
