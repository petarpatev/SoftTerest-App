import { showHomePage } from '../src/pages/home.js';
import { showRegisterPage } from '../src/pages/register.js';
import { showLoginPage } from '../src/pages/login.js';
import { showCatalogPage } from '../src/pages/catalog.js';
import { showDetailsPage } from '../src/pages/details.js';
import { showCreatePage } from '../src/pages/create.js';

const pageWrapper = document.getElementById('page-wrapper');

const allPages = document.getElementById('page-container');
allPages.remove();

const pages = {
    '/': showHomePage,
    '/register': showRegisterPage,
    '/login': showLoginPage,
    '/catalog': showCatalogPage,
    '/details': showDetailsPage,
    '/create': showCreatePage
}

const context = {
    showPage,
}

function showPage(page) {
    pageWrapper.replaceChildren(page);
}

window.show = () => {
    showCatalogPage(context);
}