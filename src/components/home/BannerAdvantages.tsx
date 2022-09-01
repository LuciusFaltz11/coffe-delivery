import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

export const BannerAdvantages = () => {
  return (
    <Grid templateColumns="repeat(2, 2fr)" mt={16} columnGap={10} rowGap={5}>
      <GridItem as={Flex} align="center" gap={3}>
        <Box p={2} rounded="full" bg="yellow.800" color="white">
          <ShoppingCart size={16} weight="fill" />
        </Box>
        <Text color="base.600">Compra simples e segura</Text>
      </GridItem>
      <GridItem as={Flex} align="center" gap={3}>
        <Box p={2} rounded="full" bg="base.600" color="white">
          <Package size={16} weight="fill" />
        </Box>
        <Text color="base.600">Embalagem mantém o café intacto</Text>
      </GridItem>
      <GridItem as={Flex} align="center" gap={3}>
        <Box p={2} rounded="full" bg="yellow.500" color="white">
          <Timer size={16} weight="fill" />
        </Box>
        <Text color="base.600">Entrega rápida e rastreada</Text>
      </GridItem>
      <GridItem as={Flex} align="center" gap={3}>
        <Box p={2} rounded="full" bg="purple.500" color="white">
          <Coffee size={16} weight="fill" />
        </Box>
        <Text color="base.600">O café chega fresquinho até você</Text>
      </GridItem>
    </Grid>
  );
};
