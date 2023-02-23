import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../redux";
import {MovieByGenre} from "../MovieByGenre/MovieByGenre";

const MoviesByGenre = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const {state} = location;
    const id = state?.id
    const name = state?.name
    const {genre} = useSelector(state => state.genres);
    const [query, setQuery] = useSearchParams({page:'1', with_genres: id, name:name});


    useEffect(()=>{
        dispatch(genreActions.getGenre({page: query.get('page'), with_genres: query.get('with_genres')}))
        setQuery(query=>({page: query.get('page'), with_genres: query.get('with_genres'), name: query.get('name')}))
    },[dispatch, setQuery, id])

    return (
  <div>
      <button disabled={+query.get('page')-1=== 0} onClick={()=>{setQuery(query=>({page:+query.get('page')-1,with_genres: query.get('with_genres'), name: query.get('name')}))}}>Prev</button>
      <button onClick={()=>{setQuery(query=>({page:+query.get('page')+1,with_genres: query.get('with_genres'), name: query.get('name')}))}}>Next</button>
      <div>Фільми за жанром: "{query.get('name')}"</div>
      {genre&& genre.map(movie=> <MovieByGenre key={movie.id} movie={movie}/>)}
  </div>
 );
};

export {MoviesByGenre};