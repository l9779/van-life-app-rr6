import { Suspense } from 'react';
import { Await, Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';

import Loading from '../../Components/Loading';

const HostVanDetail = () => {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  const dataPromise = useLoaderData();

  function renderVanElement(van) {
    return (
      <article className='grid grid-cols-3 md:grid-cols-5 grid-rows-4 rounded-md gap-x-4 p-4 mb-20 bg-white'>
        <img
          className='rounded-sm w-56 col-span-1 row-span-3'
          src={van.imageUrl}
          alt={van.name}
        />
        <h2
          className={`col-span-2 md:col-span-4 self-end text-white text-center font-semibold rounded-md p-1 h-8 w-20 capitalize bg-${van.type}`}
        >
          {van.type}
        </h2>
        <h1 className='col-span-2 md:col-span-4 self-center text-xl font-bold'>
          {van.name}
        </h1>
        <p className='col-span-2 md:col-span-4  text-slate-600'>
          ${van.price}/day
        </p>

        <nav className='flex gap-2 col-span-2 md:col-span-4 mt-2'>
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
        <section className='col-span-3 md:col-span-4 p-2'>
          <Outlet context={van} />
        </section>
      </article>
    );
  }

  return (
    <div className='p-6 md:mx-40'>
      <Link className='underline flex mb-4' to='..' relative='path'>
        &larr; <span>Back to all vans </span>
      </Link>
      <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise.van}>{renderVanElement}</Await>
      </Suspense>
    </div>
  );
};
export default HostVanDetail;
