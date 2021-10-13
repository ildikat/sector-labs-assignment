import React from 'react';

//gistsList all of the gist, has {files: {"test1.js": "" , test2.py":""}
function GistFiles({gistFiles}) {
    console.log("GIST FILES", gistFiles)
    return (
        <div>
            <h2>Displayed files</h2>
            <div>
                {JSON.stringify(gistFiles)};
            </div>
        </div>
    );
}

export default GistFiles;