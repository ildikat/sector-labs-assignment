import React from 'react';
import GistFile from "./GistFile";
import FileContent from "./FileContent";
import {useState} from "react";
import {fetchFileContents} from "../reducers/fetchGists";
import "./GistFiles.css"

const getGistFiles = (gistFileObj) => {
    let keys = Object.keys(gistFileObj);
    return keys.map(file => {
        let {filename, language, raw_url} = gistFileObj[file]
        return {filename, language, raw_url};
    });
}

const getGistFileComponents = (gistFileObj, handleClickedFile) => {
    return getGistFiles(gistFileObj).map(element =>
        <GistFile onClick={() => handleClickedFile(element)} key={element.filename} {...element}/>
    );
}

function GistFiles({gistFileObj}) {
    const [selectedFileContent, setSelectedFileContent] = useState("");
    const [selectedFileName, setSelectedFileName] = useState("");
    const handleClickedFile = (element) => {
        fetchFileContents(element.raw_url, response => {
            setSelectedFileName(element.filename);
            setSelectedFileContent(response);
        });
    }
    return (
        <div>
            <h2>Contained files:</h2>
            <div className={"files-container"}>
                {getGistFileComponents(gistFileObj, handleClickedFile)}
            </div>
            {(selectedFileName.length === 0)
                ? (<h4>Click on a file to see it's content</h4>)
                : (<div>
                    <h4>{selectedFileName}'s content:</h4>
                    <FileContent content={selectedFileContent}/>
                </div>)}
        </div>
    );
}

export default GistFiles;