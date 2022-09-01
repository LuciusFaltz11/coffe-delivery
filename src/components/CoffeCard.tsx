import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Plus, ShoppingCart, Minus } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CoffeContext, Coffes } from '../contexts/CoffeContext';

interface CoffeCardProps {
  coffe: Coffes;
}

export const CoffeCard = ({ coffe }: CoffeCardProps) => {
  const { handleAddProductOnCart } = useContext(CoffeContext);
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((state) => state + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((state) => (state == 1 ? state : state - 1));
  };
  return (
    <Box px={6} pb={5} bg="gray.100" borderRadius="6px 36px 6px 36px">
      <Flex w="full" flexDir="column" gap={3} align="center" mb={4}>
        <Image
          src={`img/coffes/${coffe.image}`}
          alt={coffe.title}
          w="7.5rem"
          mt={-10}
        />
        <Flex gap={2} wrap="wrap" justify="center" w="full">
          {coffe.tags.map((tag) => {
            return (
              <Badge
                key={tag}
                bg="yellow.100"
                color="yellow.800"
                transform="uppercase"
                fontSize="0.625rem"
                fontWeight="bold"
              >
                {tag}
              </Badge>
            );
          })}
        </Flex>
        <Badge
          bg="yellow.100"
          color="yellow.800"
          transform="uppercase"
          fontSize="0.625rem"
          fontWeight="bold"
        ></Badge>
      </Flex>
      <Heading fontSize="xl" color="base.700" textAlign="center">
        {coffe.title}
      </Heading>
      <Text color="base.500" textAlign="center" fontSize="sm" mt={2}>
        {coffe.description}
      </Text>
      <Flex mt={8} justify="space-between">
        <Text
          fontWeight="extrabold"
          fontSize="2xl"
          fontFamily="'Baloo 2', cursive"
          mb="-3px"
          color="base.700"
        >
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(coffe.value)}
        </Text>
        <Flex align="center" gap={2}>
          <Flex p={2} rounded="md" align="center" bg="base.300" gap={1.5}>
            <Box color="purple.500" onClick={decreaseQuantity} cursor="pointer">
              <Minus size={14} weight="fill" />
            </Box>
            <Text color="base.800">{quantity}</Text>
            <Box color="purple.500" onClick={increaseQuantity} cursor="pointer">
              <Plus size={14} weight="fill" />
            </Box>
          </Flex>
          <Button
            px={2}
            bg="purple.700"
            color="white"
            rounded="md"
            _hover={{ bg: 'purple.500' }}
            transition="background 0.3s"
            onClick={() => handleAddProductOnCart(coffe, quantity)}
          >
            <ShoppingCart size={20} weight="fill" />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
