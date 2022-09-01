import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { CoffeProvider } from './contexts/CoffeContext';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CoffeProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Catalog />} />
          </Route>
        </Routes>
      </CoffeProvider>
    </ChakraProvider>
  );
}

export default App;
