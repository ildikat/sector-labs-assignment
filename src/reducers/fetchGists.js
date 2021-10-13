import axios from "axios";

export const fetchAllGists = (userName, callback, errorCallback) => {
    axios.get(`https://api.github.com/users/${userName}/gists`)
        .then(res => {
                console.log(res.data);
                callback(res.data);
            }
        ).catch(err =>
        console.log(err)
    )
};

export const fetchForked = (id, callback) =>{
    axios.get(`https://api.github.com/gists/${id}/forks`)
        .then(res =>{
            callback(res.data)
        })
        .catch(err=>console.log("Fetch users who forked", err))
}