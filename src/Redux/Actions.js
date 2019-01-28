import { getMemesApi, createMemesApi, createMemeApi } from "./Apis";

export const getMemesAction = () => {
    getMemesApi();
}

export const createMemeAction = () => {
    createMemeApi();
}