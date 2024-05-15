import { createIdea } from "../data.js";

const page = document.getElementById('create');

let ctx;

export function showCreatePage(context) {
    ctx = context;
    context.showPage(page);
}

const createIdeaForm = page.querySelector('form');
createIdeaForm.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('imageURL');

    await createIdea({ title, description, img });
    ctx.updateNav();
    ctx.navigateTo('/catalog');
}

// then/catch syntax
// function onSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const title = formData.get('title');
//     const description = formData.get('description');
//     const img = formData.get('imageURL');

//     createIdea({ title, description, img })
//         .then(newIdea => {
//             ctx.updateNav();
//             ctx.navigateTo('/catalog');
//         })

// }