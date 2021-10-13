import React, {useState} from 'react';
import "./DisplayContainer.css"
import {searchedUsername} from "../reducers/searchedUsernameSlice";
import {useSelector} from "react-redux";
import GistFiles from "./GistFiles";
import ForksContainer from "./ForksContainer";
import {gists} from "../reducers/gistSlice";
import {getCurrentPageItems} from "../utils/getPages";

const getGistListElement = (gistsList) => gistsList.map(element =>
    <div className={"solid-border list-element"} key={element.id} >
        <GistFiles gistFileObj={element.files}/>
        <ForksContainer gistId={element.id}/>
    </div>
);



function DisplayContainer(props) {
    const username = useSelector(searchedUsername);
    const gistsList = useSelector(gists);
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 5;


    const handlePrevPage = ()=>{
        if(currentPage > 1){
            setCurrentPage(prevState => prevState-1);
        }
    }

    const handleNextPage = ()=>{
        if(currentPage < Math.floor(gistsList.length/postPerPage)){
            setCurrentPage(prevState => prevState+1)
        }
    }

    return (
        <>
            {(username.length > 0) ?
                (
                    <div className={"display-container"}>
                        <h2>{username}'s public gists:</h2>
                        {getGistListElement(getCurrentPageItems(currentPage, gistsList, postPerPage))}
                        <div className={"button-container"}>
                            <button onClick={handlePrevPage} disabled={currentPage <=1}>Prev page</button>
                            <p>{currentPage}</p>
                            <button onClick={handleNextPage} disabled={currentPage >= Math.floor(gistsList.length/postPerPage)}>Next page</button>
                        </div>
                    </div>
                )
                : (<h2>Enter someone's username to see the results</h2>)
            }
        </>
    );
}

export default DisplayContainer;