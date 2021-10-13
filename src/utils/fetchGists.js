import axios from "axios";

const API_URL = "https://api.github.com";
export const fetchAllGists = (userName, callback, errorCallback) => {

    if (userName) {
        axios.get(`${API_URL}/users/${userName}/gists`)
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
    if (id) {
        axios.get(`${API_URL}/gists/${id}/forks?per_page=3`)
            .then(res => {
                callback(res.data)
            })
            .catch(err => console.log(err))
    }
}