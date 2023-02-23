import{useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {MovieInfo} from "../MovieInfo/MovieInfo";

const MovieDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(movieActions.getMovie({id}))
    },[dispatch, id])


    const {movie} = useSelector(state => state.movies);

    console.log(movie);


    return (
  <div>
      {movie &&<MovieInfo movie={movie}/>}
  </div>
 );
};

export {MovieDetails};