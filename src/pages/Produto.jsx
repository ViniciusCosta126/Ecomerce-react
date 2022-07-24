import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
const urlProdutct ="https://fakestoreapi.com/products/"
import './styleProduto.css'
import CardProduto from '../components/CardProduto/CardProduto';
const Produto = () => {
  const {id} = useParams()
  const [produto,setProduto] = useState('')
  const [produtos,setProdutos] = useState([])

  const getProduct = async (url)=>{
    const res = await fetch(url)
    const data = await res.json()
    setProduto(data)
    getProdutos()
  }

  useEffect(()=>{
    const productUrl = `${urlProdutct}${id}`
    getProduct(productUrl)
  },)

  const getProdutos = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${produto.category}`);
    setProdutos(data);
  };
  if(produto){
    return (
      <div className='container mt-5'>
      <div className=' container-produto'>
        <div className='container-img'>
          <img src={produto.image} alt="" />
        </div>
        <div className='container-content'>
          <h1>{produto.title}</h1>
          <p className='description'>{produto.description}</p>
          <p className="value">R${produto.price}</p>
          <button className='btn btn-success'>Adicionar ao Carrinho</button>
        </div>
      </div>
      <h2 className='title_products_related'>Prodoutos relacionados</h2>
      <div className="container-products">
        {produtos.map((produto) => {
          return <CardProduto produto={produto} key={produto.id} />;
        })}
      </div>
      </div>
    )
  }
  return(
    <>
      <h1>Carregando..</h1>
    </>
  )
}

export default Produto