import { Catalog } from '../pages/Catalog';
import { Header } from './Header';
import { Routes, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Catalog />} />
        {/* <Route path="/history" element={<History />} /> */}
      </Route>
    </Routes>
  );
};
