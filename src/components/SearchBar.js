import {changeUsername} from "../reducers/searchedUsernameSlice";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {updateGists} from "../reducers/gistSlice";

function SearchBar() {
    const [userName, setUserName] = useState("ildikat");
    const [submitClicked, setSubmitClicked] = useState(false);
    const dispatch = useDispatch();
    useEffect(async () => {
        const result = await axios.get(`https://api.github.com/users/${userName}/gists`);
        dispatch(updateGists(result.data));
    },[submitClicked]);

    const handleSearchClick = (e, newUsername) => {
        e.preventDefault();
        dispatch(changeUsername(newUsername));
        setSubmitClicked(prev=> !prev);
    }

    return (
        <form className={"solid-border"}>
            <label htmlFor="username">Username:</label><br/>
            <input onChange={(e) => setUserName(e.target.value)} type="text" id="username" name="username"
                   placeholder="Search username gists..." value={userName}/>
            <button onClick={(e) => handleSearchClick(e, userName)}>
                Search
            </button>
        </form>
    );
}

export default SearchBar;