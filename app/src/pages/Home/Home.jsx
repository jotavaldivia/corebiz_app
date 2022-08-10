import {useState, useEffect} from "react";
import Header from "../../components/layout/Header/Header";
import Search from "../../components/Search/Search";
import Silder from "../../components/Slider/Slider";
import SilderProducts from "../../components/Slider/SliderProducts";

import style from "./Home.module.css";

//import fetch

import { getAllProducts } from "../../services/products";

//import images
import Banner1 from '../../assets/images/banner1.webp'
import Banner2 from '../../assets/images/banner2.webp'
import Banner3 from '../../assets/images/banner3.webp'
import Banner4 from '../../assets/images/banner4.webp'

// import Product1 from '../../assets/images/product1.png'
// import Product2 from '../../assets/images/product2.png'
// import Product3 from '../../assets/images/product3.png'
// import Product4 from '../../assets/images/product4.png'

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts(setAllProducts, setLoading);
  }, []);

  return (
    <>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.search}>
        <Search />
      </div>
      <div className={style.slider}>
        <Silder images={[Banner1,Banner2,Banner3,Banner4]} />
      </div>
      <div className={style.slider_product}>
        <h2 className={style.best_sellers}>Más Vendidos</h2>
        {loading && <h3>Cargando...</h3>}
         <SilderProducts products={allProducts} /> 
        {
          console.log(allProducts)
        }
      </div>
    </>
  );
};

export default Home;
