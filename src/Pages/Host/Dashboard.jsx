import { Link } from 'react-router-dom';

export function loader() {
  return null;
}

const Dashboard = () => {
  return (
    <div>
      <h1>Dashborad</h1>
      <Link target='_blank' to='https://youtu.be/nDGA3km5He4?t=7263'>
        https://youtu.be/nDGA3km5He4?t=7263
      </Link>
    </div>
  );
};
export default Dashboard;
