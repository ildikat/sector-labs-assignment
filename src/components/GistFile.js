import React from 'react';
import './GistFile.css';

function GistFile({onClick,filename, language}) {
    return (
        <div className={"clickable"} onClick={onClick}>
            <span>{filename}</span> <span className="badge">{language}</span>
        </div>
    );
}

export default GistFile;