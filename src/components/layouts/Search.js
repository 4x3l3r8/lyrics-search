import React, { useState, useEffect, useContext } from 'react';
import { Box, Text, Input } from "@chakra-ui/react";
import { Context } from '../../context'
import Axios from 'axios'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { updateMovieList, updateSeriesList } = useContext(Context)

    useEffect(() => {
        if (searchQuery.length >= 3) {
            runSearch();
        }
    }, [searchQuery]) //eslint-disable-line


    const runSearch = () => {
        try {
            //run search for movies 
            Axios.get(`${process.env.REACT_APP_API_URL}?&apikey=${process.env.REACT_APP_API_KEY}&s=${searchQuery}&type="movie"&page=1`)
                .then(res => {
                    console.log(res.data)
                    updateMovieList(res.data)
                })
                .catch(err => { console.log(err); alert(err); })

            //run search for series
            Axios.get(`${process.env.REACT_APP_API_URL}?&apikey=${process.env.REACT_APP_API_KEY}&s=${searchQuery}&type="series"&page=1`)
                .then(res => {
                    console.log(res.data)
                    updateSeriesList(res.data)
                })
                .catch(err => { console.log(err); alert(err); })
        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <Box width="100%" p="1">
            <Box mx="77px" mt="63px" mb="48px">
                <Text fontFamily="DM Sans, sans-serif" fontSize="24">Search</Text>
                <Input className="w-100" borderRadius={0} borderColor="#000" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </Box>
        </Box>
    );
}

export default Search;
