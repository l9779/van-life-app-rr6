import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../../Components/Loading';

const Vans = () => {
  const [vans, setVans] = useState([]);

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
    return (
      <>
        {vans.map((van) => {
          const { id, name, price, imageUrl, type } = van;
          return (
            <Link to={`/vans/${id}`} key={id}>
              <img className='w-48 rounded-md' src={imageUrl} alt={name} />
              <div className='flex justify-between'>
                <h2 className='font-bold text-lg capitalize'>{name}</h2>
                <div className='flex flex-col'>
                  <h2 className='font-bold text-lg'>${price}</h2>
                  <p className='text-sm leading-3 text-right'>/day</p>
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
    <main className='m-6'>
      <h1 className='font-bold text-2xl'>Explore our vans options</h1>
      <div className='flex gap-4 my-4 mb-12 relative'>
        <button className='text-center rounded-md p-1 w-20 text-zinc-700 bg-orange-100 hover:bg-orange-200'>
          Simple
        </button>
        <button className='text-center rounded-md p-1 w-20 text-zinc-700 bg-orange-100 hover:bg-orange-200'>
          Luxury
        </button>
        <button className='text-center rounded-md p-1 w-20 text-zinc-700 bg-orange-100 hover:bg-orange-200'>
          Rugged
        </button>
        <button className='underline absolute right-0 text-zinc-700 hover:text-zinc-900'>
          Clear filters
        </button>
      </div>
      {vans.length > 0 ? (
        <div className='grid grid-cols-2 gap-6'>
          <VanTile />
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};
export default Vans;
