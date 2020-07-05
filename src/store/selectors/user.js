export const getIsAuth = ({ user }) => !!user.token;
export const getToken = ({ user }) => user.token;
export const getIsSending = ({ user }) => user.request.isActive;
export const getIsSuccess = ({ user }) => user.request.isSuccess;
export const getErrorCode = ({ user }) => user.request.error;