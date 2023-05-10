const Login = () => {
  return (
    <section className='flex flex-col items-center mt-14 px-4 mx-auto sm:w-[60%] md:w-[45%] lg:w-[30%]'>
      <h1 className='font-bold text-2xl mb-8'>Sign in to your account</h1>
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
      <button className='w-full rounded-md py-2 mt-4 font-bold text-white bg-orange-400 hover:bg-orange-500 active:bg-orange-300 '>
        Sign in
      </button>
      <span className='mt-8'>
        Don&apos;t have a account?
        <button className='text-orange-400 font-bold hover:underline'>
          &nbsp;Create one now
        </button>
      </span>
    </section>
  );
};
export default Login;
