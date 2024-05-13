const homePage = document.getElementById('home');
const registerPage = document.getElementById('register');
const loginPage = document.getElementById('login');
const catalogPage = document.getElementById('dashboard-holder');
const detailsPage = document.getElementById('details');
const createPage = document.getElementById('create');

const pageWrapper = document.getElementById('page-wrapper');

const allPages = document.getElementById('page-container');
allPages.remove();

const pages = {
    '/': homePage,
    '/register': registerPage,
    '/login': loginPage,
    '/catalog': catalogPage,
    '/details': detailsPage,
    '/create': createPage
}

function showPage(path) {
    const page = pages[path];
    pageWrapper.replaceChildren(page);
}
window.showPage = showPage;