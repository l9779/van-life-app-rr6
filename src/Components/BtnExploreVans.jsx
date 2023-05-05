import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BtnExploreVans = ({ classList, text }) => {
  return (
    <Link to={'/vans'}>
      <button className={classList}>{text}</button>
    </Link>
  );
};
export default BtnExploreVans;
