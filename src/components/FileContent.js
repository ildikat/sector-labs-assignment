import React from 'react';
import "./FileContent.css"

function FileContent({content}) {
    return (
        <code>{content}</code>
    );
}

export default FileContent;