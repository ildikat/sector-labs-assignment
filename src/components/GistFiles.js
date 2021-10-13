import React from 'react';
import GistFile from "./GistFile";
import FileContent from "./FileContent";
import {useState} from "react";
import {fetchFileContents} from "../reducers/fetchGists";

//gistsList all of the gist, has {files: {"test1.js": "" , test2.py":""}

const getGistFiles = (gistFileObj) =>{
    let keys = Object.keys(gistFileObj);
    return keys.map(file => {
        let {filename, language, raw_url} = gistFileObj[file]
        return { filename, language, raw_url};
    } );
}

const getGistFileComponents = (gistFileObj, handleClickedFile) => {
    return getGistFiles(gistFileObj).map(element =>
        <GistFile onClick={()=>handleClickedFile(element)} key={element.filename} {...element}/>
    );
}

function GistFiles({gistFileObj}) {
    const [selectedFileContent, setSelectedFileContent] = useState();
    const handleClickedFile = (element) =>{
        fetchFileContents(element.raw_url, response => setSelectedFileContent(response));
    }
    return (
        <div>
            <h2>Displayed files</h2>
            <div>
                {getGistFileComponents(gistFileObj, handleClickedFile)}
            </div>
            <div>
                <h4>Selected file content:</h4>
                <FileContent content={selectedFileContent} />
            </div>
        </div>
    );
}

export default GistFiles;