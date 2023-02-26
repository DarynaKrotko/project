import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {tvShowActions} from "../../redux";
import {TvShowInfo} from "../TvShowInfo/TvShowInfo";
import {Loading} from "../Loading/Loading";

const TvShowDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(tvShowActions.getTvShow({id}))
    },[dispatch, id])

    useEffect(()=>{
        dispatch(tvShowActions.getVideos({id}))
    },[dispatch,id])

    const {tvShow, videos, loading} = useSelector(state => state.tvShows);

    return (
        <div>
            {loading?<Loading/>:tvShow && <TvShowInfo tvShow={tvShow} videos={videos[0]}/>}
        </div>
    );
};

export {TvShowDetails};