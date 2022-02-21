import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams,useNavigate, Link } from "react-router-dom";


function Product({ product }) {
  const navigate = useNavigate();
  const a=useParams();

console.log(a)
/*  const foundProduct=poducts.find(elt=>elt.id==id) */
 const handleClick=()=>{

 }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Link to={`/products/${product.id}`} >
        <Button variant="primary" onClick={handleClick}>
          show details
        </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Product;
