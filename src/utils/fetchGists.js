import axios from "axios";

const API_URL = "https://api.github.com";
export const fetchAllGists = (userName, callback, errorCallback) => {

    if (userName) {
        axios.get(`${API_URL}/users/${userName}/gists`)
            .then(res => callback(res.data))
            .catch(err => errorCallback(err.response.data.message))
    }
};

export const fetchFileContents = (url, callback, errorCallback) => {
    axios.get(url)
        .then(res => {
            callback(res.data)
        })
        .catch(err => {
            console.log(err);
            errorCallback(err.response.data.message)
        })
}

export const fetchForked = (id, callback, errorCallback) => {
    if (id) {
        axios.get(`${API_URL}/gists/${id}/forks?per_page=3`)
            .then(res => {
                callback(res.data)
            })
            .catch(err => {
                errorCallback(err.response.data.message);
            });
    }
}