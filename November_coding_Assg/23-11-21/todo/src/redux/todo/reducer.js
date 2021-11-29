import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DEL_TODO, EDIT_TODO, TOGGLE_TODO } from "./actionTypes"


const initState = {
    todos: []
}

// If state is empty it will take initState otherwise it will not take
export const todoList = (state = initState, { type, payload }) => {
    // console.log(payload)
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            };
        case DEL_TODO:
            return {
                ...state,
                todos: state.todos.filter(data => data.id !== payload)
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(elem => {
                    if (elem.id === payload) {
                        elem.status = !elem.status
                        console.log(elem)
                        return elem
                    }
                    return elem
                })
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(elem => {
                    if (elem.id === payload.todoid) {
                        elem.title = payload.editText
                        console.log(elem)
                        return elem;
                    }
                    return elem;
                })
            };
        // case ADD_TODO_LOADING:
        //     return {
        //         ...state,
        //         todos: {
        //             ...state.todos,
        //            loading: true
        //         }
        //     }
        // case ADD_TODO_SUCCESS : 
        //     return {
        //         ...state.todos,
        //         todos: {
        //             ...state.todos,
        //            data : [...state.todos.data,payload]
        //         }
        //     }
        // case ADD_TODO_ERROR:
        //     return {
        //         ...state.todos,
        //         todos : {
        //             ...state.todos,
        //             error : true
        //         }
        //     }
        default:
            return state;
    }
};
