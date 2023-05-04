const Home = () => {
  return (
    <div className='home-bg bg-cover h-96 md:h-100 px-6 flex flex-col justify-around'>
      <h1 className='text-white text-4xl font-bold mt-10'>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className='text-white '>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className='text-white bg-orange-400 hover:bg-orange-500 w-[100%] md:w-[50%] rounded-md mb-10 mx-auto py-2'>
        Find your van
      </button>
    </div>
  );
};
export default Home;
