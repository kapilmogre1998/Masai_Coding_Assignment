import { useEffect,useState } from "react"
import { useParams } from "react-router"

export const ProductDetails = ()=>{
    const {id} = useParams();
    const [details, setDetails] = useState([])
    
    useEffect(()=>{
        ProductDetails();
    },[])

    async function ProductDetails(){
        const res = await fetch(`http://localhost:3000/Products/${id}`)
        const data = await res.json();
        setDetails([data])
    }
    return (
        <div>
            <div className="all-products" >
                {
                    details.map(e =>
                        <div key={e.id}>
                            <img src={e.img} alt="img" />
                            <p>Product :- {e.name} </p>
                            <p>Price - {e.price} </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}