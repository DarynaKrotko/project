import {axiosService} from "./axiosService";
import {urls} from "../configs";

const language = 'uk-UK';

const tvShowService={
    getAll:(page=1)=> axiosService.get(urls.tvShows, {params:{page, language}}),
    getTvShow:(id)=> axiosService.get(`${urls.tvShow}/${id}`, {params:{language}}),
    getVideos:(id) => axiosService.get(`${urls.tvShow}/${id}/videos`, {params: {language}}),
    getAllGenres: ()=> axiosService.get(urls.tvGenres, {params:{language}}),
    getOneGenre:(page=1, with_genres=null)=> axiosService.get(urls.tvGenre, {params:{page, with_genres, language}})
}
export {tvShowService};