import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from './Components/Layout';
import Error from './Components/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';
import Vans from './Pages/Vans/Vans';
import VanDetail from './Pages/Vans/VanDetail';
import HostLayout from './Pages/Host/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import HostVans from './Pages/Host/HostVans';
import HostVanDetail from './Pages/Host/HostVanDetail';
import NotFound from './Pages/NotFound';
import HostVanInfo from './Components/Host/HostVanInfo';
import HostVanPricing from './Components/Host/HostVanPricing';
import HostVanPhotos from './Components/Host/HostVanPhotos';
import {
  vansLoader,
  hostVansLoader,
  vanDetailLoader,
  hostVanInfoLoader,
} from './loaders';
import { requireAuth } from './utils';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} />

      <Route path='host' element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path='income'
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path='reviews'
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route path='vans' element={<HostVans />} loader={hostVansLoader} />
        <Route
          path='vans/:id'
          element={<HostVanDetail />}
          loader={hostVanInfoLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path='pricing'
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path='photos'
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
