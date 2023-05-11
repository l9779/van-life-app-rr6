import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';

const Login = () => {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const { state } = useNavigation();

  return (
    <section className='flex flex-col items-center px-4 mt-14 mx-auto sm:w-[60%] md:w-[45%] lg:w-[30%]'>
      <h1 className='font-black text-2xl mb-4'>Sign in to your account</h1>
      {message && <h2 className='text-red-800 font-black mb-4'>{message}</h2>}
      {errorMessage && (
        <h2 className='text-red-800 font-black mb-4'>{errorMessage}</h2>
      )}
      <Form method='post' replace>
        <input
          className='w-full p-1 border-solid border-gray-300  border-t-2 border-r-2 border-l-2 border-b-0 placeholder:text-zinc-500'
          type='email'
          name='email'
          id='email'
          placeholder='Email address'
        />
        <input
          className='w-full p-1 border-solid border-gray-300 border-2 placeholder:text-zinc-500'
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <button
          type='submit'
          disabled={state === 'submitting'}
          className='w-full rounded-md py-2 mt-4 font-bold text-white  bg-orange-400 hover:bg-orange-500 active:bg-orange-600 disabled:bg-orange-300'
        >
          {state === 'submitting' ? 'Logging in...' : 'Sign in'}
        </button>
      </Form>
      <span className='mt-8'>
        Don&apos;t have a account?&nbsp;
        <button className='text-orange-400 font-bold hover:underline'>
          Create one now
        </button>
      </span>
    </section>
  );
};
export default Login;
