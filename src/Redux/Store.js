import {createStore, combineReducers} from 'redux'
import { getMemesReducer, FirstMemeReducer } from './Reducers';

const reducers = combineReducers({memes: getMemesReducer, firstMeme: FirstMemeReducer})

export const store = createStore(reducers);