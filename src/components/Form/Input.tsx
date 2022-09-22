import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>E-mail</FormLabel>}
      <Input
        id={name}
        name={name}
        focusBorderColor="pink.500"
        background="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          background: 'gray.900',
        }}
        {...rest}
      />
    </FormControl>
  );
};
