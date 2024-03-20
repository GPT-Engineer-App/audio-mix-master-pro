import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Button, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaMusic, FaMicrophone, FaHeadphones, FaUsers, FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: FaMusic,
    title: "Professional Audio Mixing",
    description: "Get your tracks mixed by industry professionals to achieve a polished sound.",
  },
  {
    icon: FaMicrophone,
    title: "Studio-Quality Mastering",
    description: "Ensure your music is ready for distribution with our top-notch mastering services.",
  },
  {
    icon: FaHeadphones,
    title: "Affordable Pricing",
    description: "Access high-quality audio services at prices tailored for emerging artists.",
  },
  {
    icon: FaUsers,
    title: "Collaborative Platform",
    description: "Connect with other musicians, producers, and audio engineers to collaborate on projects.",
  },
  {
    icon: FaCloudUploadAlt,
    title: "Easy File Uploading",
    description: "Seamlessly upload your audio files and tracks for mixing and mastering.",
  },
  {
    icon: FaCheckCircle,
    title: "Fast Turnaround",
    description: "Get your mixed and mastered tracks back quickly, so you can focus on creating music.",
  },
];

const Index = () => {
  return (
    <Box>
      <Box bg="purple.600" py={16} px={8} color="white">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl">
            Empowering Emerging Musicians with Professional Audio Services
          </Heading>
          <Text fontSize="xl">Access professional-grade audio mixing and mastering services to achieve high-quality results independently, fostering creativity and artistic freedom in the music industry.</Text>
          <Button colorScheme="white" size="lg">
            Get Started
          </Button>
        </VStack>
      </Box>

      <Box py={16} px={8}>
        <Heading as="h2" size="xl" mb={8}>
          Key Features
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          {features.map((feature, index) => (
            <GridItem key={index}>
              <HStack spacing={4} mb={4}>
                <Icon as={feature.icon} boxSize={8} color="purple.600" />
                <Text fontSize="xl" fontWeight="bold">
                  {feature.title}
                </Text>
              </HStack>
              <Text fontSize="lg">{feature.description}</Text>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box bg="gray.100" py={16} px={8}>
        <VStack spacing={8} align="center">
          <Heading as="h2" size="xl" mb={8}>
            Unleash Your Musical Potential
          </Heading>
          <Image src="https://images.unsplash.com/photo-1619378449362-1db95621018c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMGluJTIwcmVjb3JkaW5nJTIwc3R1ZGlvfGVufDB8fHx8MTcxMDk0NzI3MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Musician in Recording Studio" boxSize="400px" objectFit="cover" borderRadius="md" />
          <Text fontSize="xl" textAlign="center">
            Take your music to the next level with our professional audio mixing and mastering services. Join our community of emerging artists and start creating industry-standard music today!
          </Text>
          <Button colorScheme="purple" size="lg">
            Sign Up Now
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
