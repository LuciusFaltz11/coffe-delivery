import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { CheckoutForm } from '../components/Checkout/CheckoutForm';
import { CoffeCheckoutCard } from '../components/Checkout/CoffeCheckoutCard';
import { CoffeContext } from '../contexts/CoffeContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Navigate } from 'react-router-dom';

const newShoppingSchema = z.object({
  cep: z.string({ required_error: 'CEP É OBRIGATÓRIO' }).max(10),
  street: z.string({ required_error: 'RUA É OBRIGATÓRIA' }),
  number: z.string({ required_error: 'NÚMERO É OBRIGATÓRIO' }),
  complement: z.optional(z.string()),
  district: z.string({ required_error: 'BAIRRO É OBRIGATÓRIO' }),
  city: z.string({ required_error: 'CIDADE É OBRIGATÓRIA' }),
  uf: z.string({ required_error: 'UF É OBRIGATÓRIA' }),
});

export type NewShoppingInputs = z.infer<typeof newShoppingSchema>;

export const Checkout = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting, isSubmitted },
  } = useForm<NewShoppingInputs>({
    resolver: zodResolver(newShoppingSchema),
  });

  const { cart, createNewShopping } = useContext(CoffeContext);
  const shipping = 3.5;

  const totalCart = cart.reduce(
    (acc, item) => {
      acc.sum += item.value * item.quantity;
      return acc;
    },
    { sum: 0 }
  );

  const handleCreateNewShopping = async (data: NewShoppingInputs) => {
    console.log(data);
    createNewShopping(data);
    reset();
  };

  return (
    <Container maxW="container.xl" mt={10}>
      <form id="shopping-form" onSubmit={handleSubmit(handleCreateNewShopping)}>
        <Grid templateColumns="60fr 40fr" gap={8}>
          <CheckoutForm register={register} />
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
                  <Text>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(totalCart.sum)}
                  </Text>
                  <Text>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(shipping)}
                  </Text>
                  <Text fontWeight="bold" fontSize="lg">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(totalCart.sum + shipping)}
                  </Text>
                </Flex>
              </Flex>
              <Button
                type="submit"
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
                {isSubmitting ? 'CONFIRMANDO ' : 'CONFIRMAR PEDIDO'}
              </Button>
            </Box>
          </Box>
        </Grid>
      </form>
    </Container>
  );
};
