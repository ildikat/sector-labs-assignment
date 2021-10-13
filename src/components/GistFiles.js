import React from 'react';
import GistFile from "./GistFile";

//gistsList all of the gist, has {files: {"test1.js": "" , test2.py":""}

const getGistFiles = (gistFileObj) =>{
    let keys = Object.keys(gistFileObj);
    return keys.map(file => {
        let fileValues = gistFileObj[file]
        return {"filename":fileValues["filename"], "language": fileValues["language"]};
    } );
}

const getGistFileComponents = (gistFileObj) => {
    return getGistFiles(gistFileObj).map(element =>
        <GistFile key={element.filename} {...element}/>
    );
}

function GistFiles({gistFileObj}) {
    console.log("GIST FILES", gistFileObj)
    console.log("get", getGistFiles(gistFileObj))
    return (
        <div>
            <h2>Displayed files</h2>
            <div>
                {getGistFileComponents(gistFileObj)}
            </div>
        </div>
    );
}

export default GistFiles;