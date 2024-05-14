export function initialize(linksDict) {
    const pageWrapper = document.getElementById('page-wrapper');

    const navigation = document.getElementById('navigation');
    navigation.addEventListener('click', onNavigate);

    const context = {
        showPage,
        navigateTo,
        updateNav
    }

    return context;

    function showPage(page) {
        pageWrapper.replaceChildren(page);
    }

    function onNavigate(e) {

        e.preventDefault();

        let target = e.target;
        if (target.tagName == "IMG") {
            target = e.target.parentNode;
        }

        if (target.tagName == "A") {
            let url = new URL(target.href);
            navigateTo(url.pathname);
        }
    }

    function navigateTo(path, ...params) {
        let handler = linksDict[path];

        if (typeof handler == 'function') {
            handler(context, ...params);
        }
    }

    function updateNav() {
        const userElements = navigation.querySelectorAll('.user');
        const guestElements = navigation.querySelectorAll('.guest');
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            userElements.forEach(element => element.style.display = 'block');
            guestElements.forEach(element => element.style.display = 'none');
        } else {
            userElements.forEach(element => element.style.display = 'none');
            guestElements.forEach(element => element.style.display = 'block');
        }
    }
}