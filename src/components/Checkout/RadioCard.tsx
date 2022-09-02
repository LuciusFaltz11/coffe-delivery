import { Box, Flex, RadioProps, useRadio } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface RadioCardProps extends RadioProps {
  children: ReactNode;
}

export const RadioCard = (props: RadioCardProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" w="full">
      <input {...input} />
      <Flex
        {...checkbox}
        w="full"
        fontSize="xs"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        bg="base.300"
        color="base.800"
        align="center"
        gap={3}
        textTransform="uppercase"
        _checked={{
          bg: 'purple.100',
          borderColor: 'purple.500',
        }}
        _focus={{
          borderColor: 'purple.500',
        }}
        p={4}
      >
        {props.children}
      </Flex>
    </Box>
  );
};
