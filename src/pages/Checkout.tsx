import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  Button,
} from '@chakra-ui/react';
import { CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { AddressForm } from '../components/Checkout/AddressForm';
import { CoffeCheckoutCard } from '../components/Checkout/CoffeCheckoutCard';
import { PaymentSelect } from '../components/Checkout/PaymentSelect';
import { CoffeContext } from '../contexts/CoffeContext';

export const Checkout = () => {
  const { cart } = useContext(CoffeContext);
  return (
    <Container maxW="container.xl" mt={10}>
      <Grid templateColumns="60fr 40fr" gap={8}>
        <Box>
          <Heading fontSize="lg" color="base.700">
            Seu pedido
          </Heading>
          <AddressForm />
          <Box bg="base.100" rounded="md" p={10} w="full" mt={3}>
            <HStack align="flex-start" color="purple.500">
              <CurrencyDollar size={22} />
              <Box color="base.700">
                <Text>Pagamento</Text>
                <Text fontSize="sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </Text>
              </Box>
            </HStack>
            <Box mt={8}>
              <PaymentSelect />
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="lg" color="base.700">
            Cafés selecionados
          </Heading>
          <Box
            bg="base.100"
            borderTopLeftRadius="md"
            borderBottomRightRadius="md"
            borderTopRightRadius="44px"
            borderBottomLeftRadius="44px"
            p={10}
            w="full"
            mt={3}
          >
            <Grid gap={6} mb={6}>
              {cart.map((item) => {
                return (
                  <CoffeCheckoutCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    quantity={item.quantity}
                    value={item.value}
                  />
                );
              })}
            </Grid>
            <Flex
              justify="space-between"
              w="full"
              color="base.600"
              fontSize="sm"
            >
              <Flex flexDir="column" gap={3} textAlign="left">
                <Text>Total de itens</Text>
                <Text>Entrega</Text>
                <Text fontWeight="bold" fontSize="lg">
                  Total
                </Text>
              </Flex>
              <Flex flexDir="column" gap={3} textAlign="right">
                <Text>R$ 29,70</Text>
                <Text>R$ 3,50</Text>
                <Text fontWeight="bold" fontSize="lg">
                  R$ 33,20
                </Text>
              </Flex>
            </Flex>
            <Button
              color="white"
              bg="yellow.500"
              w="full"
              rounded="md"
              py={3}
              h={12}
              mt={6}
              transition="background 0.3s"
              _hover={{
                background: 'yellow.800',
              }}
            >
              CONFIRMAR PEDIDO
            </Button>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};
