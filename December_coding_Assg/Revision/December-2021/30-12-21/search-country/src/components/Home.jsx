import './style/home.css'
import axios from 'axios'
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

let timer;
export const Home = () => {
    const [allCountriesData, setAllCountriesData] = useState();
    const [searchCountry, setSearchCountry] = useState();
    const [suggestion,setSuggestion] = useState(undefined);
    const [filter,setFilter] = useState("");

    const fetchData = () => {
        axios.get(`https://restcountries.com/v2/all`)
        .then(({ data }) => setAllCountriesData(data))
        .catch(err => console.log("error while fetching data"))
    }

    const filterContinent = ()=>{
        axios.get(`https://restcountries.com/v2/continent/europe`)
        .then(({ data }) => console.log(data))
        .catch(err => console.log("error while fetching data"))
    }

    const handleSearch = (e)=>{
        setSearchCountry(e.target.value)
        if(timer)
        clearTimeout(timer);

        timer = setTimeout(()=>{
            if(searchCountry){
                axios.get(`https://restcountries.com/v2/name/${searchCountry}`)
                .then(({data})=> setSuggestion(data))
                .catch((err)=>console.log("please try after sometime"))
            }
            else
            setSearchCountry(undefined)
        },800)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleChange = ()=>{
        filterContinent() 
    }

    return (
        <>
            <Navbar />
            <div className="display-countries-contianer">
                <div className='input-container'>
                    <div className='input-filter-container' >
                        <div className='input-text-box'>
                        <i className="fas fa-search search-icon"></i>
                        <input type="text" placeholder='Search for a country' onChange={(e)=> handleSearch(e)} />
                        </div>
                        {/* <select className='filter-box' onChange={handleChange}>
                            <option value="" disabled>Filter</option>
                            <option value="Eroupe">Eroupe</option>
                            <option value="Africa">Africa</option>
                            <option value="Asia">Asia</option>
                        </select> */}
                    </div>
                </div>
                  <div className='search-suggestion-container' >
                    {
                        suggestion === undefined ? "" : suggestion.length && suggestion?.map(({name,flags:{png}},id)=>
                        <Link key={id} to={`/details/${name}`} style={{textDecoration:"none"}}> 
                        <div  className='show-search-suggestion-box'>
                            <div>{name}</div>
                            <img src={png} alt="" />
                        </div>
                        </Link>
                        )
                    }
                </div>
                <div className='container-fluid countries-content'>
                    <div className='row '>
                        {
                            allCountriesData?.map(({ name, capital, region, flags: { png } }, id) =>
                                <div key={id} className="col-3 mt-0">
                                    <Link to={`/details/${name}`} style={{ textDecoration: 'none' }}>
                                        <div className='countries-content-box' >
                                            <img src={png} className="img-fluid" alt="..." />
                                            <div className='country-name'>
                                                <h5>{name}</h5>
                                                <p><strong>Capital: </strong>{capital}</p>
                                                <p><strong>Region: </strong>{region}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
