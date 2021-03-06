import React, {useEffect, useState} from 'react';
import User from "./User";
import {fetchForked} from "../utils/fetchGists";
import "./ForksContainer.css";

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
        (forkedUsersList.length === 0 ? ("") : <div>
            <h4 className={"users-header"}>Users who forked it:</h4>
            <div className={"user-container"}>
                {getUserElements(getUserObject(forkedUsersList))}
            </div>
        </div>)
    );
}

export default ForksContainer;