// eslint-disable-next-line react/prop-types
const HostVanDetails = ({ name, type, description }) => {
  return (
    <div>
      <p className='capitalize mt-2 mb-2'>
        <b>Name: </b>
        {name}
      </p>
      <p className='capitalize mt-2 mb-2'>
        <b>Category: </b>
        {type}
      </p>
      <p className='mt-2 mb-2'>
        <b>Description: </b>
        {description}
      </p>
      <p className='mt-2 mb-2'>
        <b>Visibility: </b>Public
      </p>
    </div>
  );
};
export default HostVanDetails;
