import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

import Loading from '../../Components/Loading';

const HostVanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/host/vans/${params.id}`);
        const data = await response.json();
        setVan(data.vans);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [params.id]);

  return (
    <div className='p-6'>
      <Link className='underline flex mb-4' to='..' relative='path'>
        &larr; <span>Back to all vans </span>
      </Link>
      {van ? (
        <article className='grid grid-cols-3 grid-rows-4 rounded-md gap-x-4 p-4 bg-white'>
          <img
            className='rounded-sm col-span-1 row-span-3'
            src={van.imageUrl}
            alt={van.name}
          />
          <h2
            className={`col-span-2 self-end text-white text-center font-semibold rounded-md p-1 h-8 w-20 capitalize bg-${van.type}`}
          >
            {van.type}
          </h2>
          <h1 className='col-span-2 self-center text-xl font-bold'>
            {van.name}
          </h1>
          <p className='col-span-2  text-slate-600'>${van.price}/day</p>

          <nav className='flex gap-2 col-span-2 mt-4 mb-2'>
            <NavLink
              className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to='.'
              end
            >
              Details
            </NavLink>
            <NavLink
              className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to='pricing'
            >
              Pricing
            </NavLink>
            <NavLink
              className='text-center w-24 text-zinc-800 hover:underline hover:text-black hover:font-semibold'
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to='photos'
            >
              Photos
            </NavLink>
          </nav>
          <div className='col-span-3'>
            https://youtu.be/nDGA3km5He4?t=12233
            <Outlet />
          </div>
        </article>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default HostVanDetail;
