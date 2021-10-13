export const getCurrentPageItems = (currentPage, fullList, postPerPage) => {
    const lastItemInd = currentPage * postPerPage;
    const firstItemInd = lastItemInd - postPerPage;

    return fullList.slice(firstItemInd, lastItemInd);
}