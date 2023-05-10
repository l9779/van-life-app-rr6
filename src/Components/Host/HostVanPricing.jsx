import { useOutletContext } from 'react-router-dom';

const HostVanPrice = () => {
  const { price } = useOutletContext();

  return (
    <div>
      <b className='text-xl'>${price}.00</b>
      <span>/day</span>
    </div>
  );
};
export default HostVanPrice;
