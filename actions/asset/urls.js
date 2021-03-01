const ROOT_URL=process.env.FERMAT_ROOT_URL;

export const AssetUrls = {
    listAsset: `${ROOT_URL}/api/asset/list`,
    addAsset: `${ROOT_URL}/api/asset/add`,
    deleteAsset: `${ROOT_URL}/api/asset/delete`,
    viewAsset: `${ROOT_URL}/api/asset/view`,
    editAsset: `${ROOT_URL}/api/asset/edit`,
    
    viewAssetSettings: `${ROOT_URL}/api/asset/settings/view`,
    searchAsset: `${ROOT_URL}/api/asset/search`,
};

