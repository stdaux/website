const ROOT_URL=process.env.FERMAT_ROOT_URL;
const DATAENGINE_URL=process.env.FERMAT_DATAENGINE_URL;

export const DataEngineUrls = {
    listDataEngine: `${DATAENGINE_URL}/api/dataengine/list`,
    addDataEngine: `${DATAENGINE_URL}/api/dataengine/add`,
    deleteDataEngine: `${DATAENGINE_URL}/api/dataengine/delete`,
    viewDataEngine: `${DATAENGINE_URL}/api/dataengine/view`,
    editDataEngine: `${DATAENGINE_URL}/api/dataengine/edit`,
    activateDataEngine: `${DATAENGINE_URL}/api/dataengine/activate`,
    deactivateDataEngine: `${DATAENGINE_URL}/api/dataengine/deactivate`,
    parametersDataEngine: `${DATAENGINE_URL}/api/dataengine/parameters`,

    dataServerLink: `${DATAENGINE_URL}/api/query/data`,
    listQueryServerLink: `${DATAENGINE_URL}/api/query/list`,

    searchDataengine: `${ROOT_URL}/api/dataengine/search`,
};

