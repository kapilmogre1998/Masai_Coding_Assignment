const sum = (a,b)=>{
    return a + b;
}

const password = ()=>{
    return "Kapil@123";
}

const timer = (duration)=>{
    milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    return `${hours}:${minutes}:${seconds}`;
}

module.exports = {sum,timer,password};