import { types } from "../types/types";

export const loginAuth = () =>({type: types.authLogin})

export const logoutAuth = () => ({type: types.authLogout})