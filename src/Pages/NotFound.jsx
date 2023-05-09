import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='text-center w-full px-6 absolute bottom-72'>
      <h1 className='text-2xl font-black'>
        Sorry, the page you were looking for was not found.
      </h1>
      <Link className='w-full sm:w-96' to='..'>
        <button className='w-full sm:w-96 mt-4 text-white font-bold p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-500'>
          Return to home
        </button>
      </Link>
    </section>
  );
};
export default NotFound;
