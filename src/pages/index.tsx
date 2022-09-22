import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        background="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              focusBorderColor="pink.500"
              background="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                background: 'gray.900',
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              focusBorderColor="pink.500"
              background="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                background: 'gray.900',
              }}
            />
          </FormControl>
        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
