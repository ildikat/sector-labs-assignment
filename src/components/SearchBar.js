import {changeUsername} from "../reducers/searchedUsernameSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {updateGists} from "../reducers/gistSlice";
import {fetchAllGists} from "../utils/fetchGists";
import "./SearchBar.css";
import Button from "./common/Button";

function SearchBar() {
    const [userName, setUserName] = useState("");
    const [userNotFound, setUserNotFound] = useState("");
    const dispatch = useDispatch();

    const handleSearchClick = (e, newUsername) => {
        e.preventDefault();
        fetchAllGists(userName,
            result => {
                dispatch(updateGists(result));
                dispatch(changeUsername(newUsername));
            },
            error => {
                console.log("Erro", error)
                setUserNotFound(error)
            });
    }

    return (
        <form className={"search-container"}>
            <label htmlFor="username">Enter a GitHub username:</label><br/>
            <input onChange={(e) => setUserName(e.target.value)} type="text" id="username" name="username"
                   placeholder="Username..." value={userName}/>
            <Button text="Search" onClick={(e) => handleSearchClick(e, userName)}/>
            <p className={"error"}>{(userNotFound) ? userNotFound : ""}</p>
        </form>
    );
}

export default SearchBar;