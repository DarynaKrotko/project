import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {tvShowActions} from "../../redux";
import {TvShow} from "../TvShow/TvShow";
import css from "../Movies/Movies.module.css";
import {Loading} from "../Loading/Loading";

const TvShows = () => {
    const {tvShows, loading} = useSelector(state => state.tvShows);
    const [query, setQuery] = useSearchParams({page:'1'});
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(tvShowActions.getAll({page:query.get('page')}))
    },[dispatch, query])

    return (
        <div>
            <div className={css.buttons}>
                <button disabled={+query.get('page')-1=== 0} onClick={()=>{setQuery(query=>({page:+query.get('page')-1}))}}>Попередня сторінка</button>
                <button onClick={()=>{setQuery(query=>({page:+query.get('page')+1}))}}>Наступна сторінка</button>
            </div>
            <div className={css.movieBox}>
                {loading?<Loading/>:tvShows.map(tvShow=><TvShow key={tvShow.id} tvShow={tvShow}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={+query.get('page')-1=== 0} onClick={()=>{setQuery(query=>({page:+query.get('page')-1}))}}>Попередня сторінка</button>
                <button onClick={()=>{setQuery(query=>({page:+query.get('page')+1}))}}>Наступна сторінка</button>
            </div>
        </div>
    );
};

export {TvShows};