import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <HStack spacing={4} justify="center">
    <Button as={Link} to="/" colorScheme="teal" variant="solid">
      Home
    </Button>
    <Button as={Link} to="/signin" colorScheme="teal" variant="solid">
      Sign In
    </Button>
    <Button as={Link} to="/about" colorScheme="teal" variant="solid">
      About Us
    </Button>
  </HStack>
);

export default Navigation;
