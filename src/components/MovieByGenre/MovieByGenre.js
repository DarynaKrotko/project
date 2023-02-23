import {useNavigate} from "react-router-dom";

const MovieByGenre = ({movie}) => {
    const {id, title, poster_path} = movie;
    const navigate = useNavigate();
    const setMovie = () => {
        navigate(`/details/${id}`)
    };
 return (
     <div onClick={setMovie} className={'movie'}>
         <div>id:{id}</div>
         <div>title:{title}</div>
         {poster_path ? <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={title}/> : <img src="/images/not-found-image.png" alt="" width={360} height={360}/> }
     </div>
 );
};

export {MovieByGenre};