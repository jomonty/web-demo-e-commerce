import React from 'react';
import styled from 'styled-components';
import { ProductDiv, ProductImg, ProductTextDiv, Button } from './Styles';

const RemoveFromBasketButton = styled(Button)`
    background-color: #990014;
    border: 1px solid #990014;
`

const BasketItem = ({ product, index, removeFromBasket }) => {

    const handleClick = () => {
        removeFromBasket(index);
    }

    return (
        <ProductDiv>
            <ProductImg src={product.images[0]} alt="product image" />
            <ProductTextDiv>
                <h4>{product.title}</h4>
                <p>{product.price.toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'GBP'
                })}</p>
                {/* <p>{product.description}</p> */}
                <RemoveFromBasketButton onClick={handleClick}>Remove</RemoveFromBasketButton>
            </ProductTextDiv>
        </ProductDiv>
    )
};

export default BasketItem