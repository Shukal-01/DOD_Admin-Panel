export const baseUrl = import.meta.env.VITE_APP_BACKEND_1;

const url = {
    login: `${baseUrl}/auth/admin/login`,
    adminVerifyToken: `${baseUrl}/auth/verify-token`,
}

export default url;