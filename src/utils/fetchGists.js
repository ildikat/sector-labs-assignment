import axios from "axios";
import {FORKED_USERS, GISTS, TESTING} from "../constants";

let counter = 0;

const API_URL = "https://api.github.com";
export const fetchAllGists = (userName, callback, errorCallback) => {
    if (TESTING) {
        counter++;
        console.log(counter);
        callback(GISTS);
    } else {
        if (userName) {
            axios.get(`${API_URL}/users/${userName}/gists`)
                .then(res => callback(res.data))
                .catch(err => console.log(err)
                )
        }
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
        // console.log(`${API_URL}/gists/${id}/forks?per_page=3`)
        if (id) {
            axios.get(`${API_URL}/gists/${id}/forks?per_page=3`)
                .then(res => {
                    callback(res.data)
                    counter++;
                    console.log(counter);
                })
                .catch(err => console.log(err))
        }
    }
}