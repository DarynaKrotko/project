import {Outlet, useLocation} from "react-router-dom";

import {Genres} from "../../components";

const GenresPage = () => {
    const location = useLocation();

    return (
  <div>
      {location.pathname === '/genres' ? <Genres/> : <Outlet/>}
  </div>
 );
};

export {GenresPage};