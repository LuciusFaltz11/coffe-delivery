import { Box, Flex, Text, Image, HStack, Button } from '@chakra-ui/react';
import { Minus, Plus, Trash } from 'phosphor-react';
import { useContext } from 'react';
import { CoffeContext } from '../../contexts/CoffeContext';

interface CoffeCheckoutCardProps {
  id: string;
  title: string;
  value: number;
  image: string;
  quantity: number;
}

export const CoffeCheckoutCard = ({
  id,
  title,
  image,
  quantity,
  value,
}: CoffeCheckoutCardProps) => {
  const {
    increaseQuantityOfProductOnCart,
    decreaseQuantityOfProductOnCart,
    removeItemOfCart,
  } = useContext(CoffeContext);
  return (
    <Flex
      justify="space-between"
      pb={6}
      borderBottom="1px solid"
      borderColor="base.300"
    >
      <Flex align="center" gap={5}>
        <Box w={16}>
          <Image src={`/img/coffes/${image}`} alt={title} />
        </Box>
        <Box>
          <Text color="base.700">{title}</Text>
          <HStack spacing={2} mt={2}>
            <Flex
              px={2}
              py={1}
              rounded="md"
              align="center"
              bg="base.300"
              gap={1.5}
            >
              <Box
                color="purple.500"
                onClick={() => decreaseQuantityOfProductOnCart(id)}
                cursor="pointer"
              >
                <Minus size={14} weight="fill" />
              </Box>
              <Text color="base.800">{quantity}</Text>
              <Box
                color="purple.500"
                onClick={() => increaseQuantityOfProductOnCart(id)}
                cursor="pointer"
              >
                <Plus size={14} weight="fill" />
              </Box>
            </Flex>
            <Button
              bg="base.300"
              as={Flex}
              justify="center"
              align="center"
              gap={1}
              cursor="pointer"
              fontSize="xs"
              px={2}
              py={1}
              fontWeight="normal"
              h={8}
              lineHeight="0"
              transition="filter 0.3s"
              color="base.600"
              _hover={{
                filter: 'brightness(0.9)',
              }}
              onClick={() => removeItemOfCart(id)}
            >
              <Trash size={16} color="#8047F8" /> REMOVER
            </Button>
          </HStack>
        </Box>
      </Flex>
      <Text fontWeight="bold" color="base.600">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(value * quantity)}
      </Text>
    </Flex>
  );
};
