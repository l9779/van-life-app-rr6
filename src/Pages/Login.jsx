import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import { useState } from 'react';

import { loginUser } from '../api';

//https://youtu.be/nDGA3km5He4?t=28800

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  try {
    await loginUser({ email, password });
    localStorage.setItem('loggedIn', true);
    return redirect('/host');
  } catch (error) {
    return error.message;
  }
};

const Login = () => {
  const [status, setStatus] = useState('idle');
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigate = useNavigate();

  async function hanldeSubmit(e) {
    e.preventDefault();
    setStatus('submitting');

    try {
      navigate('/host', { replace: true });
    } finally {
      setStatus('idle');
    }
  }

  return (
    <section className='flex flex-col items-center mt-14 px-4 mx-auto sm:w-[60%] md:w-[45%] lg:w-[30%]'>
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
          disabled={status === 'submitting'}
          className='w-full rounded-md py-2 mt-4 font-bold text-white bg-orange-400 hover:bg-orange-500 active:bg-orange-600'
        >
          {status === 'submitting' ? 'Logging in...' : 'Sign in'}
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
