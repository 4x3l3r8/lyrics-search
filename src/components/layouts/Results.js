import React, { useContext } from 'react';
import { Context } from "../../context";
import MovieCard from "../tracks/Movie"
import { Box, Text, VStack, HStack, Heading } from "@chakra-ui/react"

const Results = () => {
    const { movieList } = useContext(Context);
    const { seriesList } = useContext(Context);

    return (
        <Box p="1" ml={"67px"} h="746px">
            <VStack>
                <div className="myWorkContent">
                    <h3>Movies</h3>
                    <HStack>
                        {movieList.Response === "True" && movieList.Search.map((movie, i) => {
                            return <MovieCard key={i} movie={movie} />
                        })}
                        {movieList.Error === "Movie not found!" && <Heading color="red"> {movieList.Error} </Heading>}
                    </HStack>
                </div>
                <div className="myWorkContent">
                    <Text>Series</Text>
                    <HStack>
                        {seriesList.Response === "True" && seriesList.Search.map((movie, i) => <MovieCard movie={movie} key={i} />)}
                        {seriesList.Error === "Movie not found!" && <Heading color="red">"Series Unavailable</Heading>}
                    </HStack>
                </div>
            </VStack>
        </Box >
    );
}

export default Results;
