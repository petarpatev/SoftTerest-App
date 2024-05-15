import { register } from '../user.js';

const page = document.getElementById('register');

let ctx;

export function showRegisterPage(context) {
    ctx = context;
    context.showPage(page);
}

const registerForm = page.querySelector('form');
registerForm.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    await register(email, password);
    ctx.updateNav();
    ctx.navigateTo('/');
}

// then/catch syntax
// function onSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const email = formData.get('email');
//     const password = formData.get('password');

//     register(email, password, ctx);
// }