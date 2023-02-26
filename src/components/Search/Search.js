import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {searchActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import css from "../Movies/Movies.module.css";
import {TvShow} from "../TvShow/TvShow";
import {Loading} from "../Loading/Loading";

const Search = () => {
    const {query:keyword, search, loading} = useSelector(state => state.search);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({query: keyword, page:'1'});

    useEffect(()=>{
        setQuery(query=>({query: keyword, page:query.get('page')}))
        dispatch(searchActions.setQuery(query.get('query')))
        dispatch(searchActions.search({query: keyword, page:query.get('page')}))
        if(query.get('page')=== null){
                        setQuery(query=>({query: keyword, page: '1'}))
                    }
    },[dispatch,keyword, query, setQuery])

    return (
        <div>
            <div className={css.buttons}>
                <button disabled={+query.get('page')-1 === 0} onClick={()=>{setQuery(query=>({query: query.get('query'),page:+query.get('page')-1}))}}>Prev</button>
                <button onClick={()=>{setQuery(query=>({query: query.get('query'),page:+query.get('page')+1}))}}>Next</button>
            </div>
            <div className={css.movieBox}>
                {loading?<Loading/>:search.map(media=> media.media_type=== 'movie'?<Movie key={media.id} movie={media}/>: <TvShow key={media.id} tvShow={media}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={+query.get('page')-1 === 0} onClick={()=>{setQuery(query=>({query: query.get('query'),page:+query.get('page')-1}))}}>Prev</button>
                <button onClick={()=>{setQuery(query=>({query: query.get('query'),page:+query.get('page')+1}))}}>Next</button>
            </div>
        </div>
 );
};

export {Search};