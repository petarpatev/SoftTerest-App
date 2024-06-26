const baseUrl = 'http://localhost:3030';

async function request(method, url, data) {

    const options = {
        method,
        headers: { 'Content-Type': 'application/json' }
    }

    if (data != undefined) {
        options.body = JSON.stringify(data);
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(baseUrl + url, options);

        if (response.ok != true) {
            if (response.status == 403) {
                localStorage.removeItem('user');
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}


// then/catch syntax

// function request(method, url, data) {
//     const options = {
//         method,
//         headers: { 'Content-Type': 'application/json' }
//     }

//     if (data != undefined) { options.body = JSON.stringify(data) };

//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user) { options.headers['X-Authorization'] = user.accessToken };

//     return fetch(baseUrl + url, options)
//         .then(response => {
//             if (response.ok != true) {
//                 if (response.status == 403) {
//                     localStorage.removeItem('user');
//                 }
//                 const error = response.json();
//                 throw new Error(error.message);
//             }
//             if (response.status == 204) {
//                 return response;
//             } else {
//                 return response.json();
//             }
//         })
//         .catch(err => {
//             alert(err.message);
//             throw err;
//         })
// }

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del
}