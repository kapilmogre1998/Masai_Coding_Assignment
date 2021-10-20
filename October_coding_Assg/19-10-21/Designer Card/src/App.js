import logo from './logo.svg';
import './App.css';
import Cart from './component/Script/Cart.js';


function App() {
  return (
    <div className="container-fluid" id="menu">
      <div className="row">
        <div className="col">
        <Cart prev_price="$29.90" new_price="$23.90"  degree="58.3 °c" pfc="P/F/C: 12/10/31" cal="265 cal" food_detail="Pepperoni is a meat mixture of beef and pork that has been cured and seasoned with paprika and chili powder." food_item="Pepperoni Pizza" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_Bvf-vOzZTG2FJ2LNx44vyxNhumuxkl8rg&usqp=CAU"/>
        </div>
        <div className="col">
        <Cart prev_price="$29.90" new_price="$23.90"  degree="58.3 °c" pfc="P/F/C: 12/10/31" cal="265 cal" food_detail="Tortellini are ring-shaped pasta originally from the Italian region of Emilia. Traditionally they are stuffed with a mix of meat" food_item="Tortellini" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtkNAZ4wz2ep96KyuG-Ucqp2ttxL8ooo1RQ&usqp=CAU"/>
        </div>
        <div className="col">
        <Cart prev_price="$29.90" new_price="$23.90"  degree="58.3 °c" pfc="P/F/C: 12/10/31" cal="265 cal" food_detail="This one layer strawberry shortcake cake combines vanilla cake, fresh juicy strawberries, and homemade whipped cream" food_item="Strawberry Cake" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8StKSjyfhPzw6L_xUzw1aRLIdJCRIB4_RTw&usqp=CAU"/>

        </div>

      </div>
    </div>
  );
}

export default App;
