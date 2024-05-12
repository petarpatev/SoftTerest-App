import { get, post } from "./api.js";

const userPathnames = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
};

export async function login(email, password) {
    const userCredentials = { email, password };
    const user = await post(userPathnames.login, userCredentials);
    localStorage.setItem('user', JSON.stringify(user));
}

export async function register(email, password) {
    const userCredentials = { email, password };
    const user = await post(userPathnames.register, userCredentials);
    localStorage.setItem('user', JSON.stringify(user));
}

export async function logout() {
    get(userPathnames.logout);
    localStorage.removeItem('user');
}