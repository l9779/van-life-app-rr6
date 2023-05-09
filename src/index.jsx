import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from './Components/Layout';
import Error from './Components/Error';
import Home from './Pages/Home';
import About from './Pages/About';
import Vans, { loader as vansLoader } from './Pages/Vans/Vans';
import VanDetail from './Pages/Vans/VanDetail';
import HostLayout from './Pages/Host/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import HostVans from './Pages/Host/HostVans';
import HostVanDetail from './Pages/Host/HostVanDetail';
import NotFound from './Pages/NotFound';
import HostVanDetails from './Components/Host/HostVanDetails';
import HostVanPricing from './Components/Host/HostVanPricing';
import HostVanPhotos from './Components/Host/HostVanPhotos';
import './server';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path='vans/:id' element={<VanDetail />} />
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='vans' element={<HostVans />} />
        <Route path='vans/:id' element={<HostVanDetail />}>
          <Route index element={<HostVanDetails />} />
          <Route path='pricing' element={<HostVanPricing />} />
          <Route path='photos' element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
