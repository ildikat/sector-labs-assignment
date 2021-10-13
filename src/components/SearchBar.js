function SearchBar() {
    return (
        <form className={"solid-border"}>
            <label htmlFor="username">Username:</label><br/>
            <input type="text" id="username" name="username" placeholder="Search username gists..."/>
            <button type={"submit"}>Search</button>
        </form>
    );
}

export default SearchBar;