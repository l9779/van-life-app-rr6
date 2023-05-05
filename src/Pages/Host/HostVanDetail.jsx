import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Arrow } from '../../Components/Icons';
import Loading from '../../Components/Loading';

const HostVanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/host/vans/${params.id}`);
        const data = await response.json();
        setVan(data.vans[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [params.id]);

  return (
    <div className='p-6'>
      <Link className='underline flex mb-4' to={'/host/vans'}>
        <Arrow /> Back to all vans
      </Link>
      {van ? (
        <article className='grid grid-cols-3 grid-rows-8 rounded-md gap-x-4 p-4 bg-white'>
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

          <nav className='flex gap-4 mt-4 mb-2'>
            <Link to={'#'}>Details</Link>
            <Link to={'#'}>Pricing</Link>
            <Link to={'#'}>Photos</Link>
          </nav>

          <p className='col-span-3 capitalize mt-2 mb-2'>
            <b>Name: </b>
            {van.name}
          </p>
          <p className='col-span-3 capitalize mt-2 mb-2'>
            <b>Category: </b>
            {van.type}
          </p>
          <p className='col-span-3 mt-2 mb-2'>
            <b>Description: </b>
            {van.description}
          </p>
          <p className='col-span-3 mt-2 mb-2'>
            <b>Visibility: </b>Public
          </p>
        </article>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default HostVanDetail;
