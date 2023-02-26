import {useParams} from "react-router-dom";

import {MovieDetails} from "../../components";

const MovieDetailsPage = () => {
    const {id} = useParams();

    console.log(id);
    return (
        <div>
            <MovieDetails id={id}/>
        </div>
    );
};

export {MovieDetailsPage};