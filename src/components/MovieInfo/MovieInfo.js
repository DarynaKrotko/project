import {NavLink} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import "./MovieInfo.css"

const MovieInfo = ({movie}) => {
 const {title,original_title, poster_path, release_date,status, adult,runtime, overview, genres, vote_average,backdrop_path
 } = movie;

 return (
  <div className={'movieInfo'}>
      <div className={'title'}>
          <h1>{title}</h1>
          <div className={'original'}>{original_title}</div>
      </div>

      <div className={'columns'}>
          <div className={'left-column'}>
              <div className={'poster'}>
                  {poster_path ? <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={title}/>
                      : <img className={'not-found-page'} src="/images/not-found.jpg" alt=""/> }
              </div>

              <StarRatings
                  rating={vote_average}
                  numberOfStars={10}
                  starDimension="20px"
                  starSpacing="5px"
                  starRatedColor="gold"
                  starEmptyColor="dimgrey"
              />
          </div>
          <div className={'right-column'}>
              <div className={'info'}>
                  <div className={'line'}>
                      <div className={'key'}>Рік:</div>
                      <div className={'value'}>{release_date}</div>
                  </div>
                  <div className={'line'}>
                      <div className={'key'}>Жанр:</div>
                      <div className={'value'}>
                          <div className={'genre-box'}>
                              {genres.map(genre=> <div className={'genre'} key={genre.id}>
                                  <NavLink to={'/genres/moviesByGenre'}  state={{id:`${genre.id}`, name:`${genre.name}`}}>
                                      {genre.name}</NavLink></div>)}</div>
                      </div>
                  </div>
                  <div className={'line'}>
                      <div className={'key'}>Стан:</div>
                      <div className={'value'}>{status === 'Released'? 'Випущений': 'Виходить'}</div>
                  </div>
                  <div className={'line'}>
                      <div className={'key'}>Тривалість:</div>
                      <div className={'value'}>{runtime}</div>
                  </div>
                  <div className={'line'}>
                      <div className={'key'}>Вік:</div>
                      <div className={'value'}>{adult? '18+' : '+12'}</div>
                  </div>
                  <div className={'line'}>
                      <div className={'key'}>Оцінка:</div>
                      <div className={'value'}>{vote_average}</div>
                  </div>
              </div>
              <div className={'backdrop'}>
                  <img src={"https://image.tmdb.org/t/p/w400" + backdrop_path} alt={''}/>
              </div>
          </div>
      </div>

      <div className={'overview'}>
          <h2>Про фільм {title}</h2>
          <p>{overview}</p>
      </div>




  </div>
 );
}

export {MovieInfo};