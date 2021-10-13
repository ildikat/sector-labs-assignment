import React from 'react';

function User({username, avatar_url}) {
    return (
        <div>
            <p>Username: {username}</p>
            <img src={avatar_url} alt={`Avatar of the user`}/>
        </div>
    );
}

export default User;