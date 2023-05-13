import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';

import Loading from '../../Components/Loading';

const Dashboard = () => {
  const dataPromise = useLoaderData();

  function renderVanElements(vans) {
    const hostVansElements = vans.map((van) => {
      const { id, name, imageUrl, price } = van;
      return (
        <div
          key={id}
          className='flex gap-2 items-center justify-between rounded-sm p-4 bg-white'
        >
          <img className='w-[25%] rounded-sm' src={imageUrl} alt={name} />
          <div className='flex flex-col w-[65%]'>
            <h1 className='font-bold'>{name}</h1>
            <p className='text-gray-500'>
              <b>${price}</b>
              <span>/day</span>
            </p>
          </div>
          <h3 className='w-[10%] '>Edit</h3>
        </div>
      );
    });

    return (
      <section className='flex flex-col gap-4'>{hostVansElements}</section>
    );
  }

  return (
    <>
      <section className='bg-orange-100 p-4'>
        <h1 className='font-bold text-2xl'>Welcome!</h1>
        <div className='flex justify-between my-2'>
          <p className='text-gray-600'>
            Income last&nbsp;
            <span className='text-gray-800 underline font-bold'>30 Days</span>
          </p>
          <h2>Details</h2>
        </div>
        <h1 className='font-extrabold text-4xl'>$2,260</h1>
      </section>

      <section className='flex justify-between bg-orange-200 px-4 py-6'>
        <div className='flex gap-1'>
          <h1 className='font-bold text-lg'>Review Score</h1>
          <BsStarFill className='text-orange-500 self-center ' />
          <p className='self-center'>
            <b>5.0</b>
            <span>/5</span>
          </p>
        </div>
        <h2>Details</h2>
      </section>

      <section className='p-4 mb-20'>
        <div className='flex justify-between mb-4'>
          <h1 className='text-lg font-bold'>Your listed vans</h1>
          <h2>View all</h2>
        </div>
        <Suspense fallback={<Loading />}>
          <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
        </Suspense>
      </section>
    </>
  );
};
export default Dashboard;
