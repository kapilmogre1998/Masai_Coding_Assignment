import { useEffect, useState } from "react";
import './style/allProducts.css'
import { NavLink } from "react-router-dom"

export const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const res = await fetch("http://localhost:3000/Products");
        const data = await res.json();
        setProducts([...data])
    }

    return (
        <>
            <h1>
                All Products
            </h1>

            <div className="all-products" >
                {
                    products.map(e =>
                        <div key={e.id}>
                            <p>Product :- {e.name} </p>
                            <NavLink to={'/details/' + e.id} >
                            Details
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </>
    )
}