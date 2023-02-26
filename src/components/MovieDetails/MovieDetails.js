import{useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {Loading} from "../Loading/Loading";

const MovieDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(movieActions.getMovie({id}))
    },[dispatch, id])

    useEffect(()=>{
        dispatch(movieActions.getVideos({id}))
    },[dispatch, id])

    const {movie, videos, loading} = useSelector(state => state.movies);

    return (
  <div>
      {loading? <Loading/>:movie && <MovieInfo movie={movie} videos={videos[0]}/>}
  </div>
 );
};

export {MovieDetails};