import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Loading from '../../Components/Loading';

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);
  const search = useLocation().state?.search || null;
  const type = useLocation().state?.type || 'all';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/vans/${params.id}`);
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
      <Link className='underline' to={`./..?${search}`}>
        &larr; <span> Back to {type} vans</span>
      </Link>
      {van ? (
        <article className='mt-8'>
          <img className='rounded-md mb-8' src={van.imageUrl} alt={van.name} />
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
        </article>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default VanDetail;
