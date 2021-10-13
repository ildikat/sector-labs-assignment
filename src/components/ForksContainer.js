import React from 'react';
import User from "./User";

// need to make a call to: https://api.github.com/gists/{GIST_ID}}/forks?per_page=3
const FORKS = [
    {
        "url": "https://api.github.com/gists/27dbc7660dc51f56af2aa08c3d14061e",
        "forks_url": "https://api.github.com/gists/27dbc7660dc51f56af2aa08c3d14061e/forks",
        "commits_url": "https://api.github.com/gists/27dbc7660dc51f56af2aa08c3d14061e/commits",
        "id": "27dbc7660dc51f56af2aa08c3d14061e",
        "node_id": "MDQ6R2lzdDI3ZGJjNzY2MGRjNTFmNTZhZjJhYTA4YzNkMTQwNjFl",
        "git_pull_url": "https://gist.github.com/27dbc7660dc51f56af2aa08c3d14061e.git",
        "git_push_url": "https://gist.github.com/27dbc7660dc51f56af2aa08c3d14061e.git",
        "html_url": "https://gist.github.com/27dbc7660dc51f56af2aa08c3d14061e",
        "files": {

        },
        "public": true,
        "created_at": "2018-04-07T23:55:14Z",
        "updated_at": "2018-04-07T23:55:15Z",
        "description": null,
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/27dbc7660dc51f56af2aa08c3d14061e/comments",
        "owner": {
            "login": "j1nx0",
            "id": 12703771,
            "node_id": "MDQ6VXNlcjEyNzAzNzcx",
            "avatar_url": "https://avatars.githubusercontent.com/u/12703771?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/j1nx0",
            "html_url": "https://github.com/j1nx0",
            "followers_url": "https://api.github.com/users/j1nx0/followers",
            "following_url": "https://api.github.com/users/j1nx0/following{/other_user}",
            "gists_url": "https://api.github.com/users/j1nx0/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/j1nx0/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/j1nx0/subscriptions",
            "organizations_url": "https://api.github.com/users/j1nx0/orgs",
            "repos_url": "https://api.github.com/users/j1nx0/repos",
            "events_url": "https://api.github.com/users/j1nx0/events{/privacy}",
            "received_events_url": "https://api.github.com/users/j1nx0/received_events",
            "type": "User",
            "site_admin": false
        }
    },
    {
        "url": "https://api.github.com/gists/f309dcf43284b13d3f8f8fd4091b0a20",
        "forks_url": "https://api.github.com/gists/f309dcf43284b13d3f8f8fd4091b0a20/forks",
        "commits_url": "https://api.github.com/gists/f309dcf43284b13d3f8f8fd4091b0a20/commits",
        "id": "f309dcf43284b13d3f8f8fd4091b0a20",
        "node_id": "MDQ6R2lzdGYzMDlkY2Y0MzI4NGIxM2QzZjhmOGZkNDA5MWIwYTIw",
        "git_pull_url": "https://gist.github.com/f309dcf43284b13d3f8f8fd4091b0a20.git",
        "git_push_url": "https://gist.github.com/f309dcf43284b13d3f8f8fd4091b0a20.git",
        "html_url": "https://gist.github.com/f309dcf43284b13d3f8f8fd4091b0a20",
        "files": {

        },
        "public": true,
        "created_at": "2018-04-07T23:55:16Z",
        "updated_at": "2018-04-07T23:55:16Z",
        "description": null,
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/f309dcf43284b13d3f8f8fd4091b0a20/comments",
        "owner": {
            "login": "j1nx0",
            "id": 12703771,
            "node_id": "MDQ6VXNlcjEyNzAzNzcx",
            "avatar_url": "https://avatars.githubusercontent.com/u/12703771?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/j1nx0",
            "html_url": "https://github.com/j1nx0",
            "followers_url": "https://api.github.com/users/j1nx0/followers",
            "following_url": "https://api.github.com/users/j1nx0/following{/other_user}",
            "gists_url": "https://api.github.com/users/j1nx0/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/j1nx0/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/j1nx0/subscriptions",
            "organizations_url": "https://api.github.com/users/j1nx0/orgs",
            "repos_url": "https://api.github.com/users/j1nx0/repos",
            "events_url": "https://api.github.com/users/j1nx0/events{/privacy}",
            "received_events_url": "https://api.github.com/users/j1nx0/received_events",
            "type": "User",
            "site_admin": false
        }
    },
    {
        "url": "https://api.github.com/gists/c81b9865ecbdeca2fe0e04762cddc7b4",
        "forks_url": "https://api.github.com/gists/c81b9865ecbdeca2fe0e04762cddc7b4/forks",
        "commits_url": "https://api.github.com/gists/c81b9865ecbdeca2fe0e04762cddc7b4/commits",
        "id": "c81b9865ecbdeca2fe0e04762cddc7b4",
        "node_id": "MDQ6R2lzdGM4MWI5ODY1ZWNiZGVjYTJmZTBlMDQ3NjJjZGRjN2I0",
        "git_pull_url": "https://gist.github.com/c81b9865ecbdeca2fe0e04762cddc7b4.git",
        "git_push_url": "https://gist.github.com/c81b9865ecbdeca2fe0e04762cddc7b4.git",
        "html_url": "https://gist.github.com/c81b9865ecbdeca2fe0e04762cddc7b4",
        "files": {

        },
        "public": true,
        "created_at": "2018-04-07T23:55:17Z",
        "updated_at": "2018-04-07T23:55:17Z",
        "description": null,
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/c81b9865ecbdeca2fe0e04762cddc7b4/comments",
        "owner": {
            "login": "j1nx0",
            "id": 12703771,
            "node_id": "MDQ6VXNlcjEyNzAzNzcx",
            "avatar_url": "https://avatars.githubusercontent.com/u/12703771?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/j1nx0",
            "html_url": "https://github.com/j1nx0",
            "followers_url": "https://api.github.com/users/j1nx0/followers",
            "following_url": "https://api.github.com/users/j1nx0/following{/other_user}",
            "gists_url": "https://api.github.com/users/j1nx0/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/j1nx0/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/j1nx0/subscriptions",
            "organizations_url": "https://api.github.com/users/j1nx0/orgs",
            "repos_url": "https://api.github.com/users/j1nx0/repos",
            "events_url": "https://api.github.com/users/j1nx0/events{/privacy}",
            "received_events_url": "https://api.github.com/users/j1nx0/received_events",
            "type": "User",
            "site_admin": false
        }
    }
]

const getUserElements = (users) =>{
    return users.map((user,id) => <User key={`${user.id}-${id}`} avatar_url={user.avatar_url} username={user.login}/>);
}

const getUserObject = () =>{
    return FORKS.map( element => element.owner);
}

function ForksContainer(props) {
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