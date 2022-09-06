import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { CoffeProvider } from './contexts/CoffeContext';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CoffeProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Catalog />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Route>
        </Routes>
      </CoffeProvider>
    </ChakraProvider>
  );
}

export default App;
