import {changeUsername} from "../reducers/searchedUsernameSlice";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {errors, updateError, updateGists} from "../reducers/gistSlice";
import {fetchAllGists} from "../utils/fetchGists";
import "./SearchBar.css";
import Button from "./common/Button";

function SearchBar() {
    const [userName, setUserName] = useState("");
    const gistsError = useSelector(errors);
    const dispatch = useDispatch();
    const handleSearchClick = (e, newUsername) => {
        e.preventDefault();
        fetchAllGists(userName,
            result => {
                dispatch(updateGists(result));
                dispatch(changeUsername(newUsername));
                dispatch(updateError(""));
            },
            error => {
                dispatch(updateError(error));
            });
    }
    return (
        <form className={"search-container"}>
            <label htmlFor="username">Enter a GitHub username:</label><br/>
            <input onChange={(e) => setUserName(e.target.value)} type="text" id="username" name="username"
                   placeholder="Username..." value={userName}/>
            <Button text="Search" onClick={(e) => handleSearchClick(e, userName)}/>
            <p className={"error"}>{(gistsError) ? gistsError : ""}</p>
        </form>
    );
}

export default SearchBar;