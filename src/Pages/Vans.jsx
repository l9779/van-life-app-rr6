import { useState } from 'react';
import { useEffect } from 'react';

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

  const VanCard = () => {
    return (
      <>
        {vans.map((van) => {
          const { id, name, price, imageUrl, type } = van;
          return (
            <div key={id}>
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
            </div>
          );
        })}
      </>
    );
  };

  return (
    <main className='m-6'>
      <h1 className='font-bold text-2xl'>Explore our vans options</h1>
      <div className='flex gap-4 my-4 mb-12 relative'>
        <button className='text-center rounded-md p-1 w-20 text-zinc-700 bg-orange-100'>
          Simple
        </button>
        <button className='text-center rounded-md p-1 w-20 text-zinc-700 bg-orange-100'>
          Luxury
        </button>
        <button className='text-center rounded-md p-1 w-20 text-zinc-700 bg-orange-100'>
          Rugged
        </button>
        <button className='underline absolute right-0 text-zinc-700 hover:text-zinc-900'>
          Clear filters
        </button>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <VanCard />
      </div>
    </main>
  );
};
export default Vans;
