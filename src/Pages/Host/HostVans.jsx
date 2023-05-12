import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';

import Loading from '../../Components/Loading';

const HostVans = () => {
  const dataPromise = useLoaderData();

  function renderVansElements(vans) {
    const vansElement = vans.map((van) => {
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
    });

    return <div className='flex flex-col gap-4 mt-5 '>{vansElement}</div>;
  }

  return (
    <section className='pt-6 px-6 pb-20 md:mx-40'>
      <h1 className='text-2xl font-bold'>Your Listed Vans</h1>
      <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise.vans}>{renderVansElements}</Await>
      </Suspense>
    </section>
  );
};
export default HostVans;
