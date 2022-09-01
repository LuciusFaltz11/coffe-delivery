import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { ShoppingCart } from 'phosphor-react';
import { BannerAdvantages } from './BannerAdvantages';

export const Banner = () => {
  return (
    <Box bgImage="url('img/background.jpg')" bgSize="cover">
      <Container
        maxW="container.xl"
        as={Flex}
        justify="between"
        align="center"
        py={24}
        gap={14}
      >
        <Box maxW="52%">
          <Heading fontWeight="extrabold" fontSize="5xl" color="base.800">
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </Heading>
          <Text mt={4} color="base.700">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Text>
          <BannerAdvantages />
        </Box>
        <Box>
          <Image src="img/banner-image.png" alt="Coffe Delivery Image" />
        </Box>
      </Container>
    </Box>
  );
};
