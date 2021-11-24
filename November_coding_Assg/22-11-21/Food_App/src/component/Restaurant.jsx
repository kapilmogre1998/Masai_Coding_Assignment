import { useState,useContext,useEffect } from 'react'
import './style/restaurant.css'
import axios from 'axios';
require('dotenv').config()

export const Restaurant = () => {
    const [item,setItem] = useState("");
    const [data,setData] = useState([])

    console.log(process.env.REACT_APP_BASE_URL)

    useEffect(() => {
        fetchData();
    }, [item])

    const fetchData = ()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then(({data:{meals}}) => setData(meals))
        .catch(err => console.log(err));
    }

    const handleChange = async(e)=>{
        setItem(e.target.value);
    }

    return (
        <div className="restaurant">
            <input type="text" placeholder="Search food" value={item}  onInput={handleChange}/>   
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1em",marginTop:"1rem",rowGap:"20px"}}>
            {
                data === undefined ? "":
                data.map(e =>
                    <div>
                        <img src={e.strMealThumb} alt="" style={{width:"200px",borderRadius:"10px"}} />
                        <p>{e.strMeal}</p>
                    </div>
                    ) 
            }
            </div>
        </div>
    )
}
