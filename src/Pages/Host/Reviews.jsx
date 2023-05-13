import { BsStarFill } from 'react-icons/bs';

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 5,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ];

  return (
    <section className='p-4 mb-20 flex flex-col gap-4'>
      <div className='flex gap-2'>
        <h2 className='text-2xl font-bold'>Your reviews</h2>
        <p className='text-gray-700 text-sm self-center'>
          Last <span className='font-bold underline'>30 days</span>
        </p>
      </div>
      <img src='/img/review-graph.png' alt='Review graph' />
      <h3 className='font-bold'>Reviews (2)</h3>
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className=''>
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className='inline-flex text-orange-500' key={i} />
            ))}
            <div className='flex gap-2'>
              <p className='font-bold'>{review.name}</p>
              <p className='text-gray-600 font-bold'>{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}
