import React from 'react';
import GistFile from "./GistFile";
import FileContent from "./FileContent";
import {useState} from "react";
import {fetchFileContents} from "../utils/fetchGists";
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
            <h4>Contained files:</h4>
            <div className={"files-container"}>
                {getGistFileComponents(gistFileObj, handleClickedFile)}
            </div>
            {(selectedFileName.length === 0)
                ? (<p>Click on a file to see it's content</p>)
                : (<div>
                    <h4>{selectedFileName}'s content:</h4>
                    <FileContent content={selectedFileContent}/>
                </div>)}
        </div>
    );
}

export default GistFiles;