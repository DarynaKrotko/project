import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux";
import {NavLink} from "react-router-dom";

const Genres = () => {
    const dispatch = useDispatch();
    const {genres:{genres}} = useSelector(state => state.genres);
    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])

    return (
  <div>
      {genres && genres.map(genre=> <div key={genre.id}>
          <NavLink to={'moviesByGenre'}  state={{id:`${genre.id}`, name:`${genre.name}`}}>
              {genre.name}</NavLink></div> )}
  </div>
 );
};

export {Genres};