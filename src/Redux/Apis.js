import axios from 'axios'
import {store} from './Store'

const API = 'https://api.imgflip.com/';

export const getMemesApi = () =>{
    axios.get(`${API}get_memes`)
    .then(res => {
        store.dispatch({type: 'GET', payload: res.data})
        store.dispatch({type: 'FIRST_MEME', payload: res.data.data.memes[0]})
    })
    .catch(error => console.log('Err ' + error))
} 

export const createMemeApi = () =>{
    const a = {
            template_id: '87743020',
            username: 'ShashidharMayannavar',
            password: "shashidhar@420",
            text0: "One does not simply",
            text1: "One does not simply"
            
    }
    axios.post(`${API}caption_image`, a)
    .then(res => {
        console.log('Created ' + JSON.stringify(res));
    })
    .catch(error => console.log('Err ' + error))
} 
