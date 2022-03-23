import React from "react";
import { Box, Text } from "@chakra-ui/react"

const Movie = ({ movie }) => {
  return (
    <Box bg={"#000"} borderRadius="12px" h={"300px"} w={"300px"}>
      <Text mx="auto"  color="white" font="DM Sans, sans-serif">{movie.Title}</Text>
    </Box>
  );
};

export default Movie;
