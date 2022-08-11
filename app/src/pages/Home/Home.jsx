import { useState, useEffect } from "react";
import Header from "../../components/layout/Header/Header";
import Search from "../../components/Search/Search";
import Silder from "../../components/Slider/Slider";
import SilderProducts from "../../components/Slider/SliderProducts";

import style from "./Home.module.css";

//import fetch

import { getAllProducts } from "../../services/products";

//import images
import Banner1 from "../../assets/images/banner1.webp";
import Banner2 from "../../assets/images/banner2.webp";
import Banner3 from "../../assets/images/banner3.webp";
import Banner4 from "../../assets/images/banner4.webp";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) ?? [0]
  );

  useEffect(() => {
    setLoading(true);
    getAllProducts(setAllProducts, setLoading);
  }, []);

  const addProduct = (value, cant) => {


  if(cart[0] === null){
    setCart([{ ...value }]);
    localStorage.setItem("cart", JSON.stringify([{ ...value }]));
    console.log("nuevo valor",...value)
    return
  }
  console.log("anterior",...cart)
console.log("nuevo valor",value)
const resp = cart.some((cart) => cart.productId === value.productId)
  
  if(resp){
    alert("el producto ya existe")
    return
  }
 let newValue = [...cart,value]
 console.log("valor fucionado", newValue )
  setCart(newValue);
   localStorage.setItem("cart", JSON.stringify(newValue));

//     const newArray = cart.filter((cart) => {
//       return cart.productId != value.productId;
//     });
//     if (newArray.length === 0) {
//       setCart([{ ...value }]);
//       localStorage.setItem("cart", JSON.stringify([{ ...value }]));
//       return;
//     }
//  alert("aca")
//  console.log(...newArray)
//     setCart( [{...newArray, ...value }]);
//     localStorage.setItem("cart", JSON.stringify( {...newArray, ...value }));
//      console.log(cart);
   };

  return (
    <>
      <div className={style.header}>
        <Header countCart={cart} />
      </div>
      <div className={style.search}>
        <Search />
      </div>
      <div className={style.slider}>
        <Silder images={[Banner1, Banner2, Banner3, Banner4]} />
      </div>
      <div className={style.slider_product}>
        <h2 className={style.best_sellers}>Más Vendidos</h2>
        {loading && <h3>Cargando...</h3>}
        <SilderProducts products={allProducts} addProduct={addProduct} />
      </div>
    </>
  );
};

export default Home;
