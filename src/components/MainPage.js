import React, { useEffect, useState } from "react";
import "./MainPage.css";
import axios from "axios";
const MainPage = () => {
  let [products, setProducts] = React.useState([]);
  useState([]);
  useEffect(() => {
    axios
      .get("https://ce52d6e5-08ba-4415-b9cd-d1008f522242.mock.pstmn.io/products")
      .then((res) => {
        products = res.data.products;
        setProducts(products);
      })
      .catch((err) => {
        return console.log(err);
      });
  }, []);
  return (
    <>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="banner" />
        </div>
        <h2>Products</h2>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div className="product-card" key={idx}>
                <div>
                  <img className="product-img" src={product.imageUrl} alt="{product.name}" />
                </div>
                <div className="product-content">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                  <div className="product-seller">
                    <img className="product-avatar" src="images/icons/avatar.png" alt="avatar" />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업:123-1234</a>
        <a href="#">사업자등록번호:456-4567</a>
        <a href="#">개인정보...</a>
      </div>
    </>
  );
};
export default MainPage;
