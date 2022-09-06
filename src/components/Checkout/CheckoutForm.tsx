import {
  Heading,
  HStack,
  Box,
  Text,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { UseFormRegister } from 'react-hook-form/dist/types';
import { NewShoppingInputs } from '../../pages/Checkout';
import { Input } from './Input';
import { PaymentSelect } from './PaymentSelect';

interface CheckoutFormProps {
  register: UseFormRegister<NewShoppingInputs>;
}

export const CheckoutForm = ({ register }: CheckoutFormProps) => {
  return (
    <Box>
      <Heading fontSize="lg" color="base.700">
        Seu pedido
      </Heading>
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
              <Input placeholder="CEP" w="200px" {...register('cep')} />
            </GridItem>
            <GridItem colSpan={3}>
              <Input placeholder="Rua" {...register('street')} />
            </GridItem>
            <GridItem>
              <Input placeholder="Número" {...register('number')} />
            </GridItem>
            <GridItem colSpan={2}>
              <InputGroup>
                <Input placeholder="Complemento" {...register('complement')} />
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
              <Input placeholder="Bairro" {...register('district')} />
            </GridItem>
            <GridItem>
              <Input placeholder="Cidade" {...register('city')} />
            </GridItem>
            <GridItem>
              <Input placeholder="UF" {...register('uf')} />
            </GridItem>
          </Grid>
        </Box>
      </Box>
      <Box bg="base.100" rounded="md" p={10} w="full" mt={3}>
        <HStack align="flex-start" color="purple.500">
          <CurrencyDollar size={22} />
          <Box color="base.700">
            <Text>Pagamento</Text>
            <Text fontSize="sm">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Text>
          </Box>
        </HStack>
        <Box mt={8}>
          <PaymentSelect />
        </Box>
      </Box>
    </Box>
  );
};
