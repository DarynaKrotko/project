import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {searchActions} from "../../redux";
import {SearchOne} from "../SearchOne/SearchOne";

const Search = () => {
    const {query:keyword, search} = useSelector(state => state.search);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({query: keyword, page:'1'});
    console.log('startKeyword',keyword);
    console.log('startQuery',query.get('query'));
    console.log('startPage',query.get('page'));

    useEffect(()=>{
        if(keyword && query.get('page')!== null){
            setQuery(query=>({query: keyword, page: query.get('page')}))
            dispatch(searchActions.search({query: query.get('query'), page:query.get('page')}))
            dispatch(searchActions.setQuery(keyword))
        }
        else{
            if(keyword === null){
                dispatch(searchActions.setQuery(query.get('query')))
            }
            if(query.get('page')=== null){
                setQuery(query=>({query: keyword, page: '1'}))
            }
            dispatch(searchActions.search({query: query.get('query'), page:query.get('page')}))
        }

        console.log('finishKeyword', keyword);
        console.log('finishQuery',query.get('query'));
        console.log('finishPages', query.get('page'))
    },[dispatch,query, keyword, setQuery])

    return (
        <div>
            <div>
                <button disabled={+query.get('page')-1 === 0} onClick={()=>{setQuery(query=>({query: query.get('query'),page:+query.get('page')-1}))}}>Prev</button>
                <button onClick={()=>{setQuery(query=>({query: query.get('query'),page:+query.get('page')+1}))}}>Next</button>
            </div>
            {search.map(result=> <SearchOne key={result.id} result={result}/>)}

        </div>

 );
};

export {Search};