import { createStore,combineReducers } from "redux"
import { isAuth } from "./login/reducer"
import { todoList } from "./todo/reducer"

const rootReducer =  combineReducers({
    auth: isAuth,
    todos : todoList
})
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())