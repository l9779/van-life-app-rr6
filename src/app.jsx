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
  loginLoader,
  vansLoader,
  hostVansLoader,
  vanDetailLoader,
  hostVanInfoLoader,
  loginAction,
  requireAuth,
} from './utils';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path='login'
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
        errorElement={<Error />}
      />
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path='vans/:id'
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />

      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={hostVansLoader} />
        <Route
          path='income'
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path='reviews'
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path='vans'
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path='vans/:id'
          element={<HostVanDetail />}
          loader={hostVanInfoLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path='pricing'
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path='photos'
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '*',
//         element: <NotFound />,
//       },
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: 'login',
//         element: <Login />,
//         loader: loginLoader,
//         action: loginAction,
//         errorElement: <Error />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'vans',
//         element: <Vans />,
//         loader: vansLoader,
//         errorElement: <Error />,
//       },
//       {
//         path: 'vans/:id',
//         element: <VanDetail />,
//         loader: vanDetailLoader,
//       },
//       {
//         path: 'host',
//         element: <HostLayout />,
//         errorElement: <Error />,
//         children: [
//           {
//             element: <Dashboard />,
//             loader: async () => requireAuth(),
//           },
//           {
//             path: 'income',
//             element: <Income />,
//             loader: async () => requireAuth(),
//           },
//           {
//             path: 'reviews',
//             element: <Reviews />,
//             loader: async () => requireAuth(),
//           },
//           {
//             path: 'vans',
//             element: <HostVans />,
//             loader: async () => requireAuth(),
//           },
//         ],
//       },
//     ],
//   },
// ]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
