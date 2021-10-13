import React from 'react';
import "./DisplayContainer.css"
import {searchedUsername} from "../reducers/searchedUsernameSlice";
import {useSelector} from "react-redux";
import GistFiles from "./GistFiles";
import ForksContainer from "./ForksContainer";
import {gists} from "../reducers/gistSlice";

const getGistListElement = (gistsList) => gistsList.map(element =>
    <div className={"solid-border list-element"} key={element.id} >
        <GistFiles gistFileObj={element.files}/>
        <ForksContainer gistId={element.id}/>
    </div>
);

function DisplayContainer(props) {
    const username = useSelector(searchedUsername);
    const gistsList = useSelector(gists);

    return (
        <>
            {(username.length > 0) ?
                (
                    <div className={"display-container"}>
                        <h1>{username}'s public gists:</h1>
                        {getGistListElement(gistsList)}
                    </div>
                )
                : (<h1>Enter someone's username to see the results</h1>)
            }
        </>
    );
}

export default DisplayContainer;