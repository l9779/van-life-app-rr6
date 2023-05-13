const Income = () => {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: '1' },
    { amount: 560, date: "Dec 12, '22", id: '2' },
    { amount: 980, date: "Dec 3, '22", id: '3' },
  ];
  return (
    <section className='p-4 mb-20 flex flex-col gap-4'>
      <h1 className='font-bold text-lg'>Income</h1>
      <p className='text-sm text-gray-700'>
        Last <span className='underline'>30 days</span>
      </p>
      <h2 className='font-extrabold text-xl'>$2,260</h2>
      <img src='/img/income-graph.png' alt='Income graph' />
      <div className='flex justify-between'>
        <h3 className='font-bold'>Your transactions (3)</h3>
        <p className='text-gray-700'>
          Last <span className='font-bold text-sm underline'>30 days</span>
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        {transactionsData.map((item) => (
          <div
            key={item.id}
            className='bg-white rounded-sm p-4 flex justify-between'
          >
            <h3 className='font-bold text-xl'>${item.amount}</h3>
            <p className='text-gray-700'>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Income;
