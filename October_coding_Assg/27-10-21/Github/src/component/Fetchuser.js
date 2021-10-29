import axios from "axios";

async function Fetchuser(query,page){
    console.log(query)
    if(!query)
    return  Promise.reject("query should be provided");

    return await axios.get('http://api.github.com/search/users',{
        params: {
            q:query
        }
    })
}

export {Fetchuser}