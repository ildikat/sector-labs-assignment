import {changeUsername} from "../reducers/searchedUsernameSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";


function SearchBar() {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();

    const handleSearchClick = (e, newUsername) => {
        e.preventDefault();
        dispatch(changeUsername(newUsername));
    }

    return (
        <form className={"solid-border"}>
            <label htmlFor="username">Username:</label><br/>
            <input onChange={(e) => setUserName(e.target.value)} type="text" id="username" name="username"
                   placeholder="Search username gists..."/>
            {/*<button type={"submit"}>Search</button>*/}
            <button onClick={(e) => handleSearchClick(e, userName)}>
                Search
            </button>
        </form>
    );
}

export default SearchBar;