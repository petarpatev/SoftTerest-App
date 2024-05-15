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





// then/catch syntax
// export function login(email, password, ctx) {
//     const userCredentials = { email, password };
//     post(userPathnames.login, userCredentials)
//         .then(user => {
//             localStorage.setItem('user', JSON.stringify(user));
//             ctx.updateNav();
//             ctx.navigateTo('/');
//         })
// }

// export function register(email, password, ctx) {
//     const userCredentials = { email, password };
//     post(userPathnames.register, userCredentials)
//         .then(user => {
//             localStorage.setItem('user', JSON.stringify(user));
//             ctx.updateNav();
//             ctx.navigateTo('/');
//         })
// }

// export function logout() {
//     get(userPathnames.logout);
//     localStorage.removeItem('user');
// }