import { Route, Routes } from 'react-router-dom';
import Layout from './Layouts';
import { AdminLayout } from './Layouts/AdminLayout';
import NotFound from './pages/404';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
