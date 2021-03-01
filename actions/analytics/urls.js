const ROOT_URL=process.env.FERMAT_ROOT_URL;

export const AnalyticsUrls = {
    listAnalytics: `${ROOT_URL}/api/analytics/list`,
    addAnalytics: `${ROOT_URL}/api/analytics/add`,
    deleteAnalytics: `${ROOT_URL}/api/analytics/delete`,
    viewAnalytics: `${ROOT_URL}/api/analytics/view`,
    editAnalytics: `${ROOT_URL}/api/analytics/edit`,
    
    searchAnalytics: `${ROOT_URL}/api/analytics/search`,
};

