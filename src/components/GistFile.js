import React from 'react';

function GistFile({filename, language}) {
    return (
        <div>
            <span>{filename}</span> <span className="badge">{language}</span>
        </div>
    );
}

export default GistFile;