import React, { useContext } from "react";
import { Consumer, Context } from "../../context";
import Spinner from "../layouts/Spinner";
import Track from "./Track";

export const Tracks = () => {
  const { movieList, updateMovieList } = useContext(Context);
  return <div></div>;
};

export default Tracks;
