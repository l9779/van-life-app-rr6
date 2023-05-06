import { useOutletContext } from 'react-router-dom';

const HostVanDetails = () => {
  const { name, type, description } = useOutletContext();
  return (
    <article className='flex flex-col gap-2'>
      <div>
        <b>Name: </b>
        <span className='capitalize '>{name}</span>
      </div>
      <div>
        <b>Category: </b>
        <span className='capitalize '>{type}</span>
      </div>
      <div>
        <b>Description: </b>
        <span>{description}</span>
      </div>
      <div>
        <b>Visibility: </b>
        <span>Public</span>
      </div>
    </article>
  );
};
export default HostVanDetails;
