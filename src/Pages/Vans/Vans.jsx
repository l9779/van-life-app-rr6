import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Loading from '../../Components/Loading';

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get('type');
  console.log(typeFilter);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/api/vans');
        const data = await response.json();
        setVans(data.vans);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

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
              to={`/vans/${id}`}
              key={id}
            >
              <img className='min-w-48 rounded-md' src={imageUrl} alt={name} />
              <div className='min-w-48 flex relative'>
                <h2 className='font-bold text-lg capitalize'>{name}</h2>
                <div className='flex flex-col absolute right-0'>
                  <h2 className='font-bold text-lg'>${price}</h2>
                  <span className='text-sm leading-3 self-end'>/day</span>
                </div>
              </div>
              <h2
                className={`text-white text-center font-semibold rounded-md p-1 w-20 capitalize bg-${type}`}
              >
                {type}
              </h2>
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div className='p-6'>
      <h1 className='font-bold text-2xl'>Explore our vans options</h1>
      https://youtu.be/nDGA3km5He4?t=14517
      <div className='flex gap-4 my-4 mb-12 relative'>
        <Link
          to='?type=simple'
          className='text-center rounded-md p-1 w-20 text-zinc-700 bg-orange-100 hover:bg-orange-200 active:bg-orange-300'
        >
          Simple
        </Link>
        <Link
          to='?type=luxury'
          className='text-center rounded-md p-1 w-20 text-zinc-700 bg-orange-100 hover:bg-orange-200 active:bg-orange-300'
        >
          Luxury
        </Link>
        <Link
          to='?type=rugged'
          className='text-center rounded-md p-1 w-20 text-zinc-700 bg-orange-100 hover:bg-orange-200 active:bg-orange-300'
        >
          Rugged
        </Link>
        <Link
          to='.'
          className='underline absolute right-0 text-zinc-700 hover:text-zinc-900'
        >
          Clear filters
        </Link>
      </div>
      {vans.length > 0 ? (
        <section className='grid grid-cols-2 lg:grid-cols-3 gap-6'>
          <VanTile />
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default Vans;
