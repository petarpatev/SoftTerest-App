import { getIdeaById } from "../data.js";

const page = document.getElementById('details');

export async function showDetailsPage(context, id) {
    const idea = await getIdeaById(id);
    page.replaceChildren(createIdeaDetailsCard(idea));
    context.showPage(page);
}

function createIdeaDetailsCard(idea) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    cardWrapper.innerHTML = `
    <img class="det-img" src=${idea.img} />
            <div class="desc">
                <h2 class="display-5">${idea.title}</h2>
                <p class="infoType">Description:</p>
                <p class="idea-description">${idea.description}</p>
            </div>
            `

    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user._id == idea._ownerId) {
        const delBtn = document.createElement('div');
        delBtn.classList.add('text-center');
        delBtn.innerHTML = `<a data-id=${idea._id} class="btn detb" href="">Delete</a>`;
        cardWrapper.appendChild(delBtn);
    }

    return cardWrapper;
}