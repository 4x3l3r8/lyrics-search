import React, { useEffect, useState } from 'react';
import Axios from 'axios'



export const Context = React.createContext();

export const Provider = (props) => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        // try {
        //     const proxy = 'http://cors-anywhere.herokuapp.com/';
        //     Axios.get(`${process.env.REACT_APP_API_URL}?&apikey=${process.env.REACT_APP_API_KEY}&s="the mummy"&type="movie"&page=1`)
        //         .then(res => {
        //             console.log(res.data)
        //             // updateMovieList({ track_list: res.data.message.body.track_list })
        //         })
        //         .catch(err => console.log(err))
        // } catch (e) {
        //     alert(e.message)
        // }
    }, [])

    const updateMovieList = (movieArray) => {
        setMovieList(movieArray)
    }

    return (
        <Context.Provider value={{
            movieList,
            updateMovieList
        }}>
            {props.children}
        </Context.Provider>
    );
}