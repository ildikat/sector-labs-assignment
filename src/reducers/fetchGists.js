import axios from "axios";

const GISTS = [
    {
        "url": "https://api.github.com/gists/b33a521549817b6bef58e068c687331a",
        "forks_url": "https://api.github.com/gists/b33a521549817b6bef58e068c687331a/forks",
        "commits_url": "https://api.github.com/gists/b33a521549817b6bef58e068c687331a/commits",
        "id": "b33a521549817b6bef58e068c687331a",
        "node_id": "G_kwDOA7qKJNoAIGIzM2E1MjE1NDk4MTdiNmJlZjU4ZTA2OGM2ODczMzFh",
        "git_pull_url": "https://gist.github.com/b33a521549817b6bef58e068c687331a.git",
        "git_push_url": "https://gist.github.com/b33a521549817b6bef58e068c687331a.git",
        "html_url": "https://gist.github.com/b33a521549817b6bef58e068c687331a",
        "files": {
            "test.js": {
                "filename": "test.js",
                "type": "application/javascript",
                "language": "JavaScript",
                "raw_url": "https://gist.githubusercontent.com/ildikat/b33a521549817b6bef58e068c687331a/raw/0b2963a7855ab412c8838cc1883802f6588c4d2a/test.js",
                "size": 20
            }
        },
        "public": true,
        "created_at": "2021-10-13T09:02:22Z",
        "updated_at": "2021-10-13T09:02:22Z",
        "description": "",
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/b33a521549817b6bef58e068c687331a/comments",
        "owner": {
            "login": "ildikat",
            "id": 62556708,
            "node_id": "MDQ6VXNlcjYyNTU2NzA4",
            "avatar_url": "https://avatars.githubusercontent.com/u/62556708?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ildikat",
            "html_url": "https://github.com/ildikat",
            "followers_url": "https://api.github.com/users/ildikat/followers",
            "following_url": "https://api.github.com/users/ildikat/following{/other_user}",
            "gists_url": "https://api.github.com/users/ildikat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ildikat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ildikat/subscriptions",
            "organizations_url": "https://api.github.com/users/ildikat/orgs",
            "repos_url": "https://api.github.com/users/ildikat/repos",
            "events_url": "https://api.github.com/users/ildikat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ildikat/received_events",
            "type": "User",
            "site_admin": false
        },
        "truncated": false
    },
    {
        "url": "https://api.github.com/gists/6d6ef6213e62b6d2aa6d235a4987ef80",
        "forks_url": "https://api.github.com/gists/6d6ef6213e62b6d2aa6d235a4987ef80/forks",
        "commits_url": "https://api.github.com/gists/6d6ef6213e62b6d2aa6d235a4987ef80/commits",
        "id": "6d6ef6213e62b6d2aa6d235a4987ef80",
        "node_id": "G_kwDOA7qKJNoAIDZkNmVmNjIxM2U2MmI2ZDJhYTZkMjM1YTQ5ODdlZjgw",
        "git_pull_url": "https://gist.github.com/6d6ef6213e62b6d2aa6d235a4987ef80.git",
        "git_push_url": "https://gist.github.com/6d6ef6213e62b6d2aa6d235a4987ef80.git",
        "html_url": "https://gist.github.com/6d6ef6213e62b6d2aa6d235a4987ef80",
        "files": {
            "test_gist.js": {
                "filename": "test_gist.js",
                "type": "application/javascript",
                "language": "JavaScript",
                "raw_url": "https://gist.githubusercontent.com/ildikat/6d6ef6213e62b6d2aa6d235a4987ef80/raw/e4f2d196dbc1f75746801ebd9d7ac9b75102c5da/test_gist.js",
                "size": 26
            },
            "test_gist.py": {
                "filename": "test_gist.py",
                "type": "application/x-python",
                "language": "Python",
                "raw_url": "https://gist.githubusercontent.com/ildikat/6d6ef6213e62b6d2aa6d235a4987ef80/raw/6d95fe97a12449aa7e3cf570dea13203d07571b9/test_gist.py",
                "size": 20
            }
        },
        "public": true,
        "created_at": "2021-10-13T08:33:50Z",
        "updated_at": "2021-10-13T08:33:50Z",
        "description": "",
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/6d6ef6213e62b6d2aa6d235a4987ef80/comments",
        "owner": {
            "login": "ildikat",
            "id": 62556708,
            "node_id": "MDQ6VXNlcjYyNTU2NzA4",
            "avatar_url": "https://avatars.githubusercontent.com/u/62556708?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ildikat",
            "html_url": "https://github.com/ildikat",
            "followers_url": "https://api.github.com/users/ildikat/followers",
            "following_url": "https://api.github.com/users/ildikat/following{/other_user}",
            "gists_url": "https://api.github.com/users/ildikat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ildikat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ildikat/subscriptions",
            "organizations_url": "https://api.github.com/users/ildikat/orgs",
            "repos_url": "https://api.github.com/users/ildikat/repos",
            "events_url": "https://api.github.com/users/ildikat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ildikat/received_events",
            "type": "User",
            "site_admin": false
        },
        "truncated": false
    }
];
export const fetchAllGists = (userName, callback, errorCallback) => {
    callback(GISTS);
}
// export const fetchAllGists = (userName, callback, errorCallback) => {
//     axios.get(`https://api.github.com/users/${userName}/gists`)
//         .then(res => {
//                 callback(res.data);
//             }
//         ).catch(err =>
//         console.log(err)
//     )
// };

const FORKED_USERS = [
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
];

export const fetchForked = (id, callback) => {
    callback(FORKED_USERS);
}
// export const fetchForked = (id, callback) =>{
//     axios.get(`https://api.github.com/gists/${id}/forks?per_page=3`)
//         .then(res =>{
//             callback(res.data)
//         })
//         .catch(err=>console.log("Fetch users who forked", err))
// }

export const fetchFileContents = (url, callback) =>{
        axios.get(url)
        .then(res =>{
            callback(res.data)
        })
        .catch(err=>console.log(err))
}