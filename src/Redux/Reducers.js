
export const getMemesReducer = (state = {}, action) => {
    if(action.type === 'GET'){
        return action.payload;
    }else{
        return state;
    }
}

export const createMemeReducer = (state = {}, action) => {
    if(action.type === 'CREATE'){
        return action.payload;
    }else{
        return state;
    }
}

export const FirstMemeReducer = (state = {url: undefined}, action) => {
    if(action.type === 'FIRST_MEME'){
        return action.payload;
    }else{
        return state;
    }
}