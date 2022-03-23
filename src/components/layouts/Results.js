import React, { useContext } from 'react';
import { Consumer, Context } from "../../context";
import MovieCard from "../tracks/Movie"
import { Box, Text, VStack, HStack, Heading } from "@chakra-ui/react"

const Results = () => {
    const { movieList } = useContext(Context);

    return (
        <Box p="1" ml={"67px"} h="746px">
            <VStack>
                <Box maxW={"fit-content"} minWidth="100%" h="349px">
                    <Text>Movies</Text>
                    <HStack overflowX={"scroll"}>
                        {movieList.Response === "True" && movieList.Search.map((movie, i) => {
                            return <MovieCard key={i} movie={movie} />
                        })}
                        {movieList.Error === "Movie not found!" && <Heading color="red"> {movieList.Error} </Heading>}
                    </HStack>
                </Box>
                <Box w={"fit-content"} minWidth="100%" h="349px">
                    <Text>Series</Text>
                    <HStack overflowX="scroll">
                    {movieList.Response === "True" && movieList.Search.map((movie) => <MovieCard movie={movie} />)}
                    {movieList.Error === "Movie not found!" && <Heading color="red"> {movieList.Error} </Heading>}
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
}

export default Results;
