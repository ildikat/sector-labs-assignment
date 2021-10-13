import React from 'react';
import './User.css'

function User({username, avatar_url}) {
    return (
        <div>
            <span>{username}</span> <img className={"thumbnail"} src={avatar_url} alt={`Avatar of the user`}/>
        </div>
    );
}

export default User;