import React from 'react';
import GistFiles from "./GistFiles";
import ForksContainer from "./ForksContainer";
import {useSelector} from "react-redux";
import {gists} from "../reducers/gistSlice";

const getGistListElement = (gistsList) => gistsList.map(element =>
    <div className={"solid-border"} key={element.id}>
        <GistFiles gistFileObj={element.files}/>
        <ForksContainer gistId={element.id}/>
    </div>
);

function GistListContainer() {
    const gistsList = useSelector(gists);
    return (
        <>
            {getGistListElement(gistsList)}
        </>
    )}

export default GistListContainer;