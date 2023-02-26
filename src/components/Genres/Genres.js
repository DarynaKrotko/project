import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

import {genreActions,tvGenreActions} from "../../redux";

const Genres = () => {
    const dispatch = useDispatch();
    const {genres:{genres}} = useSelector(state => state.genres);
    const {genres:{genres:tvGenres}} = useSelector(state => state.tvGenres);

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])

    useEffect(()=>{
        dispatch(tvGenreActions.getAll())
    },[dispatch])

    return (
        <div className={'box'}>
            <div className={'movieGenres'}>
                <h2>Жанри фільмів</h2>
                {genres && genres.map(genre=>
                    <div className={'genre-box1'} key={genre.id}>
                        <h2 className={'genre'}>
                            <NavLink to={'moviesByGenre'}  state={{id:`${genre.id}`, name:`${genre.name}`}}>
                                {genre.name}</NavLink>
                        </h2>
                    </div>)}
            </div>
            <div className={'tvGenres'}>
                <h2>Жанри телешоу</h2>
                {tvGenres&&tvGenres.map(genre=><div className={'genre-box1'} key={genre.id}>
                    <h2 className={'genre'}>
                        <NavLink to={'tvShowsByGenre'}  state={{id:`${genre.id}`, name:`${genre.name}`}}>
                            {genre.name}</NavLink>
                    </h2>
                </div>)}
            </div>
        </div>
 );
};

export {Genres};