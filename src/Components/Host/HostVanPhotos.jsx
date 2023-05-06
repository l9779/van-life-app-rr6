import { useOutletContext } from 'react-router-dom';

const HostVanPhotos = () => {
  const { name, imageUrl } = useOutletContext();

  return <img className='w-20 rounded-md' src={imageUrl} alt={name} />;
};
export default HostVanPhotos;
