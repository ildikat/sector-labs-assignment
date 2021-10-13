export const getCurrentPageItems = (currentPage, fullList, postPerPage)=>{


    const lastItemInd = currentPage * postPerPage; //the index for the last gist displayed
    const firstItemInd = lastItemInd - postPerPage;

    return  fullList.slice(firstItemInd, lastItemInd);
}