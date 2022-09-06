import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useContext } from 'react';
import { CoffeContext } from '../contexts/CoffeContext';

export const Success = () => {
  const { shoppingForm, paymentMethod } = useContext(CoffeContext);
  return (
    <Container maxW="container.xl">
      <Heading color="yellow.800" fontSize="3xl">
        Uhu! Pedido confirmado
      </Heading>
      <Text color="base.800" fontSize="lg">
        Agora é só aguardar que logo o café chegará até você
      </Text>
      <Flex mt={10} align="center" justify="space-between">
        <Box
          borderTopLeftRadius="md"
          borderBottomRightRadius="md"
          borderTopRightRadius="36px"
          borderBottomLeftRadius="36px"
          bgGradient="linear(to-r, #DBAC2C, #8047F8)"
          p="1px"
          w="45%"
        >
          <Grid
            p={10}
            borderTopLeftRadius="md"
            borderBottomRightRadius="md"
            borderTopRightRadius="36px"
            borderBottomLeftRadius="36px"
            bg="white"
            gap={8}
          >
            <Flex align="center" gap={3}>
              <Flex
                rounded="full"
                align="center"
                justify="center"
                p={2.5}
                color="white"
                bg="purple.500"
                h={8}
                w={8}
              >
                <MapPin size={16} weight="fill" />
              </Flex>
              <Text color="base.600">
                Entrega em {shoppingForm.street}, {shoppingForm.number} <br />{' '}
                {shoppingForm.district} - {shoppingForm.city}, {shoppingForm.uf}
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Flex
                rounded="full"
                align="center"
                justify="center"
                p={2.5}
                color="white"
                bg="yellow.500"
                h={8}
                w={8}
              >
                <Timer size={16} weight="fill" />
              </Flex>
              <Text color="base.600">
                Previsão de entrega
                <br />
                20 min - 30 min
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Flex
                rounded="full"
                align="center"
                justify="center"
                p={2.5}
                color="white"
                bg="yellow.800"
                h={8}
                w={8}
              >
                <CurrencyDollar size={16} weight="fill" />
              </Flex>
              <Text color="base.600">
                Pagamento na entrega
                <br />
                {paymentMethod}
              </Text>
            </Flex>
          </Grid>
        </Box>

        <Box>
          <Image src="img/delivery.png" alt="Man in a Mobillete" />
        </Box>
      </Flex>
    </Container>
  );
};
