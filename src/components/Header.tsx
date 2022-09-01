import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Tag,
  Text,
} from '@chakra-ui/react';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { CoffeContext } from '../contexts/CoffeContext';

export const Header = () => {
  const { cartProductsAmount } = useContext(CoffeContext);

  return (
    <Box pos="sticky" top="0" bg="white" w="full" zIndex="modal">
      <Container
        as={Flex}
        justify="space-between"
        align="center"
        py={8}
        maxW="container.xl"
      >
        <Image src="img/logo.svg" alt="" />
        <HStack spacing={3}>
          <Tag
            as={Flex}
            align="center"
            justify="center"
            bg="purple.100"
            color="purple.500"
            rounded="md"
            p={2}
            fontWeight="normal"
            fontSize="sm"
          >
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Tag>
          <Button
            bg="yellow.100"
            color="yellow.800"
            rounded="md"
            p={2}
            transition="filter 0.3s"
            _hover={{ filter: 'brightness(90%)' }}
            pos="relative"
          >
            <ShoppingCart size={22} weight="fill" />
            {cartProductsAmount > 0 && (
              <Flex
                rounded="full"
                color="white"
                bg="yellow.800"
                align="center"
                justify="center"
                top="-15%"
                right="-15%"
                pos="absolute"
                h={5}
                w={5}
                fontSize="xs"
                fontWeight="bold"
              >
                {cartProductsAmount}
              </Flex>
            )}
          </Button>
        </HStack>
      </Container>
      <Outlet />
    </Box>
  );
};
