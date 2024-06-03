import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <HStack spacing={4} justify="flex-start">
    <Button as={Link} to="/" colorScheme="teal" variant="solid" size="sm" _hover={{ bg: "brand.700" }}>
      Home
    </Button>
    <Button as={Link} to="/signin" colorScheme="teal" variant="solid" size="sm" _hover={{ bg: "brand.700" }}>
      Sign In
    </Button>
    <Button as={Link} to="/about" colorScheme="teal" variant="solid" size="sm" _hover={{ bg: "brand.700" }}>
      About Us
    </Button>
  </HStack>
);

export default Navigation;
