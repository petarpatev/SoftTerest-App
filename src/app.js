import { showHomePage } from '../src/pages/home.js';
import { showRegisterPage } from '../src/pages/register.js';
import { showLoginPage } from '../src/pages/login.js';
import { showCatalogPage } from '../src/pages/catalog.js';
import { showDetailsPage } from '../src/pages/details.js';
import { showCreatePage } from '../src/pages/create.js';

import { initialize } from './router.js';


const pages = {
    '/': showHomePage,
    '/register': showRegisterPage,
    '/login': showLoginPage,
    '/catalog': showCatalogPage,
    '/details': showDetailsPage,
    '/create': showCreatePage,
}

function removePages() {
    const allPages = document.getElementById('page-container');
    allPages.remove();
}

removePages();
const router = initialize(pages);
router.updateNav();
router.navigateTo('/');