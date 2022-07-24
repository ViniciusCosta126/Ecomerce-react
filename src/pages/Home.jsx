import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduto from "../components/CardProduto/CardProduto";
import "./styleHome.css";
const Home = () => {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProdutos(data);
  };
  useEffect(() => {
    getProdutos();
  });

  return (
    <div className="container-main">
    <div className="container">
      <h2 className="title-home">Eletronicos</h2>
      <div className="container-products">
        {produtos.map((produto) => {
          if (produto.category == "electronics") {
            return <CardProduto produto={produto} key={produto.id} />;
          }
        })}
      </div>
      <h2 className="title-home">Joias</h2>
      <div className="container-products">
        {produtos.map((produto) => {
          if (produto.category == "jewelery") {
            return <CardProduto produto={produto} key={produto.id} />;
          }
        })}
      </div>
      <h2 className="title-home">Roupas masculinas</h2>
      <div className="container-products">
        {produtos.map((produto) => {
          if (produto.category == "men's clothing") {
            return <CardProduto produto={produto} key={produto.id} />;
          }
        })}
      </div>
      <h2 className="title-home">Roupas femininas</h2>
      <div className="container-products">
        {produtos.map((produto) => {
          if (produto.category == "women's clothing") {
            return <CardProduto produto={produto} key={produto.id} />;
          }
        })}
      </div>
    </div>
    </div>
  );
};

export default Home;
