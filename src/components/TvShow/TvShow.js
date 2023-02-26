import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import css from "../Movies/Movies.module.css";

const TvShow = ({tvShow}) => {
    const {id, title, poster_path, vote_average,name} = tvShow;
    const navigate = useNavigate();
    const {currentTheme} = useSelector(state => state.theme);
    const setShow = () => {
        navigate(`/tvDetails/${id}`)
    }

 return (
     <div onClick={setShow} className={currentTheme === 'light'? css.movieLight :css.movieDark}>
         <div className={css.title}><h2>{name}</h2></div>
         <div className={css.poster}>
             {poster_path ? <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={title}/> : <img src="/images/not-found.jpg" alt="" width={300} height={450}/> }
         </div>
         <div className={css.stars}>
             <StarRatings
                 rating={vote_average}
                 numberOfStars={10}
                 starDimension="20px"
                 starSpacing="5px"
                 starRatedColor="gold"
                 starEmptyColor="dimgrey"
             />
         </div>
     </div>
 );
};

export {TvShow};