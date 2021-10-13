import React, {useEffect, useState} from 'react';
import User from "./User";
import {fetchForked} from "../reducers/fetchGists";
import "./ForksContainer.css";
// need to make a call to: https://api.github.com/gists/{GIST_ID}/forks?per_page=3
// const FORKS = [];

const getUserElements = (users) => {
    return users.map((user, id) => <User key={`${user.id}-${id}`} avatar_url={user.avatar_url} username={user.login}/>);
}

const getUserObject = (forkedUsersList) => {
    return forkedUsersList.map(element => element.owner);
}

function ForksContainer({gistId}) {
    const [forkedUsersList, setUsersWhoForked] = useState([]);

    useEffect(() => {
        if (gistId) {
            fetchForked(gistId, result => setUsersWhoForked(result));
        }
    }, [gistId]);

    return (
        <div>
            <h4 className={"users-header"}>Users who forked it:</h4>
            <div className={"user-container"}>
                {getUserElements(getUserObject(forkedUsersList))}
            </div>
        </div>
    );
}

export default ForksContainer;