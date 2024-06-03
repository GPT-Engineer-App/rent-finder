import { Container, VStack, Input, Button } from "@chakra-ui/react";

const SignIn = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4} width="100%">
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Button colorScheme="teal" variant="solid">
        Sign In
      </Button>
    </VStack>
  </Container>
);

export default SignIn;
