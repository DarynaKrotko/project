const baseURL = 'https://api.themoviedb.org/3';

const urls={
    movies:'/discover/movie',
    movie: '/movie',
    genres:'/genre/movie/list',
    genre:'/discover/movie',
    search: '/search/multi',
    tvShows:'/discover/tv',
    tvShow:'tv',
    tvGenres: '/genre/tv/list',
    tvGenre:'discover/tv'
}

export{
    baseURL,
    urls
}