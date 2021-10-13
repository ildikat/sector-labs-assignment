import {changeUsername} from "../reducers/searchedUsernameSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {updateGists} from "../reducers/gistSlice";
import {fetchAllGists} from "../utils/fetchGists";
import "./SearchBar.css";

function SearchBar() {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const handleSearchClick = (e, newUsername) => {
        e.preventDefault();
        fetchAllGists(userName, result => {
            dispatch(updateGists(result));
            dispatch(changeUsername(newUsername));
        });
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