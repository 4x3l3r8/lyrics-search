import React, { useState } from 'react';



export const Context = React.createContext();

export const Provider = (props) => {
    const [movieList, setMovieList] = useState([])
    const [seriesList, setSeriesList] = useState([])

    const updateMovieList = (movieArray) => {
        setMovieList(movieArray)
    }

    const updateSeriesList = (seriesArray) => {
        setSeriesList(seriesArray)
    }

    return (
        <Context.Provider value={{
            movieList,
            updateMovieList,
            seriesList,
            updateSeriesList
        }}>
            {props.children}
        </Context.Provider>
    );
}