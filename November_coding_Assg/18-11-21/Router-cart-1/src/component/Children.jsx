import {children} from './children.json'
import { Product } from './Product'
import './style/parent.css'

export const Children = () => {
    return (
        <div className="parent" >
            {
                children.map(e =>
                    <div>
                        <Product img={e.img} product_name={e.product_name} price={e.price} />
                    </div>
                    )
            }
        </div>
    )
}
