import { useState, useEffect } from 'react';
//import components
import Header from '../../components/layout/Header/Header';
import Search from '../../components/Search/Search';
import Silder from '../../components/Slider/Slider';
import SilderProducts from '../../components/Slider/SliderProducts';
import NewsLetter from '../../components/Newsletter/NewsLetter'
import Footer from '../../components/layout/Footer/Footer';
//import styles
import style from './Home.module.css';
//import fetch
import { getAllProducts } from '../../services/products';
//import images
import Banner1 from '../../assets/images/banner1.webp';
import Banner2 from '../../assets/images/banner2.webp';
import Banner3 from '../../assets/images/banner3.webp';
import Banner4 from '../../assets/images/banner4.webp';

const Home = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState(
        JSON.parse(window.localStorage.getItem('cart')) ?? [0]
    );
 

    useEffect(() => {
        setLoading(true);
        getAllProducts(setAllProducts, setLoading);
    }, []);

    const addProduct = (value, cant) => {
        if (cart[0] === null) {
            setCart([{ ...value,"quantity":cant }]);
            localStorage.setItem('cart', JSON.stringify([{ ...value,"quantity":cant }]));
            console.log('nuevo valor', ...value);
            alert("producto agregado al carrito")
            return;
        }
        // console.log('anterior', ...cart);
        // console.log('nuevo valor', value);
        const resp = cart.find((cart) => {
            if(cart.productId === value.productId){
                return cart.quantity = cart.quantity +cant
            }
        });
        if (resp) {
        //    console.log(resp)
           const newCart = cart.map((cart) => {
            if(cart.productId === value.productId){
                return  resp
            }else{
                return cart
            }
        });
        console.table(newCart)
        localStorage.setItem('cart', JSON.stringify(newCart));
        alert("producto agregado al carrito")
            return;
        }
        let newValue = [...cart, {...value,"quantity":cant}];
        console.log('valor fucionado', newValue);
        setCart(newValue);
        localStorage.setItem('cart', JSON.stringify(newValue));
        alert("producto agregado al carrito")
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
                <h2 className={style.best_sellers}>M??s Vendidos</h2>
                {loading && <h3>Cargando...</h3>}
                <SilderProducts products={allProducts} addProduct={addProduct} />
            </div>
            <div>
            <NewsLetter/>
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </>
    );
};

export default Home;
