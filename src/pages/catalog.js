import { getAllIdeas, getIdeaById } from "../data.js";

const page = document.getElementById('dashboard-holder');
page.addEventListener('click', onSelectIdea);

let ctx;

export async function showCatalogPage(context) {
    ctx = context;
    context.showPage(page);
    const ideas = await getAllIdeas();
    if (ideas.length == 0) {
        page.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';
    } else {
        page.replaceChildren(...ideas.map(createIdea));
    }
}

function createIdea(idea) {
    const ideaWrapper = document.createElement('div');
    ideaWrapper.classList.add('card', 'overflow-hidden', 'current-card', 'details');
    ideaWrapper.style.width = '20rem';
    ideaWrapper.style.height = '18rem';
    ideaWrapper.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src=${idea.img} alt="Card image cap">
    <a data-id=${idea._id} class="btn" href="/details">Details</a>`;
    return ideaWrapper;
}

function onSelectIdea(e) {
    e.preventDefault();
    if(e.target.tagName == 'A') {
        const id = e.target.dataset.id;
        if(id) {
            ctx.navigateTo('/details', id);
        }
    }
}