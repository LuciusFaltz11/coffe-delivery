import { Input as InputChackra, InputProps } from '@chakra-ui/react';

export const Input = ({ ...rest }: InputProps) => {
  return (
    <InputChackra
      rounded="md"
      bg="base.200"
      borderColor="base.300"
      color="base.500"
      _placeholder={{ color: 'base.500' }}
      focusBorderColor="yellow.800"
      {...rest}
    />
  );
};
