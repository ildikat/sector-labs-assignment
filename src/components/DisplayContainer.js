import React, {useState} from 'react';
import "./DisplayContainer.css"
import {searchedUsername} from "../reducers/searchedUsernameSlice";
import {useSelector} from "react-redux";
import GistFiles from "./GistFiles";
import ForksContainer from "./ForksContainer";
import {gists} from "../reducers/gistSlice";
import {getCurrentPageItems} from "../utils/getPages";
import {ITEMS_PER_PAGE} from "../constants";
import Button from "./common/Button";

const getGistListElement = (gistsList) => gistsList.map(element =>
    <div className={"solid-border list-element"} key={element.id}>
        <GistFiles gistFileObj={element.files}/>
        <ForksContainer gistId={element.id}/>
    </div>
);

function DisplayContainer(props) {
    const username = useSelector(searchedUsername);
    const gistsList = useSelector(gists);
    const [currentPage, setCurrentPage] = useState(1);
    const maxPages = Math.ceil(gistsList.length / ITEMS_PER_PAGE);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevState => prevState - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < Math.floor(maxPages)) {
            setCurrentPage(prevState => prevState + 1)
        }
    }

    return (
        <>
            {(username.length > 0) ?
                (
                    <div className={"display-container"}>
                        <p>{username}'s public gists:</p>
                        {getGistListElement(getCurrentPageItems(currentPage, gistsList, ITEMS_PER_PAGE))}
                        <div className={"button-container"}>
                            <Button onClick={handlePrevPage} disabled={currentPage <= 1} text={"Prev page"}/>
                            <p>{currentPage}/ {maxPages}</p>
                            <Button onClick={handleNextPage}
                                    disabled={currentPage >= Math.floor(maxPages)}
                                    text={"Next page"}/>
                        </div>
                    </div>
                )
                : (<h2> Enter someone's username to see the results</h2>)
            }
        </>
    );
}

export default DisplayContainer;