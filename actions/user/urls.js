const ROOT_URL=process.env.FERMAT_ROOT_URL;

export const AuthUrls = {
    loginUser: `${ROOT_URL}/api/user/login/`,
    logoutUser: `${ROOT_URL}/api/user/logout/`,
    registerUser: `${ROOT_URL}/api/user/register/`,
    profileUser: `${ROOT_URL}/api/user/profile/`,
    viewUser: `${ROOT_URL}/api/user/view/`,
    passwordChangeUser: `${ROOT_URL}/api/user/password/change/`,
    passwordResetUser: `${ROOT_URL}/api/user/password/reset/`,
    passwordResetConfirmUser: `${ROOT_URL}/api/user/password/reset/confirm/`,
    activateUser: `${ROOT_URL}/api/user/activate/`,
};
