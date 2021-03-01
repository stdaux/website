const ROOT_URL=process.env.FERMAT_ROOT_URL;

export const AlertsUrls = {
    listAlerts: `${ROOT_URL}/api/alerts/list`,
    addAlerts: `${ROOT_URL}/api/report/alerts/add`,
    deleteAlerts: `${ROOT_URL}/api/report/alerts/delete`,
    viewAlerts: `${ROOT_URL}/api/alerts/view`,
    editAlerts: `${ROOT_URL}/api/report/alerts/edit`,

    listEvents: `${ROOT_URL}/api/report/events/list`,
    addEvents: `${ROOT_URL}/api/report/events/add`,
    deleteEvents: `${ROOT_URL}/api/report/events/delete`,
    viewEvents: `${ROOT_URL}/api/report/events/view`,
    editEvents: `${ROOT_URL}/api/report/events/edit`,

    listNotifications: `${ROOT_URL}/api/report/notifications/list`,
    addNotifications: `${ROOT_URL}/api/report/notifications/add`,
    deleteNotifications: `${ROOT_URL}/api/report/notifications/delete`,
    viewNotifications: `${ROOT_URL}/api/report/notifications/view`,
    editNotifications: `${ROOT_URL}/api/report/notifications/edit`,

    listActions: `${ROOT_URL}/api/report/actions/list`,
    addActions: `${ROOT_URL}/api/report/actions/add`,
    deleteActions: `${ROOT_URL}/api/report/actions/delete`,
    viewActions: `${ROOT_URL}/api/report/actions/view`,
    editActions: `${ROOT_URL}/api/report/actions/edit`,
    
    listAlertSettngs: `${ROOT_URL}/api/alerts/settings/list`,
    viewAlertSettngs: `${ROOT_URL}/api/alerts/settings/view`,

    searchAlerts: `${ROOT_URL}/api/alerts/search`,
};

