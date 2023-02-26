import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import {MainLayout} from "./layouts";
import {GenresPage, HomePage, MovieByGenrePage, MovieDetailsPage, SearchPage,TvShowsPage, TvShowDetailsPage,TvShowsByGenrePage,NotFoundPage} from "./pages";
import './App.css'


const App = () => {
const {currentTheme} = useSelector(state => state.theme);

 return (
  <div className={currentTheme=== 'light'? 'app light':'app dark'}>
      <div className={currentTheme=== 'light'? 'container light':'container dark'}>
          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path={'tvShows'} element={<TvShowsPage/>}/>
                  <Route path={'genres'} element={<GenresPage/>}>
                      <Route path={'moviesByGenre'} element={<MovieByGenrePage/>}/>
                      <Route path={'tvShowsByGenre'} element={<TvShowsByGenrePage/>}/>
                  </Route>
                  <Route path={'details/:id'} element={<MovieDetailsPage/>}/>
                  <Route path={'tvDetails/:id'} element={<TvShowDetailsPage/>}/>
                  <Route path={'search'} element={<SearchPage/>}/>
                  <Route path={'*'} element={<NotFoundPage/>}/>
              </Route>
          </Routes>
      </div>
  </div>
 );
};

export {App};
