import { Link, useLoaderData, useSearchParams } from 'react-router-dom';

import { getVans } from '../../api';

export function loader() {
  return getVans();
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const vans = useLoaderData();

  const VanTile = () => {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    return (
      <>
        {displayedVans.map((van) => {
          const { id, name, price, imageUrl, type } = van;

          return (
            <Link
              className='w-54 p-4 bg-white rounded-sm'
              to={id}
              state={{ search: searchParams.toString(), type: typeFilter }}
              key={id}
            >
              <img className='min-w-48 rounded-md' src={imageUrl} alt={name} />
              <div className='min-w-48 sm:grid sm:grid-cols-3'>
                <h2 className='font-bold text-base sm:text-lg sm:col-span-2 capitalize'>
                  {name}
                </h2>
                <div className='sm:col-span-1 justify-self-end'>
                  <b className='font-bold text-base sm:text-lg'>${price}</b>
                  <span className='text-sm'>/day</span>
                </div>
                <h2
                  className={`text-white text-center font-semibold rounded-md p-1 mt-2 w-20 capitalize bg-${type}`}
                >
                  {type}
                </h2>
              </div>
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div className='pt-4 px-4 md:px-28 lg:px-44 pb-24'>
      <h1 className='font-bold text-2xl'>Explore our vans options</h1>
      <div className='flex gap-4 sm:gap-x-4 mt-4 mb-8 sm:px-8'>
        <button
          onClick={() => setSearchParams({ type: 'simple' })}
          className={`text-center rounded-md min-w-[20%] sm:min-w-[10%] py-1 text-zinc-700 hover:bg-orange-200 active:bg-orange-300 
            ${
              typeFilter === 'simple'
                ? 'bg-orange-300 font-bold '
                : 'bg-orange-100'
            }`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: 'luxury' })}
          className={`text-center rounded-md min-w-[20%] sm:min-w-[10%] py-1 text-zinc-700 hover:bg-orange-200 active:bg-orange-300 
            ${
              typeFilter === 'luxury'
                ? 'bg-orange-300 font-bold '
                : 'bg-orange-100'
            }`}
        >
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: 'rugged' })}
          className={`text-center rounded-md min-w-[20%] sm:min-w-[10%] py-1 text-zinc-700 hover:bg-orange-200 active:bg-orange-300 
            ${
              typeFilter === 'rugged'
                ? 'bg-orange-300 font-bold '
                : 'bg-orange-100'
            }`}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            onClick={() => setSearchParams({})}
            className='underline w-2/4 sm:w-4/5 flex justify-end sm:justify-start text-zinc-700 hover:text-zinc-900'
          >
            Clear filters
          </button>
        )}
      </div>

      <section className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        <VanTile />
      </section>
    </div>
  );
};
export default Vans;
