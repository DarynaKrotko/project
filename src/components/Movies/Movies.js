import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'
import {movieActions} from "../../redux";
import {Loading} from "../Loading/Loading";

const Movies = () => {
    const {movies, loading} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page:'1'});
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getAll({page: query.get('page')}))
    },[dispatch, query])

    return (
        <div>
            <div className={css.buttons}>
                <button disabled={+query.get('page')-1=== 0} onClick={()=>{setQuery(query=>({page:+query.get('page')-1}))}}>Попередня сторінка</button>
                <button onClick={()=>{setQuery(query=>({page:+query.get('page')+1}))}}>Наступна сторінка</button>
            </div>
            <div className={css.movieBox}>
                {loading? <Loading/>:movies.map(movie=> <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={+query.get('page')-1=== 0} onClick={()=>{setQuery(query=>({page:+query.get('page')-1}))}}>Попередня сторінка</button>
                <button onClick={()=>{setQuery(query=>({page:+query.get('page')+1}))}}>Наступна сторінка</button>
            </div>
        </div>
    );
};

export {Movies};