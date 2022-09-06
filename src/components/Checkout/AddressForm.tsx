import {
  HStack,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  Box,
  Text,
} from '@chakra-ui/react';

import { MapPinLine } from 'phosphor-react';
import { Input } from './Input';

export const AddressForm = () => {
  return (
    <Box bg="base.100" rounded="md" p={10} w="full" mt={3}>
      <HStack align="flex-start" color="yellow.800">
        <MapPinLine size={22} />
        <Box color="base.700">
          <Text>Endereço de Entrega</Text>
          <Text fontSize="sm">
            Informe o endereço onde deseja receber seu pedido
          </Text>
        </Box>
      </HStack>
      <Box mt={8}>
        <Grid templateColumns="200px 1fr 60px" rowGap={4} columnGap={3}>
          <GridItem colSpan={3}>
            <Input placeholder="CEP" w="200px" />
          </GridItem>
          <GridItem colSpan={3}>
            <Input placeholder="Rua" />
          </GridItem>
          <GridItem>
            <Input placeholder="Número" />
          </GridItem>
          <GridItem colSpan={2}>
            <InputGroup>
              <Input placeholder="Complemento" />
              <InputRightElement
                pointerEvents="none"
                children={
                  <Text
                    fontSize="xs"
                    fontStyle="italic"
                    color="base.500"
                    mr={9}
                  >
                    Opcional
                  </Text>
                }
              />
            </InputGroup>
          </GridItem>
          <GridItem>
            <Input placeholder="Bairro" />
          </GridItem>
          <GridItem>
            <Input placeholder="Cidade" />
          </GridItem>
          <GridItem>
            <Input placeholder="UF" />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
