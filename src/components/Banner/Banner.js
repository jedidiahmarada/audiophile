import React from 'react';
import {
  BannerContainer
} from './BannerElement';


const Banner = ({banner}) => {
  return (
    <>
      <BannerContainer> 
          <div className="container-banner-desc">
              <h2 className="text-banner-new-product">New Product</h2>
              <h1 className="text-banner-product">{banner.productname}</h1>
              <p className="text-banner-product-summary">{banner.productsummary}</p>
              <p className="button-banner-see-product">See Product</p>
          </div>
          <div className="continer-banner-image">
            <img className="image-banner" src={banner.productimage} alt="hero"/>
          </div>
      </BannerContainer>
    </>
  );
};

export default Banner;