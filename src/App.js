import {Route, Routes} from "react-router-dom";
import './App.css'
import {MainLayout} from "./layouts";
import {GenresPage, HomePage, MovieByGenrePage, MovieDetailsPage, SearchPage} from "./pages";
import {useSelector} from "react-redux";
const App = () => {
const {currentTheme} = useSelector(state => state.theme);
 return (
  <div className={currentTheme=== 'light'? 'app light':'app dark'}>
      <div className={currentTheme=== 'light'? 'container light':'container dark'}>
          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<HomePage/>}/>
                  <Route path={'genres'} element={<GenresPage/>}>
                      <Route path={'moviesByGenre'} element={<MovieByGenrePage/>}/>
                  </Route>
                  <Route path={'details/:id'} element={<MovieDetailsPage/>}/>
                  <Route path={'search'} element={<SearchPage/>}/>
              </Route>
          </Routes>
      </div>
  </div>
 );
};

export {App};
