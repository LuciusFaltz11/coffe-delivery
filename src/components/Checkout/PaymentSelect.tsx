import { HStack, useRadioGroup } from '@chakra-ui/react';
import { Bank, CreditCard, Money } from 'phosphor-react';
import { useContext } from 'react';
import { CoffeContext } from '../../contexts/CoffeContext';
import { RadioCard } from './RadioCard';

export const PaymentSelect = () => {
  const { handleChangePaymentOption, paymentMethod } = useContext(CoffeContext);
  const options = ['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'];

  const handleChange = (value: string) => {
    handleChangePaymentOption(value);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'payment',
    onChange: handleChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group} w="full" spacing={3}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value === 'Cartão de Crédito' && (
              <CreditCard size={16} color="#8047f8" />
            )}
            {value === 'Cartão de Débito' && <Bank size={16} color="#8047f8" />}
            {value === 'Dinheiro' && <Money size={16} color="#8047f8" />}
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
