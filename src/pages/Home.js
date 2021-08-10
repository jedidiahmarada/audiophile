import React from 'react';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ImageBanner from '../assets/home/image-banner.png'

const Home = () => {
  const dataCategory = [
    {
      title: "HOME",
      path: "/home"
    },
    {
      title: "HEADPHONE",
      path: "/category/headphone"
    },
    {
      title: "SPEAKER",
      path: "/category/speaker"
    },
    {
      title: "EARPHONE",
      path: "/category/earphone"
    },
  ]

  const dataBanner = {
    productid: "123",
    productname: "XX99 Mark II Headphones",
    productsummary: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    productimage: ImageBanner
  }

  const dataFooter = {
    category: dataCategory,
    description: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
  }
  return (
      <>
      <Header data={dataCategory}/>
      <Banner banner={dataBanner} />
      <Footer data={dataFooter}/>
      </>
  )
};

export default Home;