import './style/page.css'

export const Page = () => {

  const handleChangeColor = (e) => {
    let {checked} = e.target;
    if(checked == true){
      document.body.style.background = "black"
      document.body.style.color = "white"
    }
    else{
      document.body.style.background = "white";
      document.body.style.color = "black"
    }
  }

  return (
    <div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleChangeColor} />
        <label className="form-check-label" for="flexSwitchCheckDefault" style={{textAlign:"start"}}>Dark Mode</label>
      </div>
      <h1>Paragraph</h1>
      <h2>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Suscipit hic sapiente voluptas fugit reiciendis similique voluptatum maxime officia dignissimos minima.
      </h2>
    </div>
  );
}
