import { ADD_TODO, DEL_TODO, EDIT_TODO, TOGGLE_TODO } from './actionTypes'


export const addtodo = (payload)=>{
    // console.log(payload)
    return ({type: ADD_TODO,payload});
}

export const deltodo = (payload)=>{
    return ({type: DEL_TODO,payload});
}

export const edittodo = (payload)=>{
    return ({type: EDIT_TODO,payload})
}

export const toggletodo = (payload) =>{
    console.log(payload)
    return ({type: TOGGLE_TODO,payload})
}
