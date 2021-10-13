import React from 'react';
import GistFiles from "./GistFiles";
import ForksContainer from "./ForksContainer";

const getGistListElement = (gistsList) => gistsList.map(element =>
    <div className={"solid-border"} key={element.id}>
        <GistFiles gistFileObj={element.files}/>
        <ForksContainer />
    </div>
);

function GistListContainer({gistsList}) {
    return (
        <div className={"solid-border"}>
            <h3>All gists</h3>
            {getGistListElement(gistsList)}
        </div>
    );
}

export default GistListContainer;