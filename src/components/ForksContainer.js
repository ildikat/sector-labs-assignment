import React, {useEffect} from 'react';
import User from "./User";
import {fetchForked} from "../reducers/fetchGists";
import {useDispatch} from "react-redux";

// need to make a call to: https://api.github.com/gists/{GIST_ID}}/forks?per_page=3
const FORKS = [];

const getUserElements = (users) => {
    return users.map((user, id) => <User key={`${user.id}-${id}`} avatar_url={user.avatar_url} username={user.login}/>);
}

const getUserObject = () => {
    return FORKS.map(element => element.owner);
}

function ForksContainer({gistId}) {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("IDDD", gistId)
        if(gistId) {
            fetchForked(gistId, result => console.log("Users", result));
        }
        }, [gistId]);

    return (
        <div>
            <h2>Users who forked it</h2>
            <div>
                {getUserElements(getUserObject())}
            </div>
        </div>
    );
}

export default ForksContainer;