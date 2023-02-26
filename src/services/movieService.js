import {axiosService} from "./axiosService";
import {urls} from "../configs";


const language = 'uk-UK';

const movieService ={
    getAll:(page=1)=> axiosService.get(urls.movies, {params:{page, language}}),
    getMovie:(id)=> axiosService.get(`${urls.movie}/${id}`, {params:{language}}),
    getAllGenres: ()=> axiosService.get(urls.genres, {params:{language}}),
    getOneGenre:(page=1, with_genres=null)=> axiosService.get(urls.genre, {params:{page, with_genres, language}}),
    search: (query=null, page=1)=> axiosService.get(urls.search, {params:{query, page, language}}),
    getVideos:(id) => axiosService.get(`${urls.movie}/${id}/videos`, {params: {language}})
}

export {movieService};