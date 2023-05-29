import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from "react-router-dom";
export function ProductItem(props) {
    let navigate = useNavigate()
    let { product } = props

    let goToProductDetails = (productId) => {
        navigate(`/products/${productId}`);
    }

    return (
            <Card className="productCard m-5 col-sm-6 col-md-3">
            <Card.Img style={{ height: '350px', objectFit: 'contain' }} variant="top" src={product.src} />
            <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    Price: {product.price} L.E.
                </Card.Text>
                <NavLink className="btn btn-light quickView m-2" to={`/productdetails/${product.id}`}>Quick View</NavLink>
                
            </Card.Body>
        </Card>
    )
    
}