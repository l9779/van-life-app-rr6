import { Link, useLoaderData } from 'react-router-dom';

// import { getHostVans } from '../../api';
// import { requireAuth } from '../../utils';

// export async function loader() {
//   await requireAuth();
//   return getHostVans();
// }

const HostVans = () => {
  const vans = useLoaderData();

  return (
    <section className='pt-6 px-6 pb-20 md:mx-40'>
      <h1 className='text-2xl font-bold'>Your Listed Vans</h1>

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
    </section>
  );
};
export default HostVans;
