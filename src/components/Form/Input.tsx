import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  error?: FieldError | any;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, error = null, ...rest }, ref): JSX.Element => {
    return (
      <FormControl isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          id={name}
          name={name}
          focusBorderColor="pink.500"
          background="gray.900"
          variant="filled"
          size="lg"
          _hover={{
            background: 'gray.900',
          }}
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  }
);
