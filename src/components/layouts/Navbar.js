import React from 'react';
import { Box, Text } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <Box bg='#292929' w='100%' h='140px' p="1" color='white'>
            <Box my="40px" ml="77px" maxW="max-content" border="1px" px="19px" borderColor="#fff">
                <Text fontSize="2vw">MyTestApp</Text>
            </Box>
        </Box>
    );
}

export default Navbar;
