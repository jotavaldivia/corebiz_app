import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//components
import Stars from "../Stars/Stars";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderProducts.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SliderProducts = ({ products,addProduct }) => {


  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          800: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product,index) => {
          return (
            <div  >
              <SwiperSlide key={index}>
                <div>
                  <img src={product.imageUrl} alt="" />
                  <p className="product_name">{product.productName}</p>
                  <Stars stars={product.stars} />
                  {product.listPrice && (
                    <p className="product_lastPrice">
                      de $ {product.listPrice}
                    </p>
                  )}
                  <p className="product_price">por $ {product.price}</p>
                  <a
                    onClick={() => {
                      addProduct(product,1);
                    }}
                    className="product_buy"
                  >
                    COMPRAR
                  </a>
                </div>
              </SwiperSlide>
              </div>
          
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderProducts;
