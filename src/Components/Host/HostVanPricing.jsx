import { useOutletContext } from 'react-router-dom';

const HostVanPrice = () => {
  const { price } = useOutletContext();

  return (
    <p>
      <b className='text-xl'>${price}.00</b>
      <span>/day</span>
    </p>
  );
};
export default HostVanPrice;
