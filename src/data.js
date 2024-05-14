import { get, post } from './api.js';

const endPoints = {
    'getAllIdeas': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'createIdea': '/data/ideas',
}

export async function getAllIdeas() {
    return get(endPoints.getAllIdeas);
}

export async function createIdea(ideaData) {
    return post(endPoints.createIdea, ideaData);
}