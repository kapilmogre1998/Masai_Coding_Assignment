import {men} from './men.json'
import { Product } from './Product'
import './style/parent.css'

export const Men = () => {
    return (
        <div className="parent" >
            {
                men.map(e =>
                    <div >
                        <Product img={e.img} product_name={e.product_name} price={e.price} />
                    </div>
                    )
            }
        </div>
    )
}
