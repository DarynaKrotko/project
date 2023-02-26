import {useParams} from "react-router-dom";

import {MovieDetails} from "../../components";

const MovieDetailsPage = () => {
    const {id} = useParams();

    return (
        <div>
            <MovieDetails id={id}/>
        </div>
    );
};

export {MovieDetailsPage};