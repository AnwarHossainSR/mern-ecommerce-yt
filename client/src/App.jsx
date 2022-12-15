import { Route, Routes, useLocation } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import NotFound from './pages/404';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/Products/ProductDetails';

const App = () => {
  const { pathname } = useLocation();

  if (pathname.startsWith('/admin')) return <AdminLayout />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
