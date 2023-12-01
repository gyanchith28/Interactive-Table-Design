import React from "react";
import { Box, Flex, Spacer, Text, Icon } from "@chakra-ui/react";
import { BsPersonCircle } from "react-icons/bs";
import { MdExitToApp } from "react-icons/md";

const Navbar = () => {
  const text = 'DailyPe';

  return (
    <Box bg="#e0f4ff" p={4}>
      <Flex align="center">
      <Flex>
          {text.split('').map((letter, index) => (
            <Text
              key={index}
              fontSize="xl"
              fontWeight="bold"
              fontFamily="heading"
              ml={index !== 0 ? '2px' : '0'} 
            >
              {letter}
            </Text>
          ))}
        </Flex>

        <Spacer />
        <Icon as={BsPersonCircle} boxSize={6} color="#333" mr={4} />

        <Text mr={4}>Marg Techno Pvt Ltd</Text>

        <Icon as={MdExitToApp} boxSize={6} color="#333" />
      </Flex>
    </Box>
  );
};

export default Navbar;
