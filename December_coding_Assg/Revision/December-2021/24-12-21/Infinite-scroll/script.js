let backToTop = document.getElementById('back-to-top')
backToTop.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
let box = document.getElementById("container__box");

let i = 1;
let total_data = 10;

function infiniteScroll(){
    while(i <= total_data){
        let box_div = document.createElement('div')
        box_div.setAttribute("class","box_div")
        let box_title1 = document.createElement("span");
        box_title1.innerHTML = i++;
        box_title1.setAttribute("class","box_div--number")
        let box_title2 = document.createElement("h3");
        box_title2.setAttribute("class","box_div--title")
        let box_title3 = document.createElement('p');
        box_title3.setAttribute("class","box_div--title")
        box_title2.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, explicabo!";
        box_title3.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque inventore ipsa tenetur est nobis eaque ab hic quis aliquid illo consequatur aspernatur in, quo quae dolore laborum distinctio voluptates impedit!"
        box_div.append(box_title1,box_title2,box_title3)
        box.append(box_div)
    }
}


document.addEventListener('scroll',()=>{
    let {scrollHeight,scrollTop,clientHeight} = document.documentElement
    if(scrollTop + clientHeight >= scrollHeight){
        total_data += 10;
        infiniteScroll();
        console.log(i,total_data)
    }
})


infiniteScroll();