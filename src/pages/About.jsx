import { Container, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Container centerContent maxW="container.md" py={10}>
    <VStack spacing={4} width="100%">
      <Text fontSize="xl">About Us</Text>
      <Text>Welcome to ABASON, your go-to app for finding the perfect rental home. Whether you're looking for a cozy apartment or a spacious house, we have a wide range of options to suit your needs.</Text>
    </VStack>
  </Container>
);

export default About;
