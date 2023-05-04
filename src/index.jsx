import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Vans from './Pages/Vans/Vans';
import VanDetail from './Pages/Vans/VanDetail';
import Layout from './Components/Layout';
import HostLayout from './Pages/Host/HostLayout';
import Dashboard from './Pages/Host/Dashboard';
import Income from './Pages/Host/Income';
import Reviews from './Pages/Host/Reviews';
import './server';
import './index.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail />} />
          <Route path='/host' element={<HostLayout />}>
            <Route path='/host' element={<Dashboard />} />
            <Route path='/host/income' element={<Income />} />
            <Route path='/host/reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
