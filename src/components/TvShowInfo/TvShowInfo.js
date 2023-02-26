import StarRatings from "react-star-ratings/build/star-ratings";
import {NavLink} from "react-router-dom";

const TvShowInfo = ({tvShow, videos}) => {
    const {name,original_name, poster_path, first_air_date,status, adult,episode_run_time,overview, genres, vote_average,backdrop_path
    } = tvShow;

    return ( <div className={'info'}>
            <div className={'title'}>
                <h1>{name}</h1>
                <div className={'original'}>{original_name}</div>
            </div>

            <div className={'columns'}>
                <div className={'left-column'}>
                    <div className={'poster'}>
                        {poster_path ? <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={name}/>
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
                            <div className={'value'}>{first_air_date}</div>
                        </div>
                        <div className={'line'}>
                            <div className={'key'}>Жанр:</div>
                            <div className={'value'}>
                                <div className={'genre-box'}>
                                    {genres.map(genre=> <div className={'genre'} key={genre.id}>
                                        <NavLink to={'/genres/tvShowsByGenre'}  state={{id:`${genre.id}`, name:`${genre.name}`}}>
                                            {genre.name}</NavLink></div>)}</div>
                            </div>
                        </div>
                        <div className={'line'}>
                            <div className={'key'}>Стан:</div>
                            <div className={'value'}>{status === 'Ended'? 'Вийшов': 'Виходить'}</div>
                        </div>
                        <div className={'line'}>
                            <div className={'key'}>Тривалість:</div>
                            <div className={'value'}>{episode_run_time}</div>
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
                <h2>Про шоу {name}</h2>
                <p>{overview}</p>
            </div>
            <div className={'trailer'}>
                <iframe src={`https://www.youtube.com/embed/${videos?.key}?autoplay=0&controls=2`} title={name} id={videos?.id} width="640" height="360" allowFullScreen="allowFullScreen" ></iframe>
            </div>
        </div>
    );
};

export {TvShowInfo};