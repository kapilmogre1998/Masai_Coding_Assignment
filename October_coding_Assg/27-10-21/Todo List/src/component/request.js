import axios from 'axios'

export const todos = axios.create({
    baseURL : "http://localhost:4500/"
})

//Interceptor
// todos.interceptors.request.use((config)=>{
//     // console.log("inside interceptor",config)
// },{
//     function ()=>{
        
//     }
// })