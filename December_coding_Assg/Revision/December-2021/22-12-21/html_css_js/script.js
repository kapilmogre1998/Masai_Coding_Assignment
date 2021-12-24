
let container = document.getElementById('container');
let searchBox = document.getElementById('navbar');

let inputDiv = document.createElement('div');
let input = document.createElement('input');
input.addEventListener('input',()=>{searchInputData()});
let loginDiv = document.getElementById('loginDiv');
let login = document.createElement('a')
login.innerHTML = "Login"
let signup = document.createElement('a')
signup.innerHTML = "Siginup";
let span = document.createElement('span');
span.append(login,signup)
inputDiv.append(input)
inputDiv.setAttribute('id','inputDiv')
loginDiv.append(span)
searchBox.append(inputDiv,loginDiv)

let page = 1;
let SearchData = ""; 
let page_size = 1;

async function loadImg(){
    
    let imgContainer = document.getElementById('imgContainer');
    console.log("search",SearchData)

    let data = await fetch(`https://pixabay.com/api/?key=24078575-66f8c6f6585bc5f4accce18d5&page=${page}&page_size=${page_size}&q=${SearchData}`);
    let {hits} = await data.json();
    hits.map(({largeImageURL,tags})=>{
        let imgBox = document.createElement('div');
        let img = document.createElement('img');
        img.src = largeImageURL;
        img.width = 220;
        img.height= 220;
        let name = document.createElement('p');
        name.innerHTML = tags;
        imgBox.append(img,name);
        imgContainer.append(imgBox);
    }) 
    container.insertAdjacentElement('beforeend',imgContainer)
}

const addData = ()=>{
    setTimeout(()=>{
        page++;
        page_size++;
        loadImg();
    },300)
}

//Infinite Scroll Bar
document.addEventListener('scroll',()=>{
    const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
    if(scrollTop + clientHeight >= scrollHeight){
        addData();
    }
})

let timer = "";
const searchInputData = ()=>{
    if(timer)
    clearTimeout(timer);

    if(input.value.length <= 3)
    return null;

    timer = setTimeout(()=>{
        document.getElementById('imgContainer').innerHTML = "";
        SearchData = input.value
        loadImg(input.value)
    },500)
}

function backtotop(){
    setTimeout(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },200)
}

loadImg()