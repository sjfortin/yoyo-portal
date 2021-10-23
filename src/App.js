import * as React from "react";
import { ethers } from "ethers";
import "./App.css";
import { Button, Box, Heading, Stack, Text, Container } from "@chakra-ui/react";

export default function App() {
  const wave = () => {};

  return (
    <Box w="100vw" h="100vh" bgGradient="linear(to-r, blue.200, pink.500)" py={6}>
      <Container maxW="xl" centerContent>
        <Stack spacing={6}>
          <Heading as="h1" size="4xl">
            It is yoyo time! <span role="img">🪀</span>
          </Heading>
          <Text fontSize="2xl">
            Send me a YOYO! Connect your Ethereum wallet and yoyo it up!
          </Text>
          <Button onClick={wave} colorScheme="blue">
            YOYO
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
