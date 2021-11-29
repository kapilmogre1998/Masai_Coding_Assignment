

export const loadData = (key)=>{
    try{
        let data = localStorage.getItem(key);
        data = JSON.parse(data)
        return data;
    }
    catch(err){
        return err
    }
}

export const saveData = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}