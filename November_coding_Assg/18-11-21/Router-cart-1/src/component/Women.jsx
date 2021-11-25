import {women} from './women.json'
import { Product } from './Product'
import './style/parent.css'

export const Women = () => {
    return (
        <div className="parent" >
            {
                women.map(e =>
                    <div >
                        <Product img={e.img} product_name={e.product_name} price={e.price} />
                    </div>
                    )
            }
        </div>
    )
}
