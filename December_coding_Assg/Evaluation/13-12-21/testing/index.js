

const convert = (amount,expectedOutputformat)=>{
    if(expectedOutputformat === "kb"){
        let value = (amount/1000).toFixed(3)
        console.log("kb",value)
        return parseFloat(value);
    }
    if(expectedOutputformat === "mb"){
        let value = (amount/1000000).toFixed(3);
        console.log("mb",value)
        return parseFloat(value);
    }
}

module.exports =  {convert}