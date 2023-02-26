import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

import './Loading.css'

const Loading = () => {

    return (
        <div className={'loading-box'}>
            <FontAwesomeIcon spin className={'loading-icon'} icon={faSpinner} />
        </div>
    );
};

export {Loading};