import {changeUsername} from "../reducers/searchedUsernameSlice";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {updateGists} from "../reducers/gistSlice";
import {fetchAllGists} from "../reducers/fetchGists";
import "./SearchBar.css";

function SearchBar() {
    const [userName, setUserName] = useState("");
    const [submitClicked, setSubmitClicked] = useState(false);
    const dispatch = useDispatch();
    useEffect(()=> {
        fetchAllGists(userName, result => dispatch(updateGists(result)));
    },[submitClicked]);

    const handleSearchClick = (e, newUsername) => {
        e.preventDefault();
        dispatch(changeUsername(newUsername));
        setSubmitClicked(prev=> !prev);
    }

    return (
        <form className={"search-container"}>
            <label htmlFor="username">Enter a GitHUb username:</label><br/>
            <input onChange={(e) => setUserName(e.target.value)} type="text" id="username" name="username"
                   placeholder="Username..." value={userName}/>
            <button onClick={(e) => handleSearchClick(e, userName)}>
                Search
            </button>
        </form>
    );
}

export default SearchBar;