import BtnExploreVans from '../Components/BtnExploreVans';

const About = () => {
  return (
    <div className='mb-10'>
      <img src='/img/about-img.png' alt='van' />
      <article className='px-6'>
        <h1 className='text-3xl font-bold my-6'>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className='text-sm'>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. <br /> (Hitch costs extra 😉)
        </p>
        <p className='text-sm mt-4 mb-8'>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className='bg-orange-300 rounded-sm p-8'>
          <h2 className='text-xl font-bold mb-2'>
            Your destination is waiting.
            <br /> Your van is ready.
          </h2>
          <BtnExploreVans
            text='Explore our vans'
            classList='mt-2 text-white font-bold p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-500'
          />
        </div>
      </article>
    </div>
  );
};
export default About;
