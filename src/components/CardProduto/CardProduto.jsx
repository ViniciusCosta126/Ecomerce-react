import React from "react";
import { Card} from "react-bootstrap";
import {BiCart} from 'react-icons/bi'
import './style.css'
import {Link} from 'react-router-dom'
const CardProduto = ({ produto }) => {
  return (
    <Card className='card-item' style={{ width: "18rem",padding:"1rem" }}>
      <Link to={`/produto/${produto.id}`}><Card.Img style={{ height: "12rem" }} variant="top" src={produto.image} /></Link>
      <Card.Body>
        <Card.Title className="card_title">{produto.title}</Card.Title>
        <Card.Text className="card_desc">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

        <Card.Link className="link"><BiCart/>Add to cart</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardProduto;
