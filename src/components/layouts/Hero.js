import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import bg from "../../assets/bg.jpg";



const Hero = () => {
    return (
        <Box bgImage={bg} p="1" h="550px" w="100%" bgSize="cover">
            <Box mt="109px" mb="159px" ml="77px" minH="282px" w="490px">
                <Text fontSize="72px" color="white" fontWeight="bold" fontFamily="DM Sans, sans serif">Watch something incredible.</Text>
            </Box>
        </Box>
    );
}

export default Hero;
