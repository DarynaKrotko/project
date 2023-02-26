import {useParams} from "react-router-dom";

import {TvShowDetails} from "../../components";

const TvShowDetailsPage = () => {
    const {id} = useParams();

    return (
        <div>
            <TvShowDetails id={id}/>
        </div>
    );
};

export {TvShowDetailsPage};