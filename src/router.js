export function initialize(linksDict) {
    const pageWrapper = document.getElementById('page-wrapper');

    const navigation = document.getElementById('navigation');
    navigation.addEventListener('click', onNavigate);

    const context = {
        showPage,
        navigateTo
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

    function navigateTo(path) {
        let handler = linksDict[path];

        if (typeof handler == 'function') {
            handler(context);
        }
    }
}