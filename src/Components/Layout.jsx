import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <main className='bg-orange-50 min-h-screen relative'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
export default Layout;
