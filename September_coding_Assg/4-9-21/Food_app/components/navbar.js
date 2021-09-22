


function navbar(){
    return `<div id="navbar">
    <a href="page1.html">Home</a>
    <a href="page2_ReceipeOfTheday.html">Receipe of the day</a>
    <a href="page3_latestReceipe.html">Show latest Receipe</a>
    
    <div id="box">
        <input type="text" id="input" placeholder="Search " oninput="debouncing(main,1000)" />
        
    </div>   
</div> 
`
}


export default navbar;