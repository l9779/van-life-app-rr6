import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../../Components/Loading';

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/host/vans');
        const data = await response.json();
        setVans(data.vans);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold'>Your Listed Vans</h1>
      {vans.length > 0 ? (
        <div className='flex flex-col gap-4 mt-5'>
          {vans.map((van) => {
            const { id, name, price, imageUrl } = van;
            return (
              <Link to={`/host/vans/${id}`} key={id}>
                <div className='grid grid-cols-4 grid-rows-2 rounded-md gap-x-4 p-4 bg-white'>
                  <img
                    className='rounded-md col-span-1 row-span-2'
                    src={imageUrl}
                    alt={name}
                  />
                  <h2 className='col-span-3 self-end font-bold'>{name}</h2>
                  <p className='col-span-3 text-slate-600'>${price}/day</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default HostVans;
