import {useNavigate} from "react-router-dom";


const SearchOne = ({result}) => {
    const {id, title, poster_path} = result;

    const navigate = useNavigate();
    const setMovie = () => {
        navigate(`/details/${id}`)
    };

    return (
  <div onClick={setMovie}>
      <div>id:{id}</div>
      <div>title:{title}</div>
      {poster_path ? <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={title}/> : <img src="/images/not-found.jpg"  alt="" width={300} height={450}/> }
  </div>
 );
};

export {SearchOne};