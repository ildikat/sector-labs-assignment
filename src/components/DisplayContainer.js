import React from 'react';
import GistListContainer from "./GistListContainer";

function DisplayContainer(props) {
    return (
        <div className={"solid-border"}>
            <h1>Public gist results:</h1>
            <GistListContainer/>
        </div>
    );
}

export default DisplayContainer;