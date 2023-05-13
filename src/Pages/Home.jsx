import BtnExploreVans from '../Components/BtnExploreVans';

const Home = () => {
  return (
    <div className='home-bg bg-cover h-screen  sm:pt-16 px-6 sm:px-32 flex flex-col gap-10 sm:gap-20'>
      <h1 className='text-4xl font-bold mt-10 text-left sm:text-center text-white'>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className='text-white text-left sm:text-lg sm:text-center'>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <BtnExploreVans
        text='Find your van'
        classList='w-96 mx-auto rounded-md py-2 text-white bg-orange-400 hover:bg-orange-500 active:bg-orange-300 '
      />
    </div>
  );
};
export default Home;
