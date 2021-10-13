import React from 'react';

function FileContent({content}) {
    return (
        <div>{JSON.stringify(content)}</div>
    );
}

export default FileContent;