import { Link, useLoaderData, useLocation } from 'react-router-dom';

const VanDetail = () => {
  const search = useLocation().state?.search || null;
  const type = useLocation().state?.type || 'all';

  const van = useLoaderData();

  return (
    <div className='p-6 lg:px-36'>
      <Link className='underline pl-8' to={`./..?${search}`}>
        &larr; <span> Back to {type} vans</span>
      </Link>

      <article className='sm:flex sm:gap-x-6 mt-8 mb-20 sm:mx-4 p-6 bg-white rounded-md'>
        <img
          className='rounded-md mx-auto mb-8 sm:w-[50%]'
          src={van.imageUrl}
          alt={van.name}
        />
        <section className='sm:w-[45%]'>
          <div
            className={`text-white capitalize font-semibold text-center rounded-md w-20 p-1 mb-4 bg-${van.type}`}
          >
            {van.type}
          </div>
          <h1 className='font-bold capitalize text-xl'>{van.name}</h1>
          <p className='my-2'>
            <b className='text-lg'>${van.price}</b>/day
          </p>
          <p className='text-sm mb-4'>{van.description}</p>
          <button className='w-[100%] md:w-[50%] rounded-md mx-auto py-2 text-white bg-orange-400 hover:bg-orange-500 active:bg-orange-300'>
            Rent this van
          </button>
        </section>
      </article>
    </div>
  );
};
export default VanDetail;
