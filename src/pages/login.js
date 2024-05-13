import { login } from '../user.js'

const page = document.getElementById('login');

let ctx;

export function showLoginPage(context) {
    context.showPage(page);
    ctx = context;
}

const loginForm = page.querySelector('form');
loginForm.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    await login(email, password);
    ctx.updateNav();
    ctx.navigateTo('/');
}