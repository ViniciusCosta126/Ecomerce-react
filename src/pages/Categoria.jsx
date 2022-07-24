import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import CardProduto from '../components/CardProduto/CardProduto';
const Categoria = () => {
  const {nome} = useParams()
  const [produtos,setProdutos] = useState([])
  
  const getProdutos = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${nome}`);
    setProdutos(data);
    
  };
  useEffect(()=>{
    getProdutos()
  },[])
  return (
    <div className='container'>
      <h2 className='title_products_related'>Produtos desta categoria</h2>
      <div className="container-products">
        {produtos.map((produto) => {
          return <CardProduto produto={produto} key={produto.id} />;
        })}
      </div>
    </div>
  )
}

export default Categoria