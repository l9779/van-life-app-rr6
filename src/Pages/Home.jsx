import BtnExploreVans from '../Components/BtnExploreVans';

const Home = () => {
  return (
    <div className='home-bg bg-cover bg-orange-50 h-screen px-6 flex flex-col justify-around'>
      <h1 className='text-4xl font-bold mt-10 text-white'>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className='text-white '>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <BtnExploreVans
        text='Find your van'
        classList='w-[100%] md:w-[50%] rounded-md mb-10 mx-auto py-2 text-white bg-orange-400 hover:bg-orange-500'
      />
    </div>
  );
};
export default Home;
