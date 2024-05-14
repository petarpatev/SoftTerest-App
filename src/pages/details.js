import { getIdeaById, deleteIdeaById } from "../data.js";

const page = document.getElementById('details');

let ctx;

export async function showDetailsPage(context, id) {
    ctx = context;
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
    let isOwner = user && user._id == idea._ownerId;

    if (isOwner) {
        const delBtn = document.createElement('div');
        delBtn.classList.add('text-center');
        delBtn.innerHTML = `<a data-id=${idea._id} class="btn detb" href="">Delete</a>`;
        delBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await deleteIdeaById(idea._id);
            ctx.navigateTo('/catalog');
        })
        cardWrapper.appendChild(delBtn);
    }

    return cardWrapper;
}