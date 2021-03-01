const ROOT_URL=process.env.FERMAT_ROOT_URL;

export const FermatUrls = {
    searchFermat: `${ROOT_URL}/api/search/fermat`,
    
    listLegal: `${ROOT_URL}/api/fermat/legal/list`,
    viewLegal: `${ROOT_URL}/api/fermat/legal/view`,
    
    listPublication: `${ROOT_URL}/api/fermat/publication/list`,
    viewPublication: `${ROOT_URL}/api/fermat/publication/view`,
    
    listResearch: `${ROOT_URL}/api/fermat/research/list`,
    viewResearch: `${ROOT_URL}/api/fermat/research/view`,
    
    listSolution: `${ROOT_URL}/api/fermat/solution/list`,
    viewSolution: `${ROOT_URL}/api/fermat/solution/view`,
    
    listProduct: `${ROOT_URL}/api/fermat/product/list`,
    viewProduct: `${ROOT_URL}/api/fermat/product/view`,
};

