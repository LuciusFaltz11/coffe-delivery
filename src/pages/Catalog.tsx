import { Container, Grid, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CoffeCard } from '../components/CoffeCard';
import { Banner } from '../components/home/Banner';
import { Coffes } from '../contexts/CoffeContext';
import { api } from '../lib/axios';

export const Catalog = () => {
  const [coffes, setCoffes] = useState<Coffes[]>();

  const getCoffes = async () => {
    const response = await api.get('coffes');
    setCoffes(response.data);
  };

  useEffect(() => {
    getCoffes();
  }, []);
  return (
    <>
      <Banner />
      <Container maxW="container.xl" mb={10}>
        <Heading color="base.700" fontWeight="extrabold">
          Nossos Cafés
        </Heading>
        <Grid
          templateColumns="repeat(4, 1fr)"
          columnGap={8}
          rowGap={16}
          mt={16}
          maxW="70rem"
          mx="auto"
        >
          {coffes?.map((coffe) => {
            return <CoffeCard key={coffe.id} coffe={coffe} />;
          })}
        </Grid>
      </Container>
    </>
  );
};
