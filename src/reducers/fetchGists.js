import axios from "axios";
import {FORKED_USERS, GISTS, TESTING} from "../components/constants";
let counter = 0;
export const fetchAllGists = (userName, callback, errorCallback) => {
    if (TESTING) {
        counter++;
        console.log(counter);
        callback(GISTS);
    } else {
        axios.get(`https://api.github.com/users/${userName}/gists`)
            .then(res => callback(res.data))
            .catch(err => console.log(err)
        )
    }

};

export const fetchFileContents = (url, callback) => {
    axios.get(url)
        .then(res => {
            callback(res.data)
        })
        .catch(err => console.log(err))
}

export const fetchForked = (id, callback) => {
    if (TESTING) {
        callback(FORKED_USERS);

    } else {
        axios.get(`https://api.github.com/gists/${id}/forks?per_page=3`)
            .then(res => {
                callback(res.data)
                counter++;
                console.log(counter);
            })
            .catch(err => console.log("Fetch users who forked", err))
    }
}