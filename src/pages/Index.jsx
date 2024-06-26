import { useState } from "react";
import { Container, VStack, Box, HStack, Input, IconButton, SimpleGrid, Select, Button, Image, Text } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";
import { FaPlus, FaSearch } from "react-icons/fa";

const roomsData = [
  { id: 1, title: "Cozy Apartment", description: "A cozy apartment in the city center.", image: "https://images.unsplash.com/photo-1617201929478-8eedff7508f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYXBhcnRtZW50fGVufDB8fHx8MTcxNzQzMjcyNnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, title: "Spacious House", description: "A spacious house with a garden.", image: "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFjaW91cyUyMGhvdXNlfGVufDB8fHx8MTcxNzQzMjcyNnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, title: "Modern Studio", description: "A modern studio near public transport.", image: "https://images.unsplash.com/photo-1685654051837-782cdfb8dc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkaW98ZW58MHx8fHwxNzE3NDMyNzI3fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const RoomCard = ({ room }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
    <Image src={room.image} alt={room.title} />
    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Text fontWeight="bold" fontSize="xl" my="2">
          {room.title}
        </Text>
      </Box>
      <Text mt="2">{room.description}</Text>
    </Box>
  </Box>
);

const UserInterface = ({ rooms, filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredRooms = rooms.filter((room) => {
    return (!filters.area || room.area.includes(filters.area)) && (!filters.rent || room.rent <= filters.rent) && (!filters.size || room.size >= filters.size) && (!filters.quantity || room.quantity >= filters.quantity);
  });

  return (
    <VStack spacing={4} align="stretch">
      <HStack>
        <Input placeholder="Search for rooms..." />
        <IconButton aria-label="Search" icon={<FaSearch />} />
      </HStack>
      <HStack>
        <Select placeholder="Select area" name="area" onChange={handleFilterChange}>
          <option value="city center">City Center</option>
          <option value="suburbs">Suburbs</option>
        </Select>
        <Input placeholder="Max Rent" name="rent" type="number" onChange={handleFilterChange} />
        <Input placeholder="Min Size" name="size" type="number" onChange={handleFilterChange} />
        <Input placeholder="Min Room Quantity" name="quantity" type="number" onChange={handleFilterChange} />
      </HStack>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
        {filteredRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

const CustomerInterface = ({ addRoom }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleAddRoom = () => {
    addRoom({ id: Date.now(), title, description, image });
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <VStack spacing={4} align="stretch">
      <Input placeholder="Room Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Room Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Input placeholder="Room Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddRoom}>
        Add Room
      </Button>
    </VStack>
  );
};

const Index = () => {
  const [rooms, setRooms] = useState(roomsData);
  const [isUserInterface, setIsUserInterface] = useState(true);

  const [filters, setFilters] = useState({ area: "", rent: "", size: "", quantity: "" });

  const addRoom = (room) => {
    setRooms([...rooms, room]);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Navigation />
        <UserInterface rooms={rooms} filters={filters} setFilters={setFilters} />
      </VStack>
    </Container>
  );
};

export default Index;
