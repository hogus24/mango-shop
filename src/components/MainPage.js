import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./MainPage.css";
import axios from "axios";
const MainPage = () => {
  let [products, setProducts] = React.useState([]);
  // 컴포넌트가 랜더 될 때 딱 한번 실행
  // useEffect (axios()=>{})
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
            console.log("map에서 반환된 products", products, idx);
            return (
              <div className="product-card" key={idx}>
                <Link className="product-link" to={`/product/${idx}`}>
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
                </Link>
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
