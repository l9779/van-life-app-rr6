import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <section className='px-6'>
      <h1 className='text-2xl font-black'>Error: {error.message}</h1>
      <pre className='text-lg'>
        {error.status} - {error.statusText}
      </pre>
    </section>
  );
};
export default Error;
