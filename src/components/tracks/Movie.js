import React from "react";
import { Box, Text } from "@chakra-ui/react"

const Movie = ({ movie }) => {
  const src = movie.Poster === "N/A" ? "#000" : movie.Poster;
  return (
    <Box bgImage={src} display={"flex"} alignItems="end" borderRadius="12px" h={"300px"} minW={"300px"}>
      <Box h="25%" p="3" bottom="0" marginBottom={0} borderBottomRadius="12px" w="100%" bgGradient={"linear(to-t, green.300, rgba(225,225,225,0.4))"}>
        <Text className="m-auto" color={movie.Poster === "N/A" ? "#000" : "#fff"} font="DM Sans, sans-serif">{movie.Title}</Text>
      </Box>
    </Box>
  );
};

export default Movie;
