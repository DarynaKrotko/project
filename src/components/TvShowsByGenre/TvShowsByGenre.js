import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import css from "../Movies/Movies.module.css";
import {tvGenreActions} from "../../redux";
import {TvShow} from "../TvShow/TvShow";
import {Loading} from "../Loading/Loading";

const TvShowsByGenre = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {state} = location;
    const id = state?.id
    const name = state?.name
    const [query, setQuery] = useSearchParams({page:'1', with_genres: id, name:name});
    const {genre, loading} = useSelector(state => state.tvGenres);

    useEffect(()=>{
        dispatch(tvGenreActions.getGenre({page: query.get('page'), with_genres: query.get('with_genres')}))
        setQuery(query=>({page: query.get('page'), with_genres: query.get('with_genres'), name: query.get('name')}))
    },[dispatch, setQuery, id, query])

    return (
        <div>
            <div className={css.buttons}>
                <button disabled={+query.get('page')-1=== 0} onClick={()=>{setQuery(query=>({page:+query.get('page')-1,with_genres: query.get('with_genres'), name: query.get('name')}))}}>Prev</button>
                <button onClick={()=>{setQuery(query=>({page:+query.get('page')+1,with_genres: query.get('with_genres'), name: query.get('name')}))}}>Next</button>
            </div>
            <h2 className={css.movieByGenre}>Телешоу за жанром: "{query.get('name')}"</h2>
            <div className={css.movieBox}>
                {loading?<Loading/>:genre&&genre.map(tvShow=> <TvShow key={tvShow.id} tvShow={tvShow}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={+query.get('page')-1=== 0} onClick={()=>{setQuery(query=>({page:+query.get('page')-1,with_genres: query.get('with_genres'), name: query.get('name')}))}}>Prev</button>
                <button onClick={()=>{setQuery(query=>({page:+query.get('page')+1,with_genres: query.get('with_genres'), name: query.get('name')}))}}>Next</button>
            </div>
        </div>
    );
};
export {TvShowsByGenre};