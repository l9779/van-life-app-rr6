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
    <div className='pt-6 px-6 pb-20 md:mx-40'>
      <h1 className='text-2xl font-bold'>Your Listed Vans</h1>
      {vans.length > 0 ? (
        <div className='flex flex-col gap-4 mt-5 '>
          {vans.map((van) => {
            const { id, name, price, imageUrl } = van;
            return (
              <Link to={id} key={id}>
                <div className='flex gap-4 p-4 bg-white'>
                  <img className='rounded-md w-28 ' src={imageUrl} alt={name} />
                  <div className='self-center'>
                    <h2 className=' font-bold'>{name}</h2>
                    <p className=' text-slate-600'>${price}/day</p>
                  </div>
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
